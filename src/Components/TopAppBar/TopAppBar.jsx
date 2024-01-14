import { AppBar, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import s from "./style.module.css";
import API from "../../api/API";
import MenuHome from "./AppBarComponents/MenuHome";
import SearchBar from "./AppBarComponents/SearchBar";


export default function TopAppBar({diningHall, setNavItem}) {

    const [items, setItems] = React.useState([]);
    const [focused, setFocused] = React.useState(false);
    
    //top left menu code
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuOpen = Boolean(anchorEl);
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    //done to bypass having to have access to nav drawer, as it is not its own component in nav drawer
    const fetchAllItems = async () =>{
        try
        {
          setItems(await API.fetchAllItems());
          console.log(items);
        } 
        catch(err)
        {console.log(err);}
    };
    const fetchItems = async (diningHall) =>{
        try
        {
          setItems([await API.fetchItems(diningHall)]);
          console.log(items);
        } 
        catch(err)
        {console.log(err);}
    };

    React.useEffect(() => {
        if (diningHall === "") {
            fetchAllItems();
        } else {
            fetchItems(diningHall);
        }
    },[diningHall, focused]);

    return (
        <AppBar className={s.appBar} position="fixed" sx={{backgroundColor: "rgb(134,15,31)"}}>
            <Toolbar>
                <MenuHome
                    handleClick={handleMenuClick}
                    open={menuOpen}
                    handleClose={handleMenuClose}
                    anchorEl={anchorEl}    
                />
                <Typography className={s.appHeader} variant="h2">
                    <b>U</b>trition
                </Typography>
                <SearchBar items={items} onFocused={setFocused} setItem={setNavItem}/>
                <img
                    className={s.seal}
                    src="/UmassSeal.png"
                    alt="Seal"
                />
            </Toolbar>
        </AppBar>
    );
}