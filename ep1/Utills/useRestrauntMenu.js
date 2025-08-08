import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "./constants"; // Adjust the import path as necessary  

const useRestaurantMenu = (restaurantId) => {
     const [resInfo, setResInfo] = useState(null);
     useEffect(() => {
        fetchMenuData();
    }, [restaurantId]); // Re-run if ID changes

    const fetchMenuData = async () => {
        try {
            const res = await fetch(
                MENU_API + restaurantId
            );
            const json = await res.json();
            setResInfo(json);
        } catch (err) {
            console.error("Failed to fetch restaurant data", err);
        }
    }; 

    return resInfo;

}

export default useRestaurantMenu;