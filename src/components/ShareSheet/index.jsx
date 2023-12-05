import { useEffect, useState } from 'react';
import HomeService from '../../service/HomeService';
import { ModalDelete } from '../ModalDelete';
import { ItemShare } from './ItemShare';
import './share-sheet.scss';

export const ShareSheet = () => {
    const [shares, setShares] = useState([]);

    const loadShare = async () => {
        const data = await HomeService.getShares();
        setShares(data)
    }

    useEffect(() => {
        loadShare();
    }, []);

    return (
        <>
        <div className="table__wrapper">
            <ItemShare id={"all"} category="Категория" subCategory="Подкатегория"  brand="Бренд" goods="Товары" cashback="Кешбек"/>
            {shares?.shares?.map((share) => {
                return <ItemShare key={share.id} {...share} />
            })}
        </div>
        {/* <ModalDelete /> */}
        </>
    )
}