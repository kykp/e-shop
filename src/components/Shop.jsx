import { useEffect, useState } from "react"
import { API_URL, API_KEY } from "../config";
import { GoodsList } from "./GoodsList";
import {Preloader} from "./Preloader"
import {Cart} from "./Cart"
import { BasketList } from "./BasketList";
import {Alert} from "./Alert"


function Shop () {
    const [goods, setGoods] = useState([]); //список товаров
    const [status, setStatus] = useState(true); //статус загрузки
    const [order, setOrder] = useState([]); //заказ в корзине
    const [visibleBasket, setVisibleBasket] = useState(false); //показ корзины
    const [alert, setAlert] = useState("");

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(e => e.mainId === item.mainId);
        if (itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1,
                onShop: true,
            }
             setOrder([...order, newItem])
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
        }
        setAlert(item.displayName);
    }
    const removeFromBasket = (id) => {
        const newOrder = order.filter(elem => elem.mainId !== id)
        return setOrder(newOrder)
    }
    const increment = (id) =>{
        const newOrder = order.map(element => {
            if(id === element.mainId){
            return {
                ...element,
                quantity: element.quantity +1,
            }}
            else return element;
        })
        setOrder(newOrder)
    }
    const decrement = (id) =>{
        const newOrder = order.map(element => {
            if(id === element.mainId){
            return {
                ...element,
                quantity: element.quantity -1,
            }}
            else return element;
        })
        setOrder(newOrder)
    }
    const showBasket = () =>{
        setVisibleBasket(!visibleBasket);
    }
    const deleteName = () =>{
        setAlert("");
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
    {visibleBasket
    ?<BasketList 
        decrement={decrement}
        increment={increment}
        order={order} 
        showBasket={showBasket} 
        removeFromBasket={removeFromBasket}
    /> 
    :null
    }
    <main className="container content"> 
    <Cart quantity={order.length} showBasket={showBasket}/>
    {status
    ?<Preloader/>
    :<GoodsList 
        goods={goods} 
        addToBasket={addToBasket}
        />}
        {alert && <Alert name={alert} deleteName={deleteName}/>}
     </main>
    </>
     
    
}

export {Shop}