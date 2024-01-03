import {AppBar,Typography, Toolbar, Box, Container} from "@mui/material";
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
            <StartingModal
                modalOpen={modalOpen}
                closeModal={closeModal}
            />
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
            <Box>
                <img
                    className={s.background}
                    src="/navbackground.png"
                    alt="Background"
                />
            </Box>




        </div>
    );
}