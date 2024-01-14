import { Box, Button, Divider, Input, Stack } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({items, onFocused, setItem}) {

    const [suggestionList, setSuggestionList] = React.useState([]);
    const [searchVal, setSearchVal] = React.useState("");

    //used to access/change css properties
    const [overflowY, setOverflowY] = React.useState("visible");
    const [maxHeight, setMaxHeight] = React.useState("25px");

    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchVal((event.target.value));
    }

    const handleFocused = (event) => {
        onFocused(true);
    }

    const onClickItem = (event) => {
        setSearchVal("");
        let done = false;
        let loop = 0;
        while (!done) {
            if (suggestionList[loop].id.timestamp == event.target.id) {
                setItem(suggestionList[loop]);
                done = true;
            }
            loop++;
        }
        navigate("/item");
    }

    const style = {
        box:{
            position: "absolute",
            top: 20,
            width: "400px",
            backgroundColor:"white",
            borderRadius:"13px",
            maxHeight: maxHeight,
            ml:"38%",
            display: "block",
            overflowY: overflowY,
            overflowX: "hidden",
            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.3)"
        },
        input:{
            ml: "5px",
            mr: "10px",
            width: "380px"
        }
    }

    React.useEffect(() => {
        if (searchVal == "") {
            setMaxHeight("25px");
            setSuggestionList([]);
            setOverflowY("hidden");
        } else {
            setOverflowY("auto");
            setMaxHeight("600px");
            let list = [];
            for (let i = 0; i < items.length; i++) {
                for(let j = 0; j < items[i].length; j++) {
                    let name = ((items[i])[j].name).toLowerCase();
                    if (name.length >= searchVal.length) {
                        if (name.substring(0, searchVal.length) === searchVal.toLowerCase()) {
                            list.push((items[i])[j]);
                        }
                    }
                }
            }
            setSuggestionList(list);
        }
    }, [searchVal, items])

    return (
        <Box sx={style.box}>
            <Stack direction={"row"}>
                <SearchRoundedIcon sx={{filter: "invert(1)", mt:"1px"}}/>
                    <Input 
                        size={"small"} 
                        sx={style.input} 
                        disableUnderline 
                        value={searchVal} 
                        onChange={handleSearchChange} 
                        onFocus={handleFocused}
                    />
            </Stack>
            <Stack 
                sx={{margin: "20px", justifyContent:"center"}} 
                spacing={3}
                divider={<Divider orientation="horizontal" flexItem />}
            >
                {
                    //represents all items in the list that have the same letters at the beginning of their name as the search content
                    suggestionList.map((item) => {
                        console.log(item.name + ": " + item.id.timestamp)
                        return( 
                            <Button id={item.id.timestamp} sx={{height: "30px", color:"rgb(134,15,31)"}} onClick={onClickItem}>
                                {item.name}
                            </Button> 
                        );
                    })
                }
            </Stack>
        </Box>
    )
}