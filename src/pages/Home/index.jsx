import { Pagination } from "../../components/Pagination";
import { ShareSheet } from "../../components/ShareSheet";
import './home.scss';

export const Home = () => {
    const handleOpenModal = () => {
        
    }
    return (
        <div className="table">
        <div className="container">
            <div className="table__body">
                <Pagination />
                <button className="table__btn-add" onClick={handleOpenModal}>Добавить акцию</button>
                <ShareSheet />
            </div>
        </div>
    </div>
    )
}