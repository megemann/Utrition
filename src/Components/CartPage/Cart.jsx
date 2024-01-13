import TopAppBar from "../TopAppBar/TopAppBar";
import s from "./style.module.css";
import { Box, Stack, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import * as React from "react";
import FoodItemAPI from "../../api/itemAPI";
import Menu from "../../Menu";
import EndingModal from "./CartComponents/EndingModal";

const ADD = 1;
const SUB = 0;



export default function CartPage({itemCart, setNavItem, setItemCart}) {

    /*
    Whats left:
        add meal viewing page

        export table to a different document here

        add login support
        add user ids

        code clean up
        commnet code
        
        ?add profile stuff
        ?add advanced style
        
    */
    const [totalList, setTotalList] = React.useState([]);
    const [newItemCart, setNewItemCart] = React.useState([]);
    const [servingsList, setServingsList] = React.useState([]);
    const [menu, setMenu] = React.useState();

    const [savedDate, setSavedDate] = React.useState([]);

    const onClickAdd = (event) => {
        onClick(0.25, event);
    }

    const onClickSub = (event) => {
        onClick(-0.25, event);
    }

    const deleteItem = (event) => {
        let list = [];
        for (let i = 0; i < itemCart.length; i++) {
            if (itemCart[i].name !== event.target.id) { //id is the name
                list.push(itemCart[i]);
            }
        }
        setItemCart(list);
        
        //it will refresh if it has any items still left
        setTotalList(["Total", "N/A", 0,0,0,0,0,0,0]);
   
    }
    
    const onClick = (num, event) => {
        let newServingsList = servingsList;
        for (let i = 0; i < newItemCart.length; i++) {
            if (event.target.id === newItemCart[i].name) {
                newServingsList[i] = Math.max(newServingsList[i] + num, 0);
            }
        }
        setServingsList(newServingsList);
        reRender();
    }

    const reRender = () => {
        let list = newItemCart;
        let date = list[0].daysServed;
        list[0].daysServed = ["N/A"];
        setNewItemCart(list);
        setSavedDate(date);
    }



    React.useEffect(() => {

        let newCartlist = [];
        let newServingsList = [];
        for (let i = 0; i < itemCart.length; i++) {
            let item = itemCart[i];
            let exists = false;
            for (let j = 0; j < newCartlist.length; j++) {
                if (newCartlist[j].name === item.name) {
                    newServingsList[j] = newServingsList[j] + 1;
                    exists = true;
                } 
            }
            if (!exists) {
                newCartlist.push(item);
                newServingsList.push(1);
            }
        }
        setNewItemCart(newCartlist);
        setServingsList(newServingsList);
        

    }, [itemCart]);

    React.useEffect(() => {
        let list = ["Total", "N/A"];
        if (newItemCart.length > 0) {
            let totals = [0,0,0,0,0,0,0];
            for (let i = 0; i < newItemCart.length; i++) {
                totals[0] = totals[0] + servingsList[i]*parseFloat(newItemCart[i].cal);
                totals[1] = totals[1] + servingsList[i]*parseFloat(newItemCart[i].fg);
                totals[2] = totals[2] + servingsList[i]*parseFloat(newItemCart[i].smg);
                totals[3] = totals[3] + servingsList[i]*parseFloat(newItemCart[i].cg);
                totals[4] = totals[4] + servingsList[i]*parseFloat(newItemCart[i].sg);
                totals[5] = totals[5] + servingsList[i]*parseFloat(newItemCart[i].pg);
                totals[6] = totals[6] + servingsList[i]*parseFloat(newItemCart[i].fig);
            }     
            list.push(totals[0].toFixed(1));
            list.push(totals[1].toFixed(1));
            list.push(totals[2].toFixed(1));
            list.push(totals[3].toFixed(1));
            list.push(totals[4].toFixed(1));
            list.push(totals[5].toFixed(1));
            list.push(totals[6].toFixed(1));
            setTotalList(list);
        }
    }, [servingsList, savedDate])

    React.useEffect(() => {
        if (itemCart.length > 0 && (itemCart[0]).daysServed == ["N/A"]) {
            let list = itemCart;
            list[0].daysServed = savedDate;
            setNewItemCart(list);
        }
        
    }, [newItemCart]);

    const postMenu = async menu => {
        try {
          const response = await FoodItemAPI.postMenu(menu);
          console.log(response);
        //   setName(item.name);
        //   setNutritionText([]);
        //   setDayList([]);
        //   setDiningHall("");
        //   setSubmitted(!submitted);
        //   setModalOpen(true);
        } catch(err) {
          console.log(err);
        }
      };

    React.useEffect(() => {
        if (menu) {
          postMenu(menu.state);
        }
      }, [menu]);

    const submitMenu = () => {
        if (newItemCart.length > 0) {
            let newTotal = [];
            for (let i = 2; i < totalList.length; i++) {
                newTotal.push(parseFloat(totalList[i]));
            }
            setMenu(new Menu(newItemCart, "", newTotal));
            setModalOpen(true);
            setItemCart([]);
        } else {
            alert("Cart is empty! please fill.")
        }

    }

    const [modalOpen, setModalOpen] = React.useState(false);

    return (
        <div style={{justifyContent:"center", display:"flex"}}>
            <TopAppBar diningHall={""} setNavItem={setNavItem}/>
            <EndingModal modalOpen={modalOpen}/>
            <div className={s.background}>
                <div style={{justifyContent:"center", display:"flex", width:"100%"}}>
                    <Stack>
                        <Box className={s.box}>
                            <Stack>
                                {
                                    <TableContainer sx={{backgroundColor:"white"}}>
                                    <Table sx={{overflowY:"scroll"}}>
                                        <TableHead>
                                            <TableRow sx={{backgroundColor:"rgb(134,15,31)"}}>
                                                <TableCell sx={{color:"white"}}>Name</TableCell>
                                                <TableCell sx={{color:"white"}}>SS</TableCell>
                                                <TableCell sx={{color:"white"}}>Cals</TableCell>
                                                <TableCell sx={{color:"white"}}>FG</TableCell>
                                                <TableCell sx={{color:"white"}}>SMG</TableCell>
                                                <TableCell sx={{color:"white"}}>CG</TableCell>
                                                <TableCell sx={{color:"white"}}>SG</TableCell>
                                                <TableCell sx={{color:"white"}}>PG</TableCell>
                                                <TableCell sx={{color:"white"}}>FIG</TableCell>
                                                <TableCell sx={{color:"white"}}>Servings</TableCell>
                                                <TableCell sx={{color:"white"}}>Remove</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody sx={{overflow:"scroll"}}>
                                            {
                                                newItemCart.map((item) => {
                                                    
                                                    return(
                                                        <TableRow key={item.id.timestamp}>
                                                            <TableCell>{item.name}</TableCell>
                                                            {
                                                                Object.entries(item).map(([key, value]/*parameters that give us access to entries*/) => {
                                                                    
                                                                    if ((key !== "id") && (key !== "name") && (key !=="daysServed")) { 
                                                                        return(
                                                                            <TableCell>{value}</TableCell>
                                                                            );                    
                                                                    }
                                                                })
                                                            } 
                                                            <TableCell > 
                                                                <Stack >
                                                                    <Button id={item.name} onClick={onClickAdd} sx={{maxHeight: "20px", width: "100%", color:"rgb(134,15,31)"}}>
                                                                        +
                                                                    </Button>
                                                                    <Box sx={{textAlign:"center"}}>
                                                                        {newItemCart.map((item2) => {
                                                                            //this was done to bypass a rendering error, tried to set a state but wouldn't work
                                                                            if (item2.name === item.name) {
                                                                                for (let i = 0; i < newItemCart.length; i++) {
                                                                                    if (item2.name === newItemCart[i].name) {
                                                                                        return (
                                                                                            <Box> {servingsList[i]} </Box>
                                                                                        );
                                                                                    }
                                                                                }
                                                                            }

                                                                        })}
                                                                    </Box>
                                                                    <Button id={item.name} sx={{maxHeight: "20px", width: "100%", color:"rgb(134,15,31)"}} onClick={onClickSub}>
                                                                        -
                                                                    </Button>
                                                                </Stack>  
                                                            </TableCell>
                                                            <TableCell>
                                                                <Button id={item.name} onClick={deleteItem} sx={{maxHeight: "50px", width: "50%", color:"rgb(134,15,31)"}}>
                                                                    Delete
                                                                </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                            }
                                            <TableRow key={totalList[2]}>
                                            {
                                                totalList.map((entry) => {
                                                    return (
                                                        <TableCell key={entry.cal}>{entry}</TableCell>
                                                    );
                                                })
                                            }
                                            </TableRow>

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                }
                            </Stack>
                        </Box>
                        <Button onClick={submitMenu}>
                            Submit
                        </Button>
                    </Stack>
                </div>
            </div>   
        </div>
    );
}