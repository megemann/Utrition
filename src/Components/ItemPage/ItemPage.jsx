import { Box, Stack, Typography, Divider, Button} from "@mui/material";
import TopAppBar from "../TopAppBar/TopAppBar"
import s from "./style.module.css"
import * as React from "react";

export default function ItemPage({item, setNavItem, cartItems, setCartItems}) {
    const setTheItem = (navItem) => {
        setNavItem(navItem);
    };

    let daysString;
    if (item?.daysServed?.length > 0) {
        daysString = item.daysServed[0];
        for (let i = 0; i < item.daysServed?.length - 1; i++) {
            daysString = daysString + item.daysServed[i] + ", ";
        }
    }


    
    return (
        <div>
            <TopAppBar diningHall={""} setNavItem={setTheItem}/>
            <div className={s.background}>
                <Box className={s.box}>
                    <Stack sx={{mt: "30px", justifyContent:"center"}}
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
                        <Button>
                            Add to Shopping
                        </Button>
                    </Stack>
                </Box>
            </div>
        </div>

    )
}