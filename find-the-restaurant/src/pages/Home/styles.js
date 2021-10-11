import styled from 'styled-components';

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
    padding: 16px;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
  height: 75px
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};  
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
  `;