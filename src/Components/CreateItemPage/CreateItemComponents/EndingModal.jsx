import {Typography,Modal, Box, Button} from "@mui/material";
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

export default function EndingModal({modalOpen, closeModal, name}) {

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/");
    }
    return (
        <Modal
        open={modalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style.popup} align={"center"}>
            <Box sx={style.titlebox}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={style.title} align="center">
                    <i><b>{name} was successfully created!</b></i>
                </Typography>
            </Box>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Thank you for your contribution.
        </Typography>
        <Button sx={style.button} onClick={navigateHome}>
            <b>Return to Home</b>
        </Button>
        </Box>
    </Modal>
    );
}