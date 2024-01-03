import {Typography,Modal, Box} from "@mui/material";
import { Today } from "@mui/icons-material";

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
        marginLeft: "25%",
        marginRight: "25%",
        top: 0,
        height: 70,
        backgroundColor: "white",
        border: '5px solid #000',
        justifyContent: "center"
    },
    title: {
        fontFamily: "Times New Roman",
        justifySelf: "center"
    }
  };

export default function StartingModal({modalOpen, closeModal}) {
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
                    <i><b>Dining Hall News {`${today.getMonth() + 1}/${today.getDay()}/${today.getFullYear()}`} </b></i>
                </Typography>
            </Box>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <img 
        src="/diningExample.jfif"
        >
        
        </img>
        </Box>
    </Modal>
    );
}