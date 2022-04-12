import { useEffect, useState } from "react"
import { API_URL, API_KEY } from "../config";
import { GoodsList } from "./GoodsList";
import {Preloader} from "./Preloader"
import {Cart} from "./Cart"
import { BasketList } from "./BasketList";


function Shop () {
    const [goods, setGoods] = useState([]);
    const [status, setStatus] = useState(true);
    const [order, setOrder] = useState([]);
    const [visibleBasket, setVisibleBasket] = useState(false);
    const [sum, setSum] = useState(0);

    const addToBasket = (item) => {
        setVisibleBasket(true);
        
        const itemIndex = order.findIndex(e => e.mainId === item.mainId);
        if (itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1,
            }
             setOrder([...order, newItem])
             setSum(item.regularPrice + sum)
        } else {
            const addQuantity = order.map((element, index) => {
                if (itemIndex === index){
                    return {
                        ...element,
                        quantity: element.quantity +1,
                    }
                }
                else return element;
            })
            setOrder(addQuantity)
            setSum(item.regularPrice + sum)
        }
   
    }
    const showBasket = () =>{
        setVisibleBasket(!visibleBasket);
    }
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                "Authorization": API_KEY,
            }
        })
        .then(response => response.json())
        .then((data) => {
            data.shop && setGoods(data.shop)
            setStatus(false)})
        .catch((err) => {
            console.log(err);
            setStatus(false);
        })
    }, [])


    return <>
    {
        visibleBasket ? <BasketList order={order} showBasket={showBasket} sum={sum}/> : null
    }
    <main className="container content"> 
    <Cart quantity={order.length} showBasket={showBasket}/>
    {status ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
     </main>
    </>
     
    
}

export {Shop}