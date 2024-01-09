import { Typography, Box, Stack } from "@mui/material";
import TopAppBar from "../TopAppBar/TopAppBar";
import s from "./style.module.css"
import ItemTable from "./DiningHallPageComponents/ItemTable";
import FilterChecklist from "./DiningHallPageComponents/FilterChecklist";
import * as React from "react";

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

    const [tableHeaders, setTableHeaders] = React.useState([]);

    return (
        <>
            <TopAppBar/>
            <div className={s.background}>
                <Box className={s.header}>
                    {hallName}
                </Box>
                <Box sx={styles.itembox}>
                        <Stack direction={"row"}>
                            <ItemTable items={items} headers={tableHeaders}/>
                            <FilterChecklist onCheckChange={setTableHeaders} submitted={false}></FilterChecklist>
                    </Stack>

                </Box>

            </div>
        </>

    );
}