import s from "./style.module.css";
import DiningGrid from "./HomeComponents/DiningGrid/DiningGrid";
import StartingModal from "./HomeComponents/StartingModal";
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
                <DiningGrid setDining={setDining}/>
            </div>
        </div>
    );
}