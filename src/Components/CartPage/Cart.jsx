import TopAppBar from "../TopAppBar/TopAppBar";
import s from "./style.module.css";
import { Box } from "@mui/material";

export default function CartPage({itemCart, setNavItem}) {
    return (
        <div>
            <TopAppBar diningHall={""} setNavItem={setNavItem}/>
            <div className={s.background}>
                <Box className={s.box}>
                    content
                </Box>
            </div>
        </div>

    );
}