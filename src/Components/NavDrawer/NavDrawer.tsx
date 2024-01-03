import { BrowserRouter, Link, Routes, Route } from "react-router-dom"; //for routing to new webpages
import HomePage from "../HomePage/HomePage";


export default function NavDrawer(){
    return (
        <BrowserRouter>
        <div>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/nav"} element={<HomePage/>}/>
                <Route path={"/Worcester"} element={<HomePage/>}/>
                <Route path={"/Franklin"} element={<HomePage/>}/>
                <Route path={"/Hampshire"} element={<HomePage/>}/>
                <Route path={"/Berkshire"} element={<HomePage/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}