import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import * as React from "react";
import s from "./style.module.css";
import TopAppBar from "../TopAppBar/TopAppBar";
import EndingModal from "./ItemPageComponents/EndingModal";

export default function ItemPage({item, setNavItem, cartItems, setCartItems}) {

    let daysString;
    if (item?.daysServed?.length > 0) {
        daysString = item.daysServed.join(", ")
    }

    const onCartClick = () => {
        let list = cartItems;
        list.push(item);
        setCartItems(list);
        console.log(list);
        setModalOpen(true);
    }

    const [modalOpen, setModalOpen] = React.useState(false);
    
    return (
        <div>
            <TopAppBar diningHall={""} setNavItem={setNavItem}/>
            <div className={s.background}>
                <Box className={s.box}>
                    <Stack 
                        sx={{mt: "30px", justifyContent:"center"}}
                        spacing={2}
                        divider={<Divider orientation="horizontal" flexItem />}
                    >
                        <Typography className={s.typo}>
                            Name: {item.name}
                        </Typography>
                        <Typography className={s.typo}>
                            Serving Size: {item.ss}
                        </Typography>
                        <Typography className={s.typo}>
                            Calories: {item.cal}
                        </Typography >
                        <Typography className={s.typo}>
                            Grams of Fat: {item.fg}
                        </Typography>
                        <Typography className={s.typo}>
                            Milligrams of Sodium: {item.smg}
                        </Typography>
                        <Typography className={s.typo}>
                            Grams of Carbs: {item.cg}
                        </Typography>
                        <Typography className={s.typo}>
                            Grams of Sugar: {item.sg}
                        </Typography>
                        <Typography className={s.typo}>
                            Grams of Protein: {item.pg}
                        </Typography>
                        <Typography className={s.typo}>
                            Grams of Fiber: {item.fig}
                        </Typography>
                        <Typography className={s.typo} >
                            Days Served: {daysString}
                        </Typography>
                        <Button onClick={onCartClick}>
                            Add to Shopping
                        </Button>
                    </Stack>
                </Box>
                <EndingModal modalOpen={modalOpen} name={item.name}/>
            </div>
        </div>

    )
}