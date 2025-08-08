import { CLOUDINARY_URL } from "../utils/constant";
import {Link} from "react-router"

const ResturantCard = ({name, cloudinaryImageId,cuisines, locality,avgRating, id} ) => {
    return (
        <>
        <div className=' m-3 p-3 w-64 bg-amber-50 hover:bg-white'>
           <Link
              key={id}
              to={"/resturants/" + id}
            ><img className='w-60 h-60' src={CLOUDINARY_URL + cloudinaryImageId} />
                </Link>  
            <h3 className="bold">{name} </h3>
            <p>{locality} </p>
            <p>{cuisines.join(", ")}</p>
            <p> Rating: 💛{avgRating} </p> 
        </div>
        </>
        
    )
}

export default ResturantCard;