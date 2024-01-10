
import s from "./style.module.css";
import * as React from 'react';
import StartingModal from "./HomeComponents/StartingModal";
import DiningGrid from "./HomeComponents/DiningGrid/DiningGrid";
import TopAppBar from "../TopAppBar/TopAppBar";

 
export default function HomePage({diningHallSet, setNavItem}) {
    const [modalOpen, setModalOpen] = React.useState(true);
    const closeModal = () => setModalOpen(false);

    const setDining = (diningHall) => {
        diningHallSet(diningHall);
    }

    const setItem = (item) => {
        setNavItem(item);
    }
    return (
        <div style={{padding:"0px"}}>
            <StartingModal
                modalOpen={modalOpen}
                closeModal={closeModal}
            />
            <TopAppBar diningHall={""} setNavItem={setItem}/>
            <div className={s.background}>
                <DiningGrid diningSet={setDining}/>
            </div>
        </div>
    );
}