import { Restaurant, RestaurantInfo, Title, Address } from '../RestaurantCard/styles'

const RestaurantCard = () => 
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <p>Avaliação</p>
            <Address>Endereço</Address>
        </RestaurantInfo>
    </Restaurant>

export default RestaurantCard;