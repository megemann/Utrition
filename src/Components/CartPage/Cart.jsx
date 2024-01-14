import { Box, Button, Stack, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import * as React from "react";
import s from "./style.module.css";
import API from "../../api/API";
import TopAppBar from "../TopAppBar/TopAppBar";
import Menu from "../../Menu";
import EndingModal from "./CartComponents/EndingModal";

const ADD = 1;
const SUB = 0;

export default function CartPage({itemCart, setNavItem, setItemCart}) {

    const [totalList, setTotalList] = React.useState([]);
    const [newItemCart, setNewItemCart] = React.useState([]);
    const [servingsList, setServingsList] = React.useState([]);
   
    const [menu, setMenu] = React.useState();

    const [modalOpen, setModalOpen] = React.useState(false);

    const [savedDate, setSavedDate] = React.useState([]);

    const onClickAdd = (event) => {
        onClick(0.25, event);
    }

    const onClickSub = (event) => {
        onClick(-0.25, event);
    }
    
    const onClick = (num, event) => {
        let newServingsList = servingsList;
        //iterates through the list until the button id is the same as the corresponding item id
        for (let i = 0; i < newItemCart.length; i++) {
            if (event.target.id === newItemCart[i].name) {
                newServingsList[i] = Math.max(newServingsList[i] + num, 0);
            }
        }
        setServingsList(newServingsList);
        reRender();
    }

    const reRender = () => {
        //Refreshes the table because an item in the mapped list changed
        let list = newItemCart;
        let date = list[0].daysServed;
        list[0].daysServed = ["N/A"];
        setNewItemCart(list);
        setSavedDate(date);
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

    React.useEffect(() => {

        let newCartlist = [];
        let newServingsList = [];
        //for each item in item cart
        for (let i = 0; i < itemCart.length; i++) {
            let item = itemCart[i];
            let exists = false;
            //check to see if item is already in the list, if so add a serving
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
            //for each item in the cart, add up each amount of every nutrient/calories
            for (let i = 0; i < newItemCart.length; i++) {
                totals[0] = totals[0] + servingsList[i]*parseFloat(newItemCart[i].cal);
                totals[1] = totals[1] + servingsList[i]*parseFloat(newItemCart[i].fg);
                totals[2] = totals[2] + servingsList[i]*parseFloat(newItemCart[i].smg);
                totals[3] = totals[3] + servingsList[i]*parseFloat(newItemCart[i].cg);
                totals[4] = totals[4] + servingsList[i]*parseFloat(newItemCart[i].sg);
                totals[5] = totals[5] + servingsList[i]*parseFloat(newItemCart[i].pg);
                totals[6] = totals[6] + servingsList[i]*parseFloat(newItemCart[i].fig);
            }     
            // push each element as a float with one digit
            for (let i = 0; i < 7; i++) {
                list.push(totals[i].toFixed(1));
            }
            setTotalList(list);
        }
    }, [servingsList, savedDate])

    React.useEffect(() => {
        //also a part of rerender, changes the date back to what it was
        if (itemCart.length > 0 && (itemCart[0]).daysServed == ["N/A"]) {
            let list = itemCart;
            list[0].daysServed = savedDate;
            setNewItemCart(list);
        }
        
    }, [newItemCart]);

    const postMenu = async menu => {
        try {
          const response = await API.postMenu(menu);
          console.log(response);
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
                                                                //for each entry, map it into a table cell
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
                                                                    <Button id={item.name} onClick={onClickSub} sx={{maxHeight: "20px", width: "100%", color:"rgb(134,15,31)"}} >
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