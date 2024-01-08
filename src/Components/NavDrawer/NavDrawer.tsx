import { BrowserRouter, Link, Routes, Route } from "react-router-dom"; //for routing to new webpages
import HomePage from "../HomePage/HomePage";
import DiningHallPage from "../DiningHallPage/DiningHallPage";
import CreateItemPage from "../CreateItemPage/CreateItemPage";
import FoodItemAPI from "../../api/itemAPI";
import * as React from  "react";


export default function NavDrawer(){

    const [items, setItems] = React.useState([]);
    const [diningHall, setDiningHall] = React.useState("");
 
    const fetchItems = async (diningHall: any) =>{
        try
        {
          setItems(await FoodItemAPI.fetchItems(diningHall));
          console.log(items);
        } 
        catch(err)
        {console.log(err);}
    };

    React.useEffect(() => {
        if (diningHall != "") {
            fetchItems(diningHall);
        }
    },[diningHall]);

    return (
        <BrowserRouter>
        <div>
            <Routes>
                <Route path={"/"} element={<HomePage diningHallSet={setDiningHall}/>}/>
                <Route path={"/Worcester"} element={<DiningHallPage hallName={"Worcester"} items={items} />}/>
                <Route path={"/Franklin"} element={<DiningHallPage hallName={"Franklin"} items={items}/>}/>
                <Route path={"/Hampshire"} element={<DiningHallPage hallName={"Hampshire"} items={items}/>}/>
                <Route path={"/Berkshire"} element={<DiningHallPage hallName={"Berkshire"} items={items}/>}/>
                <Route path={"/CreateItem"} element={<CreateItemPage itemsList={items} onDiningChange={setDiningHall}/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}