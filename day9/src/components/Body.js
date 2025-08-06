import ResturantCard from "./ResturantCard"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";


let count=1;



const Body = ()  =>{
  const [dataSet, setDataSet] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.8704703&lng=75.367882&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    let tempData =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle;
    setDataSet(tempData);
    setFilteredData(tempData);
    
  };
  if(onlineStatus===false) return (
    <h1 >Please check your internet</h1>
  )

  // it is conditional rendering
  // if dataSet is empty then show shimmer else show restaurant cards
  return dataSet?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filterBtn"
          onClick={() => {
            const filteredData = dataSet.restaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredData({ ...filteredData, restaurants: filteredData });
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            className="searchInput"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="searchBtn"
            onClick={() => {
              console.log("search text", searchText);
              const filteredData = dataSet.restaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
      
              setFilteredData({ ...filteredData, restaurants: filteredData });
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="resturantContainer">
        <div className="resturantList">
          {filteredData?.restaurants?.map((restaurant) => {
            return (<ResturantCard {...restaurant.info } key= {restaurant.info.id  }  />)
          }
            
            
          )}
        </div>
      </div>

      {/* <div className="resturantContainer">
  <div className="resturantList">
    {filteredData?.restaurants?.map((restaurant) => {
      return <ResturantCard {...restaurant.info} key={restaurant.info.id} />;
    })}
  </div>
</div> */}

      
    </div>
  );
}



export default Body;
