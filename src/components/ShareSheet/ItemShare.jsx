export const ItemShare = ({id, category, subCategory, brand, goods, cashback }) => {
    return (
    <div className="table__category">
        <div className="table__check-input">
            <input type="checkbox" id={id}/>
            <label htmlFor={id}></label>
        </div>
        <div className="table__text">
            <p>{category}</p>
        </div>
        <div className="table__text">
            <p>{subCategory}</p>
        </div>
        <div className="table__text">
            <p>{brand}</p>
        </div>
        <div className="table__text">
            <p>{goods}</p>
        </div>
        <div className="table__text">
            <p>{cashback}</p>
        </div>
    </div>
    )
}