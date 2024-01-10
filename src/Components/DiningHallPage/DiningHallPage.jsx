import { Typography, Box, Stack, Button } from "@mui/material";
import TopAppBar from "../TopAppBar/TopAppBar";
import s from "./style.module.css"
import ItemTable from "./DiningHallPageComponents/ItemTable";
import FilterChecklist from "./DiningHallPageComponents/FilterChecklist";
import * as React from "react";
import { useNavigate } from "react-router-dom";

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

export default function DiningHallPage({hallName, items, setNavItem}) {

    const navigate = useNavigate();

    const navCreateItem = () => {
        navigate("/CreateItem");
    };

    const [tableHeaders, setTableHeaders] = React.useState([]);

    return (
        <>
            <TopAppBar diningHall={hallName} setNavItem={setNavItem}/>
            <div className={s.background}>
                <Box className={s.header}>
                    {hallName}
                </Box>
                <Button color={"success"} onClick={navCreateItem}>
                    Don't see your item?
                </Button>
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