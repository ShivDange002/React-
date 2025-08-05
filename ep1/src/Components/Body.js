import RestaurantCard from "./RestrauntCard";
import { restaurantList } from "../../Utills/mockData";
import { useEffect, useState } from "react";
import  Shimmer  from "./Shimmer";

// What is state
// what is React Hooks? - functions,
// What is useState
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) => {
    const cardData = restaurant.data || restaurant.info || restaurant;
    return (
      cardData.name &&
      cardData.name.toLowerCase().includes(searchText.toLowerCase())
    );
  });
}
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]); // <-- Add this
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      const apiRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurants(apiRestaurants);
      setAllRestaurants(apiRestaurants); // <-- Save original list
    } catch (error) {
      setRestaurants(restaurantList);
      setAllRestaurants(restaurantList); // <-- Save original list
    }
  };

  return (restaurants.length === 0) ? (<Shimmer />) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            if (searchText.trim() === "") {
              setRestaurants(allRestaurants); // Reset to all if search is empty
            } else {
              const data = filterData(searchText, allRestaurants);
              setRestaurants(data);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          const cardData = restaurant.data || restaurant.info || restaurant;
          if (!cardData || !cardData.id) return null;
          return (
            <RestaurantCard
              {...cardData}
              lastMileTravelString={cardData.lastMileTravelString || cardData.lastMileTravel || ""}
              key={cardData.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;