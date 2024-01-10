
import s from "./style.module.css";
import * as React from 'react';
import StartingModal from "./HomeComponents/StartingModal";
import DiningGrid from "./HomeComponents/DiningGrid/DiningGrid";
import TopAppBar from "../TopAppBar/TopAppBar";

 
export default function HomePage({diningHallSet, setNavItem, modalClosed, setModalClosed}) {
    const closeModal = () => setModalClosed(true);

    const setDining = (diningHall) => {
        diningHallSet(diningHall);
    }

    return (
        <div style={{padding:"0px"}}>
            <StartingModal
                modalOpen={!modalClosed}
                closeModal={closeModal}
            />
            <TopAppBar diningHall={""} setNavItem={setNavItem}/>
            <div className={s.background}>
                <DiningGrid diningSet={setDining}/>
            </div>
        </div>
    );
}