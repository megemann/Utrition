import TopAppBar from "../TopAppBar/TopAppBar";
import MenuList from "./MenuComponents/MenuList";
import s from "./style.module.css";
import {Box, Stack} from "@mui/material";
import FoodItemAPI from "../../api/itemAPI";
import  * as React from "react";
import Menu from "../../Menu";
import MenuDisplay from "./MenuComponents/MenuDisplay";

const styles = {
    itembox: {
        marginTop:"100px",
        width:"95%",

        marginLeft:"2.5%",
        position:"absolute",
        bottom:"3%",
        top:"0px",
    }
}



export default function MenuPage({setNavItem, setItemCart}) {
    const [menus, setMenus] = React.useState([]);
    const [currentMenu, setCurrentMenu] = React.useState(new Menu([], "", []));

    const fetchMenus = async () =>{
        try
        {
            setMenus(await FoodItemAPI.fetchMenus());
        } 
        catch(err)
        {console.log(err);}
    };

    React.useEffect(() => {
        fetchMenus();
    },[]);

    return (
        <>
            <TopAppBar diningHall={""} setNavItem={setNavItem} />
            <div className={s.background}>
                <Box sx={styles.itembox}>
                    <Stack direction={"row"}>
                            <MenuList menus={menus} setCurrentMenu={setCurrentMenu}></MenuList>
                            <MenuDisplay currentMenu={currentMenu} setNewCart={setItemCart}/>
                    </Stack>
                </Box>
            </div>
                
        </>
    )
}