import {Box, Button, Grid, Typography} from "@mui/material";
import s from "./style.module.css";
import { useNavigate } from "react-router-dom";

const styles = {
    button: {
        width: "98%",
        height: "98%",
        justifyContent:"center",
    }
}


export default function DiningGrid({setDining}) {

    const navigate = useNavigate();

    const navigateWoo = () => {
        setDining("Worcester");
        navigate("/Worcester");
    }

    const navigateBerk = () => {
        setDining("Berkshire")
        navigate("/Berkshire");
    }

    const navigateFrank = () => {
        setDining("Franklin")
        navigate("/Franklin");
    }

    const navigateHamp = () => {
        setDining("Hampshire");
        navigate("/Hampshire");
    }

    return (
        <Box sx={{flexGrow:1}}>
            <Grid container spacing={2} sx={{padding: "15px", height:"93vh"}}>
                <Grid item xs={6}>
                    <Button className={s.woobutton} sx={styles.button} onClick={navigateWoo}>
                        <Box className={s.wooimagebox}/> 
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={s.berkbutton} sx={styles.button} onClick={navigateBerk}>
                        <Box className={s.berkimagebox}/>               
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={s.frankbutton} sx={styles.button} onClick={navigateFrank}>
                        <Box className={s.frankimagebox}/>
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={s.hampbutton} sx={styles.button} onClick={navigateHamp}>
                        <Box className={s.hampimagebox}/>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );

}