import { MENU_URL } from "./constant";
import { useEffect, useState } from "react";


const useResturantMenu =(resId)=>{

    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu(resId);
    },[])
    const fetchMenu =async(resId) =>{
        const data = await fetch(MENU_URL+resId);
        const dataJson = await data.json();
        setResInfo(dataJson.data);
    }
    return resInfo;
}

export default useResturantMenu;