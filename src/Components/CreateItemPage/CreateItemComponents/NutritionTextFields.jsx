import {Stack, TextField, Divider} from "@mui/material"
import * as React from "react";


export default function NutritionTextFields({onAllFilled, submitted}) {

    //cannot be a list due to rendering issues
    const [ss, setServingSize] = React.useState("");
    const [cal, setCalories] = React.useState(0);
    const [fg, setFatGrams] = React.useState(0.0);
    const [smg, setSodiumMilligrams] = React.useState(0.0);
    const [cg, setCarbGrams] = React.useState(0.0);
    const [sg, setSugarGrams] = React.useState(0.0);
    const [pg, setProteinGrams] = React.useState(0.0);
    const [fig, setFiberGrams] = React.useState(0.0);
    const [name, setName] = React.useState("");

    const onSSChange = (event) => {
        setServingSize(event.target.value);
    }

    const onCalChange = (event) => {
        setCalories(event.target.value);
    }

    const onFgChange = (event) => {
        setFatGrams(event.target.value);
    }

    const onSmgChange = (event) => {
        setSodiumMilligrams(event.target.value);
    }

    const onCgChange = (event) => {
        setCarbGrams(event.target.value);
    }

    const onSgChange = (event) => {
        setSugarGrams(event.target.value);
    }

    const onPgChange = (event) => {
        setProteinGrams(event.target.value);
    }

    const onFigChange = (event) => {
        setFiberGrams(event.target.value);
    }

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    React.useEffect(() => {
        if (name != "" && ss != "") {
            onAllFilled([ss, Math.round(cal), parseFloat(fg), parseFloat(smg), parseFloat(cg), parseFloat(sg), parseFloat(pg), parseFloat(fig), name]);
        } else {
            onAllFilled([]);
        }
    }, [name, ss, cal, fg, smg, cg, sg, pg, fig])

    React.useEffect(() => {
        //reset
        setServingSize("");
        setCalories(0);
        setFatGrams(0);
        setSodiumMilligrams(0);
        setCarbGrams(0);
        setSugarGrams(0);
        setProteinGrams(0);
        setFiberGrams(0);
        setName("");
    }, [submitted]);

    return (
        <Stack sx={{margin: "20px"}} 
                    spacing={3}
                    divider={<Divider orientation="horizontal" flexItem />}
                    >

            <TextField
                required
                id="name"
                label="Item Name"
                value={name}
                onChange={onNameChange}
            />

            <TextField
                required
                id="ss"
                label="Serving Size"
                value={ss}
                onChange={onSSChange}
            />

            <Stack 
                direction={"row"}
                spacing={2}
                justifyContent={"center"}
            >
                <TextField
                    id="cal"
                    label="Calories"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={0}
                    value={cal}
                    onChange={onCalChange}
                />

                <TextField
                    id="fg"
                    label="Grams of Fat"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={0.0}
                    value={fg}
                    onChange={onFgChange}
                />

                <TextField
                    id="smg"
                    label="Milligrams of Sodium"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={0.0}
                    value={smg}
                    onChange={onSmgChange}
                />
            </Stack>

            <Stack 
                direction={"row"}
                spacing={10}
                justifyContent={"center"}
            >
                <TextField
                    id="cg"
                    label="Grams of Carbs"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={0.0}
                    value={cg}
                    onChange={onCgChange}
                />

                <TextField
                    id="sg"
                    label="Grams of Sugar"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={0.0}
                    value={sg}
                    onChange={onSgChange}
                />
            </Stack>

            <Stack 
                direction={"row"}
                spacing={10}
                justifyContent={"center"}
            >
                <TextField
                    id="pg"
                    label="Grams of Protein"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={0.0}
                    value={pg}
                    onChange={onPgChange}
                />

                <TextField
                    id="fig"
                    label="Grams of Fiber"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={0.0}
                    value={fig}
                    onChange={onFigChange}
                />
            </Stack>
        </Stack>
    );
}