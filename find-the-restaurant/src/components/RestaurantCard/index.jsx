import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from '../RestaurantCard/styles'
import ReactStars from 'react-rating-stars-component';

import logo from '../../assets/logo.svg'

const RestaurantCard = () => 
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars 
                count={5} 
                isHalf={true}
                value={4}
                edit={false}
                activeColor='#e7711c' />
            <Address>Endereço</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={logo} alt="foto do restaurante"/>
    </Restaurant>

export default RestaurantCard;