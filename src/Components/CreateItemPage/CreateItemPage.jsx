import {Box, MenuItem, Divider, Select, Stack, TextField, Typography} from "@mui/material"
import TopAppBar from "../TopAppBar/TopAppBar";
import s from "./style.module.css"
import { CheckBox } from "@mui/icons-material";

export default function CreateItemPage() {
    const age = 12;

    return (
        <>
            <TopAppBar/>
            <div className={s.background}>
                <Box className={s.form} justifyContent={"center"}>
                    <Box className={s.header}>
                    <b>Creation Form</b>
                    </Box>      
                    <Stack sx={{margin: "20px"}} 
                    spacing={3}
                    divider={<Divider orientation="horizontal" flexItem />}
                    >

                    <TextField
                        required
                        id="name"
                        label="Item Name"
                    />

                    <TextField
                        required
                        id="ss"
                        label="Serving Size"
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
                        />

                        <TextField
                            id="fg"
                            label="Grams of Fat"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            id="smg"
                            label="Milligrams of Sodium"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
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
                        />

                        <TextField
                            id="sg"
                            label="Grams of Sugar"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
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
                        />

                        <TextField
                            id="fig"
                            label="Grams of Fiber"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Stack>
                    
                    <Select /*finish*/
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={() => {}}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                    <CheckBox sx={{/*finish tmr*/}}></CheckBox>
                    



                    </Stack>
                </Box>
            </div>
        </>

    );
}