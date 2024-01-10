import {Typography,Modal, Box, Button, Stack} from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as React from "react";

const today = new Date();

const style = {
    popup: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
    titlebox: {
        marginLeft: "10%",
        marginRight: "10%",
        top: 0,
        backgroundColor: "white",
        border: '5px solid #000',
        justifyContent: "center"
    },
    title: {
        fontFamily: "Times New Roman",
        justifySelf: "center"
    },
    button: {
        backgroundColor: "rgb(134,15,31)",
        mt:"2vh",
        width:"40%",
        top: 0,
        height: "50px",
        border: '5px solid #000',
        justifyContent: "center",
        color:"black",

        "&:hover": {
            backgroundColor:"Green"
        }
        
    }
  };

export default function EndingModal({modalOpen, name}) {

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/");
    }

    const navigateCart = () => {
        navigate("/cart");
    }

    return (
        <Modal
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style.popup} align={"center"}>
            <Box sx={style.titlebox}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={style.title} align="center">
                    <i><b>{name} was successfully added!</b></i>
                </Typography>
            </Box>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Thank you for your contribution.
        </Typography>
        <Stack
        direction={"row"}
        spacing={3}
        sx={{mt:"3vh", justifyContent:"center"}}
        
        >
        <Button sx={style.button} onClick={navigateHome}>
            <b>Return to Home</b>
        </Button>
        <Button sx={style.button} onClick={navigateCart}>
            <b>Finish at Cart</b>
        </Button>
        </Stack>

        </Box>
    </Modal>
    );
}