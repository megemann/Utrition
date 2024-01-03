import {Box, Button, Grid} from "@mui/material";


export default function DiningGrid() {
    return (
        <Box sx={{flexGrow:1}}>
            <Grid container spacing={2} sx={{padding: "15px", height:"93vh"}}>
                <Grid item xs={6}>
                    <Button sx={{backgroundColor: "white", width: "98%", height: "98%", justifyContent:"center"}}>

                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button sx={{backgroundColor: "white", width: "98%", height: "98%"}}>
                        two                                
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button sx={{backgroundColor: "white", width: "98%", height: "98%"}}>
                        three
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button sx={{backgroundColor: "white", width: "98%", height: "98%"}}>
                        four
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );

}