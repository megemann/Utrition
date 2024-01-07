import * as React from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import DiningGrid from "../../HomePage/HomeComponents/DiningGrid/DiningGrid";



export default function DiningSelect({onSelectChange}) {
    const [diningHall, setDiningHall] = React.useState('');

    const handleSelectChange = (event) => {
        setDiningHall(event.target.value)
        onSelectChange(event.target.value);
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="diningHall" size="small">Dining Common</InputLabel>
            <Select
                labelId="diningHall"
                id="diningHall"
                value={diningHall}
                label="Dining Common"
                onChange={handleSelectChange}
            >
            <MenuItem value={"Worcester"}>Worcester</MenuItem>
            <MenuItem value={"Berkshire"}>Berkshire</MenuItem>
            <MenuItem value={"Franklin"}>Franklin</MenuItem>
            <MenuItem value={"Hampshire"}>Hampshire</MenuItem>
            </Select>
        </FormControl>
    );

}