import {AppBar,Typography, Toolbar, Modal, Box} from "@mui/material";
import s from "./style.module.css";
import * as React from 'react';
import MenuHome from "./HomeComponents/MenuHome";
import StartingModal from "./HomeComponents/StartingModal";

 
export default function HomePage() {
    const [modalOpen, setModalOpen] = React.useState(true);
    const closeModal = () => setModalOpen(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuOpen = Boolean(anchorEl);
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>
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
            <img
                className={s.background}
                src="/navbackground.png"
                alt="Background"
            />

            <StartingModal
                modalOpen={modalOpen}
                closeModal={closeModal}
            />

        </div>
    );
}