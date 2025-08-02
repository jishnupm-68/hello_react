import { CLOUDINARY_URL } from "../utils/constant";


const ResturantCard = ({name, cloudinaryImageId,cuisines, locality,avgRating} ) => {
    return (
        <>
        
        <div className='resturantCard'>
            <img className='cardImage' src={CLOUDINARY_URL + cloudinaryImageId} />
            <h3>{name} </h3>
            <p>{locality} </p>
            <p>{cuisines.join(", ")}</p>
            <p> Rating: 💛{avgRating} </p>
        </div>
        </>
        
    )
}

export default ResturantCard;