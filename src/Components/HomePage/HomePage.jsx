
import s from "./style.module.css";
import * as React from 'react';
import StartingModal from "./HomeComponents/StartingModal";
import DiningGrid from "./HomeComponents/DiningGrid/DiningGrid";
import TopAppBar from "../TopAppBar/TopAppBar";

 
export default function HomePage() {
    const [modalOpen, setModalOpen] = React.useState(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div style={{padding:"0px"}}>
            <StartingModal
                modalOpen={modalOpen}
                closeModal={closeModal}
            />
            <TopAppBar/>
            <div className={s.background}>
                <DiningGrid/>
            </div>
        </div>
    );
}