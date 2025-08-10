import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRastrauntMenu from "../../Utills/useRestrauntMenu";

const RestrauntMenu = () => {
  const { restaurantId } = useParams();
  const resInfo = useRastrauntMenu(restaurantId);

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
    sla,
  } = info;

  // Menu Items
  const menuCards =
    resInfo?.data?.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let menuItems = [];
  menuCards.forEach((menuSection) => {
    const itemCards = menuSection?.card?.card?.itemCards;
    if (Array.isArray(itemCards)) {
      itemCards.forEach((item) => {
        menuItems.push(item.card.info);
      });
    }
  });

  // ✅ Remove duplicates by ID
  menuItems = menuItems.filter(
    (item, index, self) => index === self.findIndex((i) => i.id === item.id)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Restaurant Info Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {name || "Restaurant Name"}
        </h1>
        <p className="text-gray-600">{cuisines?.join(", ")}</p>
        <p className="text-gray-700 font-medium mt-1">{costForTwoMessage}</p>
        <div className="flex items-center gap-4 mt-3">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ⭐ {avgRating}
          </span>
          <span className="text-gray-500">{totalRatingsString}</span>
        </div>
        <p className="text-gray-500 mt-2">
          {areaName}, {sla?.lastMileTravelString}
        </p>
      </div>

      {/* Menu Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Menu</h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                {item.description && (
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                )}
              </div>
              <p className="text-blue-600 font-bold mt-2 sm:mt-0">
                ₹{(item.price || item.defaultPrice) / 100}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
