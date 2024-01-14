import { BrowserRouter, Route, Routes } from "react-router-dom"; //for routing to new webpages
import * as React from  "react";
import API from "../../api/API";
import CartPage from "../CartPage/Cart";
import CreateItemPage from "../CreateItemPage/CreateItemPage";
import DiningHallPage from "../DiningHallPage/DiningHallPage";
import HomePage from "../HomePage/HomePage";
import FoodItem from "../../FoodItem";
import ItemPage from "../ItemPage/ItemPage";
import MenuPage from "../MenuPage/MenuPage";

//main page, has access to all other components
export default function NavDrawer(){

    //saves modal closed state of the home page so it does not open on rerouting back
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
            setItems(await API.fetchItems(diningHall));
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
        </BrowserRouter>
    );
}