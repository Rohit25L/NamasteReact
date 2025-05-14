import { Card_LInk } from "../utilis/constance";

const RestaurantCard = ({ resData }) => {
  console.log(resData);

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={ Card_LInk
           +
          resData.info.cloudinaryImageId
        }
        alt="restaurantName"
      />
      <div className="restaurant-content">
        <h2 className="restaurant-name">{resData.info.name}</h2>
        <p className="food-name">{resData.info.cuisines.join(", ")}</p>
        <h3 className="food-name">{resData.info.costForTwo}</h3>
        <div className="info-row">
          <span className="rating">⭐ {resData.info.avgRating}</span>
          <span className="delivery-time">{resData.info.sla.slaString}</span>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;