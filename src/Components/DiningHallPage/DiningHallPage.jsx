import { Typography, Box, Stack } from "@mui/material";
import TopAppBar from "../TopAppBar/TopAppBar";
import s from "./style.module.css"
import ItemTable from "./DiningHallPageComponents/ItemTable";

const styles = {
    itembox: {
        mt:"80px", 
        width:"95%",  
        ml:"2.5%", 
        position:"absolute", 
        bottom:"3%", 
        top:"0px"
    }
}

export default function DiningHallPage({hallName, items}) {
    return (
        <>
            <TopAppBar/>
            <div className={s.background}>
                <Box className={s.header}>
                    {hallName}
                </Box>
                <Box sx={styles.itembox}>
                        <Stack direction={"row"}>
                            <ItemTable items={items}/>
                        <Box sx={{mr: "2%", width:"28%",backgroundColor:"black"}}>
                            cont
                        </Box>
                    </Stack>

                </Box>

            </div>
        </>

    );
}