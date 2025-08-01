import ResturantCard from "./ResturantCard"
import data from '../utils/tempData'
import { useState } from "react";
import SearchBar from "./SearchBar";


const Body = ()  =>{
    const [dataSet, setDataSet] = useState(data);

    const handleSearch =(searchTerm)=>{
        const filteredData = dataSet.restaurants.filter((x) => 
            x.info.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        setDataSet({ ...dataSet, restaurants: filteredData });
    }

    return (
        <div className='body'>
            <SearchBar   onSearch ={handleSearch}/>

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
                        return <ResturantCard {...restaurant.info} key={restaurant.info.id} />
                    })}
                </div>
            </div>
        </div>

    )
}



export default Body;
