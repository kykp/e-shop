import { Goods } from "./Goods"

function GoodsList(props) {
  
    const {goods = [], addToBasket} = props;

    if (!goods.length) {
        return <h3> Nothinkg here</h3>
    }
   return  goods.map(item => {
        return <Goods key={item.mainId} addToBasket={addToBasket} {...item} />

    })
  
}
export {GoodsList}