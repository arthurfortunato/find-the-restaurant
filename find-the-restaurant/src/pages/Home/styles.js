import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display:flex;
`;

export const Container = styled.aside`
  background-color: ${(propos) => propos.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    padding: 20px;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
  height: 60px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 30px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};  
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
  `;

  export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family: ${(props) => props.theme.fonts.regular};  
    color: ${(props) => props.theme.colors.text};
    line-height: 29px;
    font-size: 24px;
    font-weight: bold;
  `;

  export const ModalContent = styled.p`
    margin-bottom: 10px;
    font-family: ${(props) => props.theme.fonts.regular};  
    color: ${(props) => props.theme.colors.text};
    font-weight: normal;
    line-height: 19px;
    font-size: 16px;
  `;

  export const TextSearch = styled.p`
    color: #D4D4D4;
    font-size: 15px;
  `;
  