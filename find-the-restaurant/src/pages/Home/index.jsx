import Slider from "react-slick";
import { useState } from 'react';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';

import { Wrapper, Container, Search, Logo, CarouselTitle } from "./styles";


const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const settings = {
        dots: true,
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
                        label='Pesquisar Restaurantes'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}>
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Perto de você!</CarouselTitle>
                    <Slider {...settings}>
                        <div><h3>1</h3></div>
                        <div><h3>1</h3></div>
                        <div><h3>1</h3></div>
                        <div><h3>1</h3></div>
                        <div><h3>1</h3></div>
                        <div><h3>1</h3></div>
                        <div><h3>1</h3></div>
                    </Slider>
                </Search>
            </Container>
        </Wrapper>
    );
};

export default Home;