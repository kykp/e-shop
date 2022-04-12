import { useEffect, useState } from "react"
import { API_URL, API_KEY } from "../config";
import { GoodsList } from "./GoodsList";
import {Preloader} from "./Preloader"


function Shop () {
    const [goods, setGoods] = useState([]);
    const [status, setStatus] = useState(true);

    useEffect(function() {
        fetch(API_URL, {
            headers: {
                "Authorization": API_KEY,
            }
        })
        .then(response => response.json())
        .then((data) => {
            setGoods(data.shop)
            setStatus(true)})
        .catch((err) => {
            console.log(err);
            setStatus(false);
        })
    }, [])

    if(!goods.length) {
        return <Preloader/>
    } else {
    return <main className="container content"> 
    <GoodsList goods={goods}/>
     </main>
    }
}

export {Shop}