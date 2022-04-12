
function Cart(props) {
    const {quantity, showBasket = Function.prototype} = props;
    return <div className="cart" onClick={showBasket}>
        <i className="medium material-icons">card_giftcard</i>
        <span>{quantity}</span>
    </div>
}

export {Cart}