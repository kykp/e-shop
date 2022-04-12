import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const {order, showBasket, sum} = props;

     return  <ul className="collection basket-popup">
    <i className="material-icons basket-clear" onClick={showBasket}>clear</i>
    <li className="collection-item active blue lighten-1">Корзина</li>
    { order.length
    ?order.map(element => <BasketItem key={element.mainId} {...element}/>)
    :null
    }
    <li className="collection-item active blue lighten-1">Общая сумма : {sum}</li>
            </ul>
        
     
     
   
   



}

export {BasketList}

// return <ul className="collection">
// <li href="#!" className="collection-item active blue lighten-1">Корзина</li>
// <BasketItem key={element.mainId} {...element}/>
// <li href="#!" className="collection-item active blue lighten-1">Общая сумма</li>
// </ul>