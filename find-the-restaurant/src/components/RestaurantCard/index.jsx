import { useState } from 'react';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from '../RestaurantCard/styles'
import ReactStars from 'react-rating-stars-component';
import Skeleton from '../Skeleton';

const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars
                    count={5}
                    isHalf
                    value={restaurant.rating}
                    edit={false}
                    activeColor='#e7711c' />
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto
                imageLoaded={imageLoaded} 
                src={restaurant.photos[0].getUrl()}
                onLoad={() => setImageLoaded(true)}
                alt="foto do restaurante"  
            />
            {!imageLoaded && <Skeleton width="100px" height="100px"/>} 
        </Restaurant>
    );
};

export default RestaurantCard;