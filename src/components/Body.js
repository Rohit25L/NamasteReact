import RestaurantCard from "./RestaurantCard";
import HeroSection from "./HeroSection";
import resObj from "../utilis/mockdata";

 const Body = () => {
  return (
    <div className="body">
      <div className="largefood">
        <HeroSection></HeroSection>
      </div>
      <div className="restturantman">
        <div className="rescard">
          {resObj.map((e) => {
            return <RestaurantCard key={e.info.id} resData={e} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Body;