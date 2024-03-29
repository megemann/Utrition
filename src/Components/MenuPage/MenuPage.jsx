import {Box, Stack} from "@mui/material";
import  * as React from "react";
import s from "./style.module.css";
import API from "../../api/API";
import Menu from "../../Menu";
import MenuDisplay from "./MenuComponents/MenuDisplay";
import MenuList from "./MenuComponents/MenuList";
import TopAppBar from "../TopAppBar/TopAppBar";

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
            setMenus(await API.fetchAllMenus());
        } 
        catch(err)
        {console.log(err);}
    };

    React.useEffect(() => {
        fetchMenus();
    },[]);

    return (
        <>
            <TopAppBar diningHall={""} setNavItem={setNavItem}/>
            <div className={s.background}>
                <Box sx={styles.itembox}>
                    <Stack direction={"row"}>
                        <MenuList menus={menus} setCurrentMenu={setCurrentMenu}/>
                        <MenuDisplay currentMenu={currentMenu} setNewCart={setItemCart}/>
                    </Stack>
                </Box>
            </div>   
        </>
    )
}