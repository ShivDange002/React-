import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
     const [ resInfo, setResInfo ] = useState(null);
    useEffect(() => {
         fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7041&lng=77.1025&restaurantId=12345");
        const json  = await res.json();
        setResInfo(json); // <-- update state here
        console.log(json);
    }
     
    return (resInfo === null) ? (<Shimmer />) : (
        <div>
            <h1>{resInfo?.data?.cards?.[0]?.card?.card?.info?.name || "Restaurant Name"}</h1>
            <h2>Biryani</h2>
            <h3>Pizza</h3>
        </div>

    )
}

export default RestrauntMenu;