import TopAppBar from "../TopAppBar/TopAppBar";
import s from "./style.module.css";
import { Box, Stack, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import * as React from "react";

export default function CartPage({itemCart, setNavItem}) {

    /*
    Whats left:
        delete each item on the list
        dont allow duplicates on the list
        adjust the servings on the list
        reflect this in the total

        add meal support
        add meal viewing page
        add meal api

        add login support
        add user ids

        code clean up
        
        ?add profile stuff
        ?add advanced style
        
    */
    const [totalList, setTotalList] = React.useState([]);

    React.useEffect(() => {
        let list = ["Total", "N/A"];
        if (itemCart.length > 0) {
            let totals = [0,0,0,0,0,0,0];
            for (let i = 0; i < itemCart.length; i++) {
                totals[0] = totals[0] + parseFloat(itemCart[i].cal);
                totals[1] = totals[1] + parseFloat(itemCart[i].fg);
                totals[2] = totals[2] + parseFloat(itemCart[i].smg);
                totals[3] = totals[3] + parseFloat(itemCart[i].cg);
                totals[4] = totals[4] + parseFloat(itemCart[i].sg);
                totals[5] = totals[5] + parseFloat(itemCart[i].pg);
                totals[6] = totals[6] + parseFloat(itemCart[i].fig);
            }     
            list.push(totals[0]);
            list.push(totals[1]);
            list.push(totals[2]);
            list.push(totals[3]);
            list.push(totals[4]);
            list.push(totals[5]);
            list.push(totals[6]);
            setTotalList(list);
        }
        
    }, [itemCart])



    return (
        <div>
            <TopAppBar diningHall={""} setNavItem={setNavItem}/>
            <div className={s.background}>
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
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{overflow:"scroll"}}>
                                    {
                                        itemCart.map((item) => {
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
                                                </TableRow>
                                            )
                                        })
                                    }
                                    {
                                        totalList.map((entry) => {
                                            return (
                                                <TableCell>{entry}</TableCell>
                                            );
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        }
                    </Stack>
                </Box>
            </div>
        </div>

    );
}