import Shimmer from "./Shimmer"
import useResturantMenu from "../utils/useResturantMenu";
import {CLOUDINARY_URL} from '../utils/constant';
import {useParams} from "react-router"

const RestMenu =()=>{
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  
    return (
    <div className="menu">
      <h1>{name}</h1>
      <div className="menuCardImg">
        <img className="menuImage" src={CLOUDINARY_URL + cloudinaryImageId} />
      </div>
      <div className="dataMenuCard">
        <p>{cuisines.join(",")}</p> 
      <p>Ratings: {avgRating}</p><br />
      <p>{costForTwoMessage}</p>
    </div>
    </div>
  );
}


export default RestMenu;