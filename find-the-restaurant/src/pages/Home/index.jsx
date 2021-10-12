import { useState } from 'react';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import { Card, RestaurantCard, Modal } from '../../components'

import { Wrapper, Container, Search, Logo, CarouselTitle, Carousel } from "./styles";

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

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
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
        </Wrapper>
    );
};

export default Home;