import {Typography,Modal, Box} from "@mui/material";


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

    },
    title: {
        fontFamily: "Times New Roman"
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
        <Box sx={style.popup}>
            <Box sx={style.popup}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={style.title}>
                    Dining Hall News
                </Typography>
            </Box>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        </Box>
    </Modal>
    );
}