import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API } from "../../Utills/constants";
import useRastrauntMenu from "../../Utills/useRestrauntMenu" // Import the custom hook


const RestrauntMenu = () => {
     const { restaurantId } = useParams(); // ← Get dynamic ID from URL

      const resInfo  = useRastrauntMenu(restaurantId);
    if (!resInfo) return <Shimmer />;

    // Restaurant Info
    const restaurantCard = resInfo?.data?.cards?.find(
        (card) => card?.card?.card?.info
    );
    const info = restaurantCard?.card?.card?.info || {};

    const {
        name,
        cuisines,
        costForTwoMessage,
        avgRating,
        totalRatingsString,
        areaName,
        sla
    } = info;

    // Menu Items
    const menuCards =
        resInfo?.data?.cards
            ?.find((card) => card?.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const menuItems = [];

    menuCards.forEach((menuSection) => {
        const itemCards = menuSection?.card?.card?.itemCards;
        if (Array.isArray(itemCards)) {
            itemCards.forEach((item) => {
                menuItems.push(item.card.info);
            });
        }
    });

    return (
        <div>
            {/* Restaurant Info */}
            <h1>{name || "Restaurant Name"}</h1>
            <p>{cuisines?.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <p>⭐ {avgRating} ({totalRatingsString})</p>
            <p>{areaName}, {sla?.lastMileTravelString}</p>

            {/* Menu Items */}
            <h2>Menu</h2>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <p>₹{(item.price || item.defaultPrice) / 100}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default RestrauntMenu;