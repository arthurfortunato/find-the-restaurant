import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from '../RestaurantCard/styles'
import ReactStars from 'react-rating-stars-component';

const RestaurantCard = ({ restaurant, onClick }) => (
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
        <RestaurantPhoto src={restaurant.photos[0].getUrl()} alt="foto do restaurante"/>
    </Restaurant>
);

export default RestaurantCard;