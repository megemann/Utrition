import {Box, Button, Divider, FormGroup, FormControl, Stack} from "@mui/material"
import TopAppBar from "../TopAppBar/TopAppBar";
import s from "./style.module.css"
import * as React from "react";
import DayChecklist from "./CreateItemComponents/DayChecklist";
import DiningSelect from "./CreateItemComponents/DiningSelect";
import NutritionTextFields from "./CreateItemComponents/NutritionTextFields";
import FoodItem from "../../FoodItem";
import FoodItemAPI from "../../api/itemAPI";
import EndingModal from "./CreateItemComponents/EndingModal";

export default function CreateItemPage({itemsList, onDiningChange, setNavItem}) {
    const [diningHall, setDiningHall] = React.useState('');
    const [nutritionText, setNutritionText] = React.useState([]);
    const [dayList, setDayList] = React.useState([]);
    const [item, setItem] = React.useState();
    const [submitted, setSubmitted] = React.useState(false);
    
    const [name, setName] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);
    const closeModal = () => setModalOpen(false);

    const submit = () => {

        let same = false;
        let loop = 0;
        while (!same && loop < itemsList.length) {
            same = (itemsList[loop]?.name == name)
            loop += 1;
        }

        if (same) {
            alert("Item Already Exists"); //later add support for adding days, need to learn mongodb update
        } else {
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
        }


    const postItem = async item => {
        try {
          const response = await FoodItemAPI.postItem(item, diningHall);
          console.log(response);
          setName(item.name);
          setNutritionText([]);
          setDayList([]);
          setDiningHall("");
          setSubmitted(!submitted);
          setModalOpen(true);
        } catch(err) {
          console.log(err);
        }
      };

    React.useEffect(() => {
        if (item) {
          postItem(item.state);
        }
      }, [item]);

    React.useEffect(() => {
        onDiningChange(diningHall);
    }, [diningHall]);

    return (
        <>
            <TopAppBar diningHall={""} setNavItem={setNavItem}/>
            <EndingModal closeModal={closeModal} modalOpen={modalOpen} name={name}/>
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