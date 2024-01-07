import {FormGroup, FormLabel, FormControlLabel, FormControl, Checkbox} from "@mui/material"
import * as React from "react";


export default function DayChecklist({onCheckChange, submitted}) {

    const [sundayChecked, setSundayChecked] = React.useState(false);
    const [mondayChecked, setMondayChecked] = React.useState(false);
    const [tuesdayChecked, setTuesdayChecked] = React.useState(false);
    const [wednesdayChecked, setWednesdayChecked] = React.useState(false);
    const [thursdayChecked, setThursdayChecked] = React.useState(false);
    const [fridayChecked, setFridayChecked] = React.useState(false);
    const [saturdayChecked, setSaturdayChecked] = React.useState(false);
    const [selectAll, setSelectAll] = React.useState(false)

    const handleSundayChange = (event) => {
        setSundayChecked(event.target.checked);
    }

    const handleMondayChange = (event) => {
        setMondayChecked(event.target.checked);
    }

    const handleTuesdayChange = (event) => {
        setTuesdayChecked(event.target.checked);
    }

    const handleWednesdayChange = (event) => {
        setWednesdayChecked(event.target.checked);
    }

    const handleThursdayChange = (event) => {
        setThursdayChecked(event.target.checked);
    }

    const handleFridayChange = (event) => {
        setFridayChecked(event.target.checked);
    }

    const handleSaturdayChange = (event) => {
        setSaturdayChecked(event.target.checked);
    }

    const handleSelectAllChange = (event) => {
        setSundayChecked(event.target.checked);
        setMondayChecked(event.target.checked);
        setTuesdayChecked(event.target.checked);
        setWednesdayChecked(event.target.checked);
        setThursdayChecked(event.target.checked);
        setFridayChecked(event.target.checked);
        setSaturdayChecked(event.target.checked);
        setSelectAll(event.target.checked);
    }

    React.useEffect(() => {
        const dayList = []
        if (sundayChecked) {
            dayList.push("Sunday");
        }
        if (mondayChecked) {
            dayList.push("Monday");
        }

        if (tuesdayChecked) {
            dayList.push("Tuesday");
        }
        if (wednesdayChecked) {
            dayList.push("Wednesday");
        }

        if (thursdayChecked) {
            dayList.push("Thursday");
        }
        if (fridayChecked) {
            dayList.push("Friday");
        }

        if (saturdayChecked) {
            dayList.push("Saturday");
        }
        onCheckChange(dayList);
    }, [sundayChecked, mondayChecked, tuesdayChecked, wednesdayChecked, thursdayChecked, fridayChecked, saturdayChecked]);

    React.useEffect(() => {
        setSundayChecked(false);
        setMondayChecked(false);
        setTuesdayChecked(false);
        setWednesdayChecked(false);
        setThursdayChecked(false);
        setFridayChecked(false);
        setSaturdayChecked(false);
        setSelectAll(false);
    }, [submitted]);



    return (
        <FormControl fullWidth>
            <FormGroup row sx={{justifyContent:"center"}}>
                <FormLabel component="legend">Days Served:</FormLabel>
                <FormControlLabel 
                control={<Checkbox
                            checked={sundayChecked}
                            onChange={handleSundayChange}
                            sx={{'&.Mui-checked': {
                                color: "rgba(89,14,25, 0.9)"
                            }}}
                        />} 
                label="Sunday"
                labelPlacement="bottom"
                />

                <FormControlLabel 
                control={<Checkbox
                            checked={mondayChecked}
                            onChange={handleMondayChange}
                            sx={{'&.Mui-checked': {
                                color: "rgba(89,14,25, 0.9)"
                            }}}
                        />} 
                label="Monday"
                labelPlacement="bottom"
                />

                <FormControlLabel 
                control={<Checkbox
                            checked={tuesdayChecked}
                            onChange={handleTuesdayChange}
                            sx={{'&.Mui-checked': {
                                color: "rgba(89,14,25, 0.9)"
                            }}}
                        />} 
                label="Tuesday"
                labelPlacement="bottom"
                />

                <FormControlLabel 
                control={<Checkbox
                            checked={wednesdayChecked}
                            onChange={handleWednesdayChange}
                            sx={{'&.Mui-checked': {
                                color: "rgba(89,14,25, 0.9)"
                            }}}
                        />} 
                label="Wednesday"
                labelPlacement="bottom"
                />

                <FormControlLabel 
                control={<Checkbox
                            checked={thursdayChecked}
                            onChange={handleThursdayChange} 
                            sx={{'&.Mui-checked': {
                                color: "rgba(89,14,25, 0.9)"
                            }}}
                        />} 
                label="Thursday"
                labelPlacement="bottom"
                />

                <FormControlLabel 
                control={<Checkbox
                            checked={fridayChecked}
                            onChange={handleFridayChange}
                            sx={{'&.Mui-checked': {
                                color: "rgba(89,14,25, 0.9)"
                            }}}
                        />} 
                label="Friday"
                labelPlacement="bottom"
                />

                <FormControlLabel 
                control={<Checkbox
                            checked={saturdayChecked}
                            onChange={handleSaturdayChange}
                            sx={{'&.Mui-checked': {
                                color: "rgba(89,14,25, 0.9)"
                            }}}
                        />} 
                label="Saturday"
                labelPlacement="bottom"
                />   

                <FormControlLabel 
                control={<Checkbox
                            checked={selectAll}
                            onChange={handleSelectAllChange}
                            sx={{'&.Mui-checked': {
                                color: "rgba(89,14,25, 0.9)"
                            }}}
                        />} 
                label="Select All"
                labelPlacement="bottom"
                />   

            </FormGroup>
        </FormControl>
        
    );

}