import { FlashOffRounded } from "@mui/icons-material";
import { Box, TableContainer, TableHead, TableRow, TableCell, TableBody, Table, TablePagination } from "@mui/material";
import * as React from "react";

const Today = new Date();



export default function ItemTable({items, headers}) {

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var day = days[ Today.getDay() ];


    const [ssDisabled, setServingSizeDisabled] = React.useState(false);
    const [calDisabled, setCaloriesDisabled] = React.useState(false);
    const [fgDisabled, setFatGramsDisabled] = React.useState(true);
    const [smgDisabled, setSodiumMilligramsDisabled] = React.useState(true);
    const [cgDisabled, setCarbGramsDisabled] = React.useState(true);
    const [sgDisabled, setSugarGramsDisabled] = React.useState(true);
    const [pgDisabled, setProteinGramsDisabled] = React.useState(true);
    const [figDisabled, setFiberGramsDisabled] = React.useState(true);
    
    const [showOnlyToday, setShowToday] = React.useState(false);
    const [dayItems, setDayItems] = React.useState([]);

    const [visibleRows, setVisibleRows] = React.useState([]);

    const head = ["Name", "Serving Size", "Calories", "Fat (g)", "Sodium (mg)", "Carbs (g)", "Sugar (g)", "Protein (g)", "Fiber (g)"];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
      
    const handleCount = () => {
        if (showOnlyToday) {
            return(dayItems.length);
        } else {
            return(items.length);
        }
    }
    
      
        
    React.useEffect(() => {
        if (showOnlyToday) {
            setVisibleRows(dayItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
        } else {
            setVisibleRows(items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
        }
        console.log(visibleRows)
    }, [showOnlyToday, items, page])

    React.useEffect(() => {
        setPage(0);
    }, [showOnlyToday])

    React.useEffect(() => {
        setDayItems([]);
        let list = [];
        console.log(items.length);
        for (let i = 0; i < items?.length; i++) {
            let allowed = false;
            let loop = 0;
            while (loop < items[i].daysServed?.length && !allowed) {
                if (items[i].daysServed[loop] === day) {
                    allowed = true;
                }
                loop++;
            }
            if (allowed) {
                list.push(items[i]);
            }
        }
        setDayItems(list);
        console.log(list)
    }, [items, showOnlyToday])


    React.useEffect(() => {
        setServingSizeDisabled(true);
        setCaloriesDisabled(true);
        setFatGramsDisabled(true);
        setSodiumMilligramsDisabled(true);
        setCarbGramsDisabled(true);
        setSugarGramsDisabled(true);
        setProteinGramsDisabled(true);
        setFiberGramsDisabled(true);
        setShowToday(false);
        for (let i = 0; i < headers.length; i++) {
            let val = headers[i];
            if (val == "ss") {
                setServingSizeDisabled(false);
            } else if (val == "cal") {
                setCaloriesDisabled(false);
            } else if (val == "fg") {
                setFatGramsDisabled(false);
            } else if (val == "smg") {
                setSodiumMilligramsDisabled(false);
            } else if (val == "cg") {
                setCarbGramsDisabled(false);
            } else if (val == "sg") {;
                setSugarGramsDisabled(false);
            } else if (val == "pg") {
                setProteinGramsDisabled(false);
            } else if (val == "fig") {    
                setFiberGramsDisabled(false);
            } else {
                setShowToday(true);
            }
        }
    }, [headers])
    
    return (
        <Box sx={{mr: "2%",  width:"68%", maxheight:"80vh", overflowY:"auto", backgroundColor:"rgb(134,15,31)"}}>
            <TableContainer sx={{backgroundColor:"white"}}>
            <Table sx={{overflowY:"scroll"}}>
                <TableHead>
                    <TableRow sx={{backgroundColor:"rgb(134,15,31)"}}>
                        {   
                            head.map((header) => {
                                if ((header !== "Serving Size" || !ssDisabled) && 
                                (header !== "Calories" || !calDisabled) && 
                                (header !== "Fat (g)" || !fgDisabled) && 
                                (header !== "Sodium (mg)" || !smgDisabled) && 
                                (header !== "Carbs (g)" || !cgDisabled) &&
                                (header !== "Sugar (g)" || !sgDisabled) && 
                                (header !== "Protein (g)" || !pgDisabled) &&
                                (header !== "Fiber (g)" || !figDisabled)) {
                                    return(
                                        <TableCell sx={{color:"white"}}>{header}</TableCell>
                                        );
                            }    
                        })}
                    </TableRow>
                </TableHead>
                <TableBody sx={{overflow:"scroll"}}>
                    {
                        visibleRows.map((item) => {
                            return(
                                <TableRow key={item.name}>
                                    <TableCell>{item.name}</TableCell>
                                    {
                                        Object.entries(item).map(([key, value]/*parameters that give us access to entries*/) => {
                                            if ((key !== "id") && (key !== "name") && (key !=="daysServed")) {
                                                
                                                if ((key !== "ss" || !ssDisabled) && 
                                                    (key !== "cal" || !calDisabled) && 
                                                    (key !== "fg" || !fgDisabled) && 
                                                    (key !== "smg" || !smgDisabled) && 
                                                    (key !== "cg" || !cgDisabled) &&
                                                    (key !== "sg" || !sgDisabled) && 
                                                    (key !== "pg" || !pgDisabled) &&
                                                    (key !== "fig" || !figDisabled)) {
                                                        return(
                                                            <TableCell>{value}</TableCell>
                                                            );     
                                                }                
                                            }
                                        })
                                    }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[8]}
          component="div"
          count={handleCount()}
          rowsPerPage={10}
          onPageChange={handleChangePage}
          page={page}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{color:"white"}}
        />
        </Box>
    );
}