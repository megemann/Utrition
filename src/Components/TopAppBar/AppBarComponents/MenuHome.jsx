import { Fade, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

export default function MenuHome({handleClick, open, handleClose, anchorEl}) {
    const navigate = useNavigate();

    const navigateCreateItem = () => {
        navigate("/CreateItem")
        handleClose();
    }

    const navigateHome = () => {
        navigate("/");
        handleClose();
    }

    const navigateCart = () => {
        navigate("/cart");
        handleClose();
    }

    const navigateMenus = () => {
        navigate("/menus");
        handleClose();
    }

    return (
        <>
            <IconButton
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon sx={{filter: "invert(1)"}}/> {/* Icon from mui*/}
            </IconButton>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {/*all items*/}
                <MenuItem onClick={navigateCreateItem}>Create Item</MenuItem>
                <MenuItem onClick={navigateHome}>Home</MenuItem>
                <MenuItem onClick={navigateCart}>Cart</MenuItem>
                <MenuItem onClick={navigateMenus}>Menus</MenuItem>
            </Menu>
        </>
    );
}