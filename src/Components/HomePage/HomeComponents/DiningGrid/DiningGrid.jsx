import {Box, Button, Grid, Typography} from "@mui/material";
import s from "./style.module.css";
import { useNavigate } from "react-router-dom";

const simpleStyles = {
    button: {
        width: "98%",
        height: "98%",
        justifyContent:"center",
    }
}


export default function DiningGrid({diningSet}) {

    const navigate = useNavigate();

    const navigateWoo = () => {
        diningSet("Worcester");
        navigate("/Worcester");
    }

    const navigateBerk = () => {
        diningSet("Berkshire")
        navigate("/Berkshire");
    }

    const navigateFrank = () => {
        diningSet("Franklin")
        navigate("/Franklin");
    }

    const navigateHamp = () => {
        diningSet("Hampshire");
        navigate("/Hampshire");
    }

    return (
        <Box sx={{flexGrow:1}}>
            <Grid container spacing={2} sx={{padding: "15px", height:"93vh"}}>
                <Grid item xs={6}>
                    <Button className={s.woobutton} sx={simpleStyles.button} onClick={navigateWoo}>
                        <Box className={s.wooimagebox}/> 
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={s.berkbutton} sx={simpleStyles.button} onClick={navigateBerk}>
                        <Box className={s.berkimagebox}/>               
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={s.frankbutton} sx={simpleStyles.button} onClick={navigateFrank}>
                        <Box className={s.frankimagebox}/>
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={s.hampbutton} sx={simpleStyles.button} onClick={navigateHamp}>
                        <Box className={s.hampimagebox}/>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );

}