import {Box, Button, Divider, FormGroup, FormControl, Stack} from "@mui/material"
import TopAppBar from "../TopAppBar/TopAppBar";
import s from "./style.module.css"
import * as React from "react";
import DayChecklist from "./InputComponents/DayChecklist";
import DiningSelect from "./InputComponents/DiningSelect";
import NutritionTextFields from "./InputComponents/NutritionTextFields";
import FoodItem from "../../FoodItem";
import FoodItemAPI from "../../api/itemAPI";

export default function CreateItemPage() {
    const [diningHall, setDiningHall] = React.useState('');
    const [nutritionText, setNutritionText] = React.useState([]);
    const [dayList, setDayList] = React.useState([]);
    const [item, setItem] = React.useState();
    const [submitted, setSubmitted] = React.useState(false);

    const submit = () => {
        if (nutritionText[0] != undefined && dayList != [] && diningHall != '') {
            const pushItem = new FoodItem(
                nutritionText[0], 
                nutritionText[1], 
                nutritionText[2], 
                nutritionText[3], 
                nutritionText[4], 
                nutritionText[5], 
                nutritionText[6], 
                nutritionText[7], 
                nutritionText[8], 
                dayList
            );
            console.log(pushItem);
            setItem(pushItem);
        }
        else {
            if (nutritionText[0] == undefined) {
                alert("Invalid Nutrition Information");
            } else if (dayList == []) {
                alert("Please select a Day");
            } else {
                alert("Please select a Dining Hall");
            }
        }
    }

    const postItem = async item => {
        try {
          const response = await FoodItemAPI.postItem(item, diningHall);
          console.log(response);
          setNutritionText([]);
          setDayList([]);
          setDiningHall("");
          setSubmitted(!submitted);
        } catch(err) {
          console.log(err);
        }
      };

    React.useEffect(() => {
        if (item) {
          postItem(item.state);
        }
      }, [item]);

    return (
        <>
            <TopAppBar/>
            <div className={s.background}>
                <Box className={s.form} justifyContent={"center"}>
                    <Box className={s.header}>
                    <b>Creation Form</b>
                    </Box>      
                    <Stack sx={{margin: "20px", justifyContent:"center"}} 
                    spacing={3}
                    divider={<Divider orientation="horizontal" flexItem />}
                    >

                    <NutritionTextFields onAllFilled={setNutritionText} submitted={submitted}/>

                    <DiningSelect onSelectChange={setDiningHall} submitted={submitted}/>            

                    <DayChecklist onCheckChange={setDayList} submitted={submitted}/>
                    
                    <FormControl fullWidth>
                        <FormGroup sx={{justifyContent:"center"}}>
                            <Button 
                                className={s.submit}
                                sx={{marginLeft:"43%", color: "rgb(134,15,31)"}}
                                onClick={submit}
                                >
                                Submit
                            </Button>
                        </FormGroup>
                    </FormControl>

                    </Stack>
                </Box>
            </div>
        </>

    );
}