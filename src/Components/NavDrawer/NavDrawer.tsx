import { BrowserRouter, Link, Routes, Route } from "react-router-dom"; //for routing to new webpages
import HomePage from "../HomePage/HomePage";
import DiningHallPage from "../DiningHallPage/DiningHallPage";
import CreateItemPage from "../CreateItemPage/CreateItemPage";
import FoodItemAPI from "../../api/itemAPI";
import * as React from  "react";
import FoodItem from "../../FoodItem";
import ItemPage from "../ItemPage/ItemPage";
import CartPage from "../CartPage/Cart";
import MenuPage from "../MenuPage/MenuPage";


export default function NavDrawer(){

    const [modalClosed, setModalClosed] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const [diningHall, setDiningHall] = React.useState("");
    const [navItem, setNavItem] = React.useState(new FoodItem(
        "n/a", 
        "n/a", 
        0, 
        0, 
        0, 
        0, 
        0, 
        0, 
        0, 
        []
    ));
 
    const fetchItems = async (diningHall: any) =>{
        try
        {
            setItems([]);
            setItems(await FoodItemAPI.fetchItems(diningHall));
            console.log(items);
        } 
        catch(err)
        {console.log(err);}
    };

    React.useEffect(() => {
        if (diningHall != "") {
            fetchItems(diningHall);
        } else {
            setItems([]);
        }
    },[diningHall]);

    return (
        <BrowserRouter>
        <div>
            <Routes>
                <Route path={"/"} element={<HomePage diningHallSet={setDiningHall} setNavItem={setNavItem} modalClosed={modalClosed} setModalClosed={setModalClosed}/>}/>
                <Route path={"/Worcester"} element={<DiningHallPage hallName={"Worcester"} items={items} setNavItem={setNavItem}/>}/>
                <Route path={"/Franklin"} element={<DiningHallPage hallName={"Franklin"} items={items} setNavItem={setNavItem} />}/>
                <Route path={"/Hampshire"} element={<DiningHallPage hallName={"Hampshire"} items={items} setNavItem={setNavItem} />}/>
                <Route path={"/Berkshire"} element={<DiningHallPage hallName={"Berkshire"} items={items} setNavItem={setNavItem} />}/>
                <Route path={"/CreateItem"} element={<CreateItemPage itemsList={items} onDiningChange={setDiningHall} setNavItem={setNavItem} />}/>
                <Route path={"/item"} element={<ItemPage item={navItem} setNavItem={setNavItem} cartItems={cartItems} setCartItems={setCartItems}/>}/>
                <Route path={"/cart"} element={<CartPage itemCart={cartItems} setNavItem={setNavItem} setItemCart={setCartItems}/>}/>
                <Route path={"/menus"} element={<MenuPage setNavItem={setNavItem} setItemCart={setCartItems}/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}