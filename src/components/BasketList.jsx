import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const {order, 
        showBasket, 
        removeFromBasket = Function.prototype,
        increment = Function.prototype,
        decrement = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.regularPrice * el.quantity;
    },0)

     return  <ul className="collection basket-popup">
    <i className="material-icons basket-clear" onClick={showBasket}>clear</i>
    <li className="collection-item active basket-bg">Корзина</li>
    
    { order.length
    ? order.map(element => <BasketItem 
        increment={increment}
        decrement={decrement}
        key={element.mainId} 
        removeFromBasket={removeFromBasket}
        {...element}/>)
    : <li className="collection-item"> Ваша корзина пуста</li>
    }

    <li className="collection-item active basket-bg">Общая сумма : {totalPrice}</li>
            </ul>
        
     
     
   
   



}

export {BasketList}

// return <ul className="collection">
// <li href="#!" className="collection-item active blue lighten-1">Корзина</li>
// <BasketItem key={element.mainId} {...element}/>
// <li href="#!" className="collection-item active blue lighten-1">Общая сумма</li>
// </ul>