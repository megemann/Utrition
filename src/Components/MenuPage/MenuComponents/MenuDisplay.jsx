import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const styles = {
    button: {
        color: "white",
        borderColor:"black",
        borderWidth:"3px",
        borderStyle:"outlined"
    },
    container: {
        width: "50%",
        maxHeight: "90vh",
        borderStyle: "solid",
        borderWidth: "10px",
        borderColor: "black",
        backgroundColor: "rgba(89,14,25)",
        overflowY: "auto",
        borderRadius: "5%",
        justifyContent: "center"
    },
    textbox: {
        color: "white"
    }
}

export default function MenuDisplay({currentMenu, setNewCart}) {

    const navigate = useNavigate();

    const sendMenu = () => {
        setNewCart(currentMenu.itemList);
        navigate("/cart");
    }

    return (
        <Box sx={styles.container}>
            <Stack sx={{mt:"10px"}} spacing={2}>
            {
                Object.entries(currentMenu).map(([key, value]) => {
                    if (key == "itemList") {
                        return (
                            <Box sx={{color:"white"}}>
                                {
                                    value.map((item) => {
                                        return (
                                           ` ${item.name},`
                                        )
                                    })
                                }
                            </Box>
                        )
                    } else if (key == "totalList") {
                        //not an object, so we need to map manually
                        return (
                            <Stack>
                                <Box sx={styles.textbox}>
                                    Cals: {value[0]}
                                </Box>
                                <Box sx={styles.textbox}>
                                    Grams of Fat: {value[1]}
                                </Box>
                                <Box sx={styles.textbox}>
                                    Milligrams of Sodium: {value[2]}
                                </Box>
                                <Box sx={styles.textbox}>
                                    Grams of Carbs: {value[3]}
                                </Box>
                                <Box sx={styles.textbox}>
                                    Grams of Sugar: {value[4]}
                                </Box>
                                <Box sx={styles.textbox}>
                                    Grams of Protein: {value[5]}
                                </Box>
                                <Box sx={styles.textbox}>
                                    Grams of Fiber: {value[6]}
                                </Box>
                                <Button sx={styles.button} onClick={sendMenu}>
                                    Send to Cart
                                </Button>
                            </Stack>
                        )
                    }
                })
            }
            </Stack>
        </Box>
    );
}