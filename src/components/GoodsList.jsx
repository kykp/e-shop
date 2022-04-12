import { Goods } from "./Goods"

function GoodsList(props) {
  
   return props.goods.map(item => {
        return <Goods key={item.mainId} {...item}/>

    })
  
}
export {GoodsList}