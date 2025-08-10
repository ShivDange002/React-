import RestaurantCard from "./RestrauntCard";
import { restaurantList } from "../../Utills/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const apiRestaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      // ✅ Remove duplicate restaurants by ID
      const uniqueRestaurants = apiRestaurants.filter(
        (res, index, self) => {
          const id = (res.data?.id || res.info?.id || res.id);
          return index === self.findIndex(
            (r) => (r.data?.id || r.info?.id || r.id) === id
          );
        }
      );

      setRestaurants(uniqueRestaurants);
      setAllRestaurants(uniqueRestaurants);
    } catch (error) {
      const uniqueFallback = restaurantList.filter(
        (res, index, self) => {
          const id = (res.data?.id || res.info?.id || res.id);
          return index === self.findIndex(
            (r) => (r.data?.id || r.info?.id || r.id) === id
          );
        }
      );
      setRestaurants(uniqueFallback);
      setAllRestaurants(uniqueFallback);
    }
  };

  if (restaurants.length === 0) return <Shimmer />;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-200"
          onClick={() => {
            if (searchText.trim() === "") {
              setRestaurants(allRestaurants);
            } else {
              const data = filterData(searchText, allRestaurants);
              setRestaurants(data);
            }
          }}
        >
          Search
        </button>
      </div>

      {/* Restaurant List */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {restaurants.map((restaurant) => {
          const cardData = restaurant.data || restaurant.info || restaurant;
          if (!cardData || !cardData.id) return null;

          return (
            <Link
              to={`/restraunts/${cardData.id}`}
              key={cardData.id}
              className="block"
            >
              <RestaurantCard
                {...cardData}
                lastMileTravelString={
                  cardData.lastMileTravelString || cardData.lastMileTravel || ""
                }
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
