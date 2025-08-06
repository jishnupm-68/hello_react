import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import {useParams} from "react-router";
import {MENU_URL} from "../utils/constant";

import {CLOUDINARY_URL} from '../utils/constant'
const RestMenu =()=>{
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
    console.log("data",resInfo?.cards[5])

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