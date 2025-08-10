import { CDN_URL } from "../../Utills/constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-200">
      {/* Image */}
      <img
        src={`${CDN_URL}${cloudinaryImageId}`} 
        alt={name}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
        <h3 className="text-sm text-gray-500 mt-1 truncate">
          {cuisines.join(", ")}
        </h3>
        <h4 className="text-sm text-gray-600 mt-2">
          {lastMileTravelString} minutes away
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
