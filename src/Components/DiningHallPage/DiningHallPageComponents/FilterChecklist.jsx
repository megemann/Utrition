import {FormGroup, FormLabel, FormControlLabel, FormControl, Checkbox, Box} from "@mui/material"
import * as React from "react";


export default function FilterChecklist({onCheckChange}) {

    const [ssChecked, setSsChecked] = React.useState(true);
    const [calChecked, setCalChecked] = React.useState(true);
    const [fgChecked, setFgChecked] = React.useState(false);
    const [smgChecked, setSmgChecked] = React.useState(false);
    const [cgChecked, setCgChecked] = React.useState(false);
    const [sgChecked, setSgChecked] = React.useState(false);
    const [pgChecked, setPgChecked] = React.useState(false);
    const [figChecked, setFigChecked] = React.useState(false);
    const [selectAll, setSelectAll] = React.useState(false);

    const [showToday, setShowToday] = React.useState(false);

    const handleSsChange = (event) => {
        setSsChecked(event.target.checked);
    }

    const handleCalChange = (event) => {
        setCalChecked(event.target.checked);
    }

    const handleFgChange = (event) => {
        setFgChecked(event.target.checked);
    }

    const handleSmgChange = (event) => {
        setSmgChecked(event.target.checked);
    }

    const handleCgChange = (event) => {
        setCgChecked(event.target.checked);
    }

    const handleSgChange = (event) => {
        setSgChecked(event.target.checked);
    }

    const handlePgChange = (event) => {
        setPgChecked(event.target.checked);
    }

    const handleFigChange = (event) => {
        setFigChecked(event.target.checked);
    }

    const handleShowTodayChange = (event) => {
        setShowToday(event.target.checked);
    }

    const handleSelectAllChange = (event) => {
        setSsChecked(event.target.checked);
        setCalChecked(event.target.checked);
        setFgChecked(event.target.checked);
        setSmgChecked(event.target.checked);
        setCgChecked(event.target.checked);
        setSgChecked(event.target.checked);
        setPgChecked(event.target.checked);
        setFigChecked(event.target.checked);
        setSelectAll(event.target.checked);
    }

    React.useEffect(() => {
        const dayList = []
        if (ssChecked) {
            dayList.push("ss");
        }
        if (calChecked) {
            dayList.push("cal");
        }

        if (fgChecked) {
            dayList.push("fg");
        }
        if (smgChecked) {
            dayList.push("smg");
        }

        if (cgChecked) {
            dayList.push("cg");
        }
        if (sgChecked) {
            dayList.push("sg");
        }

        if (pgChecked) {
            dayList.push("pg");
        }
        if (figChecked) {
            dayList.push("fig");
        }
        if (showToday) {
            dayList.push("Today")
        }
        onCheckChange(dayList);
    }, [ssChecked, calChecked, fgChecked, smgChecked, cgChecked, sgChecked, pgChecked, figChecked, showToday]);



    return (
        <Box sx={{mr: "2%", width:"28%", backgroundColor:"white", justifyContent:"left"}}>
            <FormControl fullWidth sx={{justifyContent:"left"}}>
                <FormGroup sx={{justifyContent:"left"}}>
                    <FormLabel component="legend">Nutrition Information:</FormLabel>
                    <FormControlLabel 
                    control={<Checkbox
                                checked={ssChecked}
                                onChange={handleSsChange}
                                sx={{'&.Mui-checked': {
                                    color: "rgba(89,14,25, 0.9)"
                                }}}
                            />} 
                    label="Serving Size"
                    labelPlacement="right"
                    />

                    <FormControlLabel 
                    control={<Checkbox
                                checked={calChecked}
                                onChange={handleCalChange}
                                sx={{'&.Mui-checked': {
                                    color: "rgba(89,14,25, 0.9)"
                                }}}
                            />} 
                    label="Calories"
                    labelPlacement="right"
                    />

                    <FormControlLabel 
                    control={<Checkbox
                                checked={fgChecked}
                                onChange={handleFgChange}
                                sx={{'&.Mui-checked': {
                                    color: "rgba(89,14,25, 0.9)"
                                }}}
                            />} 
                    label="Fat"
                    labelPlacement="right"
                    />

                    <FormControlLabel 
                    control={<Checkbox
                                checked={smgChecked}
                                onChange={handleSmgChange}
                                sx={{'&.Mui-checked': {
                                    color: "rgba(89,14,25, 0.9)"
                                }}}
                            />} 
                    label="Sodium"
                    labelPlacement="right"
                    />

                    <FormControlLabel 
                    control={<Checkbox
                                checked={cgChecked}
                                onChange={handleCgChange} 
                                sx={{'&.Mui-checked': {
                                    color: "rgba(89,14,25, 0.9)"
                                }}}
                            />} 
                    label="Carbohydrates"
                    labelPlacement="right"
                    />

                    <FormControlLabel 
                    control={<Checkbox
                                checked={sgChecked}
                                onChange={handleSgChange}
                                sx={{'&.Mui-checked': {
                                    color: "rgba(89,14,25, 0.9)"
                                }}}
                            />} 
                    label="Sugar"
                    labelPlacement="right"
                    />

                    <FormControlLabel 
                    control={<Checkbox
                                checked={pgChecked}
                                onChange={handlePgChange}
                                sx={{'&.Mui-checked': {
                                    color: "rgba(89,14,25, 0.9)"
                                }}}
                            />} 
                    label="Protein"
                    labelPlacement="right"
                    />   
                    <FormControlLabel 
                    control={<Checkbox
                                checked={figChecked}
                                onChange={handleFigChange}
                                sx={{'&.Mui-checked': {
                                    color: "rgba(89,14,25, 0.9)"
                                }}}
                            />} 
                    label="Fiber"
                    labelPlacement="right"
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
                    labelPlacement="right"
                    />   

                </FormGroup>
                <FormGroup sx={{justifyContent:"left"}}>
                    <FormLabel component="legend">Show Only Today:</FormLabel>

                    <FormControlLabel 
                    control={<Checkbox
                                checked={showToday}
                                onChange={handleShowTodayChange}
                                sx={{'&.Mui-checked': {
                                    color: "rgba(89,14,25, 0.9)"
                                }}}
                            />} 
                    />   

                </FormGroup>
            </FormControl>
        
                            
        </Box>
        
    );

}