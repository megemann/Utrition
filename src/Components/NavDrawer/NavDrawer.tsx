import { BrowserRouter, Link, Routes, Route } from "react-router-dom"; //for routing to new webpages
import HomePage from "../HomePage/HomePage";
import DiningHallPage from "../DiningHallPage/DiningHallPage";


export default function NavDrawer(){
    return (
        <BrowserRouter>
        <div>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/nav"} element={<HomePage/>}/>
                <Route path={"/Worcester"} element={<DiningHallPage hallName={"Worcester"}/>}/>
                <Route path={"/Franklin"} element={<DiningHallPage hallName={"Franklin"}/>}/>
                <Route path={"/Hampshire"} element={<DiningHallPage hallName={"Hampshire"}/>}/>
                <Route path={"/Berkshire"} element={<DiningHallPage hallName={"Berkshire"}/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}