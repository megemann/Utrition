import TopAppBar from "../TopAppBar/TopAppBar";
import MenuList from "./MenuComponents/MenuList";
import s from "./style.module.css";
import {Box, Stack} from "@mui/material";
import FoodItemAPI from "../../api/itemAPI";
import  * as React from "react";
import Menu from "../../Menu";

const styles = {
    itembox: {
        marginTop:"100px",
        width:"95%",
        backgroundColor:"black", 
        marginLeft:"2.5%",
        position:"absolute",
        bottom:"3%",
        top:"0px",
    }
}



export default function MenuPage({setNavItem}) {
    const [menus, setMenus] = React.useState([]);
    const [currentMenu, setCurrentMenu] = React.useState(new Menu([], "", []));
    
    /* 
    divide screen into two boxes
    left side list
    right side menu view, when you hover over it, see if you can have the menu preview on the right
    when clicked, have menu be displayed on the right, then calorie count can be saved???
    Also make an option to send menu to cart
    should be two seperate components    
    */


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
                            <Box sx={{width: "50%", backgroundColor:"white"}}>help</Box>
                    </Stack>
                </Box>
            </div>
                
        </>
    )
}