import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const styles = {
    container: {
        width: "50%",
        maxHeight: "90vh",
        borderStyle: "solid",
        borderWidth: "10px",
        borderColor: "rgba(89,14,25)",
        backgroundColor: "white",
        overflowY: "auto",
        borderRadius: "5%",
        justifyContent: "center"
    }
}

export default function MenuList({menus, setCurrentMenu}) {

    const setSelectedMenu = (event) => {
        for (let i = 0; i < menus.length; i++) {
            if (menus[i].id.timestamp == event.target.id) {
                setCurrentMenu(menus[i]);
                console.log(menus[i]);
            }
        }
    }

    return (
        <Box sx={styles.container}>
            <Stack
                sx={{mt: "10px"}}
                spacing={1}
                divider={<Divider orientation="horizontal" flexItem />}
            >
                {
                    menus.map((menu) => {
                        //did this method to allow placing the button on the far right
                        return (
                            <Box>
                                <Stack direction={"row"}>
                                    <Box sx={{width:"95%"}}>
                                        <Typography sx={{left:"0"}}>
                                            Items: 
                                            {
                                                //cannot use join due to the item.name value needing to be accessed
                                                menu.itemList.map((item) => {
                                                    return (` ${item.name},`);
                                                })
                                            }
                                        </Typography>
                                    </Box>
                                    <Box sx={{width:"fit content", justifyContent:"right"}}>
                                        <Button id={menu.id.timestamp} onClick={setSelectedMenu}>
                                            VIEW
                                        </Button>
                                    </Box>
                                </Stack>
                            </Box>
                        )
                    })
                }
            </Stack>
        </Box>
    );
}