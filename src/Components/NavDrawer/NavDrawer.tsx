import { BrowserRouter, Link, Routes, Route } from "react-router-dom"; //for routing to new webpages
import HomePage from "../HomePage/HomePage";


export default function NavDrawer(){
    return (
        <BrowserRouter>
        <div>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/nav"} element={<HomePage/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}