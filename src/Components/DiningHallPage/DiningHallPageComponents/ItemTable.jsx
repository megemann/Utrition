import { Box, TableContainer, TableHead, TableRow, TableCell, TableBody, Table, TablePagination } from "@mui/material";
import * as React from "react";

export default function ItemTable({items}) {

    const [ssDisabled, setServingSizeDisabled] = React.useState(false);
    const [calDisabled, setCaloriesDisabled] = React.useState(false);
    const [fgDisabled, setFatGramsDisabled] = React.useState(true);
    const [smgDisabled, setSodiumMilligramsDisabled] = React.useState(true);
    const [cgDisabled, setCarbGramsDisabled] = React.useState(true);
    const [sgDisabled, setSugarGramsDisabled] = React.useState(true);
    const [pgDisabled, setProteinGramsDisabled] = React.useState(true);
    const [figDisabled, setFiberGramsDisabled] = React.useState(true);

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

      const visibleRows = items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
        
    
    return (
        <Box sx={{mr: "2%",  width:"68%", maxheight:"80vh", overflowY:"auto", backgroundColor:"rgb(134,15,31)"}}>
            <TableContainer sx={{backgroundColor:"white"}}>
            <Table sx={{overflowY:"scroll"}}>
                <TableHead>
                    <TableRow>
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
                                        <TableCell>{header}</TableCell>
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
          count={items.length}
          rowsPerPage={10}
          onPageChange={handleChangePage}
          page={page}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Box>
    );
}