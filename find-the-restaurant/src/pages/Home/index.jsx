import { useState } from 'react';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import { Card, RestaurantCard, Modal, Map } from '../../components'

import { Wrapper, Container, Search, Logo, CarouselTitle, Carousel } from "./styles";

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="logo do restaurante" />
                    <TextField
                        label='...'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}>
                        <Input
                            value={inputValue}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Perto de você!</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={logo} title="Nome do Restaurante"/>
                        <Card photo={logo} title="Nome do Restaurante"/>
                        <Card photo={logo} title="Nome do Restaurante"/>
                        <Card photo={logo} title="Nome do Restaurante"/>
                        <Card photo={logo} title="Nome do Restaurante"/>
                        <Card photo={logo} title="Nome do Restaurante"/>
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map query={query}/>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
        </Wrapper>
    );
};

export default Home;