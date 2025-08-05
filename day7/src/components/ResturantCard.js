import { CLOUDINARY_URL } from "../utils/constant";
import {Link} from "react-router"

const ResturantCard = ({name, cloudinaryImageId,cuisines, locality,avgRating, id} ) => {
    return (
        <>
        <div className='resturantCard'>
           <Link
              key={id}
              to={"/resturants/" + id}
            ><img className='cardImage' src={CLOUDINARY_URL + cloudinaryImageId} />
                </Link>  
            <h3 >{name} </h3>
            <p>{locality} </p>
            <p>{cuisines.join(", ")}</p>
            <p> Rating: 💛{avgRating} </p> 
        </div>
        </>
        
    )
}

export default ResturantCard;