import './modal-delete.scss';

import close from '../../images/close.png';

export const ModalDelete = () => {
    return (
        <div className="modal-delete">
            <div className="modal-delete__body">
                <div className="modal-delete__text">
                Количество выбранных позиций: <span>3</span>
                </div>
                <button className="modal-delete__btn">
                    Удалить
                </button>
            </div>
            <button className="modal-delete__close-btn">
                <img src={close} alt="close" />
            </button>   
        </div>
    )
}


