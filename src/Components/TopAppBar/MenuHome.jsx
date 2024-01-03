import { Menu, MenuItem, Fade, IconButton} from "@mui/material";


import MenuIcon from '@mui/icons-material/Menu';


export default function MenuHome({handleClick, open, handleClose, anchorEl}) {
    return (
        <>
            <IconButton
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                <MenuIcon/> {/* Icon fromm mui*/}
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    );
}