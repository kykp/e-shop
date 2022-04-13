
function BasketItem(props) {
    const  {mainId, 
        displayName, 
        quantity, 
        regularPrice, 
        removeFromBasket = Function.prototype,
        increment = Function.prototype,
        decrement = Function.prototype,
    } = props;
    return <li className="collection-item">
    <div className="basket-display-name">
        {displayName}
    </div>
    <div>
        {quantity
        ? <button className="btn-basket" onClick={() => decrement(mainId, regularPrice)}>-</button>
        : <button className="btn-basket disabled">-</button>}
       {quantity}
        <button className="btn-basket" onClick={() => increment(mainId)}>+</button>
    </div>
    <div>
        {regularPrice*quantity}
    </div>
    <div>
    <i className="tiny material-icons send-color remove-basket"
        onClick={() => removeFromBasket(mainId)}>clear</i>
    </div>
    </li>
}

export {BasketItem}