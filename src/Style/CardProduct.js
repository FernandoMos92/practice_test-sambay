import styled from 'styled-components';

const ContainerCard = styled.div`
  position: relative;
  align-items: center;
  border-radius: 8px;
  border-bottom: 15px solid rgb(96,133,219);
  box-shadow: 0 0 5px gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 270px;
  width: 200px;
  padding: 10px;
  transition: all 0.2s linear;
  cursor: pointer;
  user-select: none;
  :hover{
  transform: scale(.9);
  box-shadow: 2px 2px 20px rgb(56, 54, 54)
  }
`;

const DescribeProduct = styled.p`
  font-size: 14px;
  color:rgb(161, 153, 153);
`;

const PriceProduct = styled.p`
  align-self: flex-start;
  color: rgb(5,165,191);
  font-weight: 900;
`;

const CondicionalPrice = styled.p`
  align-self: flex-start;
  color:rgb(161, 153, 153);
  font-size: 12px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 65px;
  max-width: 100vw;
  max-height: 100vh;
`;

const NameSection = styled.label`
  color: rgba(46, 46, 46, .8);
  font-family: sans-serif;
  font-size: 28px;
`;

export {
  ContainerCard, 
  DescribeProduct, 
  PriceProduct, 
  CondicionalPrice,
  MainContainer,
  NameSection,
};