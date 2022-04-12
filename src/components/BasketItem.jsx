
function BasketItem(props) {
    const  {mainId, displayName, quantity, regularPrice} = props;

    return <li className="collection-item"> {displayName} x {quantity} = {regularPrice} rub</li>
}

export {BasketItem}