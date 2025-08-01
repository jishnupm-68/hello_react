import ResturantCard from "./ResturantCard"
import data from '../utils/tempData'
import { useState } from "react";







const Body = ()  =>{
    const [dataSet, setDataSet] = useState(data);
    return (
        <div className='body'>
            <div className='filter'>
                <button className='filterBtn' onClick={()=>{
                    const filteredData = dataSet.restaurants.filter(
                        (restaurant) => restaurant.info.avgRating > 4.3);
                        console.log("Top Rated Restaurants", filteredData)
                        setDataSet({ ...dataSet, restaurants: filteredData });
                }}>Top Rated Restaurants</button>
                
            </div>

        <div className='resturantContainer'>
            <div className='resturantList'>
                {dataSet.restaurants.map((restaurant) => {
                    // console.log("restaurant", restaurant.info)
                    return <ResturantCard {...restaurant.info} key={restaurant.info.id} />
                })}
                </div>
            
        </div>
        </div>

    )
}



export default Body;
