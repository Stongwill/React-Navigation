import { useEffect, useState } from 'react';
import './pagination.scss';
import HomeService from '../../service/HomeService';

export const Pagination = () => {
    const [isShow, setIsShow] = useState(false);
    const [shares, setShares] = useState([]);
    const [page, setPage] = useState(1);

    const handleShowOption = () => {
        setIsShow(!isShow);
    }


    const loadShare = async () => {
        const data = await HomeService.getShares();
        setShares(data)
    }

    useEffect(() => {
        loadShare();
    }, []);
 

    return <div className="table__pagination">
        <div className="table__show">
            <span className="table__text-show">
            Показывать
            </span>
            <button className="table__select" onClick={handleShowOption}>
                10
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M5.58 6.00002H11.42C11.5227 5.99298 11.6252 6.01599 11.715 6.06626C11.8049 6.11652 11.8781 6.19185 11.9259 6.28306C11.9736 6.37427 11.9937 6.4774 11.9838 6.57985C11.9739 6.68231 11.9343 6.77966 11.87 6.86002L8.95 9.80002C8.89369 9.86387 8.82444 9.915 8.74686 9.95002C8.66927 9.98504 8.58512 10.0032 8.5 10.0032C8.41487 10.0032 8.33072 9.98504 8.25313 9.95002C8.17555 9.915 8.1063 9.86387 8.05 9.80002L5.13 6.86002C5.06566 6.77966 5.02612 6.68231 5.0162 6.57985C5.00628 6.4774 5.02641 6.37427 5.07414 6.28306C5.12186 6.19185 5.19511 6.11652 5.28494 6.06626C5.37477 6.01599 5.4773 5.99298 5.58 6.00002Z" fill="#414348"/>
                </svg>
            </button>
            <div className={!isShow ? "table__option-body" : "table__option-body active"}>
                {
                    shares?.per_page?.map((item, ind) => {
                        return <button className="table__option" key={ind}>
                        {item}
                    </button>
                    })
                }
            
             
            </div>
        </div>
        <div className="table__page">
            <span className="table__text-show">
                Страница
            </span>
            <div className="table__page-wrapper">
                 <input type="number" value={page} onChange={() => setPage(2)}/>
                 <span>из {shares.pages}</span>
            </div>
        </div>
        <div className="table__buttons-nav nav-page">
            <button className="nav-page__btn nav-page__prev">
                <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4885 1.6684L11.4886 1.66828C11.5519 1.6079 11.6359 1.57422 11.7234 1.57422C11.81 1.57422 11.8934 1.6073 11.9564 1.66666C11.9807 1.69059 11.9999 1.71903 12.0132 1.75039C12.0267 1.78242 12.0337 1.81683 12.0337 1.8516C12.0337 1.88637 12.0267 1.92078 12.0132 1.95281C11.9998 1.98442 11.9803 2.01307 11.9559 2.03711L6.02753 7.71552L5.64854 8.07852L6.02945 8.43951L11.9566 14.0568C11.9807 14.0807 12 14.1091 12.0132 14.1404C12.0267 14.1724 12.0337 14.2068 12.0337 14.2416C12.0337 14.2764 12.0267 14.3108 12.0132 14.3428C11.9999 14.3742 11.9807 14.4026 11.9564 14.4265C11.8934 14.4859 11.81 14.519 11.7234 14.519C11.6359 14.519 11.5519 14.4853 11.4886 14.4249L11.4885 14.4248L5.1985 8.42481L5.1986 8.4247L5.18969 8.4166C5.13813 8.36974 5.09693 8.31262 5.06874 8.2489C5.04055 8.18518 5.02599 8.11628 5.02599 8.0466C5.02599 7.97693 5.04055 7.90802 5.06874 7.8443C5.09694 7.78059 5.13813 7.72346 5.18969 7.6766L5.18979 7.67671L5.1985 7.6684L11.4885 1.6684Z" fill="#B8BDCC" stroke="#AAAFBD"/>
                </svg>
            </button>
            <button className="nav-page__btn nav-page__next">
                <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4885 1.6684L11.4886 1.66828C11.5519 1.6079 11.6359 1.57422 11.7234 1.57422C11.81 1.57422 11.8934 1.6073 11.9564 1.66666C11.9807 1.69059 11.9999 1.71903 12.0132 1.75039C12.0267 1.78242 12.0337 1.81683 12.0337 1.8516C12.0337 1.88637 12.0267 1.92078 12.0132 1.95281C11.9998 1.98442 11.9803 2.01307 11.9559 2.03711L6.02753 7.71552L5.64854 8.07852L6.02945 8.43951L11.9566 14.0568C11.9807 14.0807 12 14.1091 12.0132 14.1404C12.0267 14.1724 12.0337 14.2068 12.0337 14.2416C12.0337 14.2764 12.0267 14.3108 12.0132 14.3428C11.9999 14.3742 11.9807 14.4026 11.9564 14.4265C11.8934 14.4859 11.81 14.519 11.7234 14.519C11.6359 14.519 11.5519 14.4853 11.4886 14.4249L11.4885 14.4248L5.1985 8.42481L5.1986 8.4247L5.18969 8.4166C5.13813 8.36974 5.09693 8.31262 5.06874 8.2489C5.04055 8.18518 5.02599 8.11628 5.02599 8.0466C5.02599 7.97693 5.04055 7.90802 5.06874 7.8443C5.09694 7.78059 5.13813 7.72346 5.18969 7.6766L5.18979 7.67671L5.1985 7.6684L11.4885 1.6684Z" fill="#B8BDCC" stroke="#AAAFBD"/>
                </svg>
            </button>
        </div>
    </div>
}