import { useEffect, useState } from "react"
import { API_URL, API_KEY } from "../config";
import { GoodsList } from "./GoodsList";
import {Preloader} from "./Preloader"


function Shop () {
    const [goods, setGoods] = useState([]);
    const [status, setStatus] = useState(true);

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

    
    return <main className="container content"> 
    {status ? <Preloader/> : <GoodsList goods={goods}/>}
     </main>
    
}

export {Shop}