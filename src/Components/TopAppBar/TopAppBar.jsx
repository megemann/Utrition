import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuHome from "./MenuHome";
import * as React from "react";
import s from "./style.module.css";

export default function TopAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuOpen = Boolean(anchorEl);
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

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
                    <img
                        className={s.seal}
                        src="/UmassSeal.png"
                        alt="Seal"
                    />
                </Toolbar>
            </AppBar>
    );
}