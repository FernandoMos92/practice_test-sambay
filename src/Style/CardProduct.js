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

const ContainerCardNews = styled.div`
  position: relative;
  align-items: center;
  border-radius: 8px;
  border-bottom: 15px solid rgb(105,182,74);
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
  color:rgb(56, 54, 60);
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
  position: relative;
  color: rgba(46, 46, 46, .8);
  font-family: sans-serif;
  font-size: 28px;
`;

const SectionDescribe = styled.section`
  width: 80vw;
  max-height: 100vh;
  padding: 50px;
`;

const ContainerMain = styled.main`
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  .labelDescribe{
    h2{
      font-family: sans-serif;
      color: rgb(5,165,191);
      margin-bottom: 15px;
    }

    p {
      margin-left: 20px;
      margin-bottom: 10%;
    }
  }

  .labelDetalhes{
    h2{
      color: rgb(5, 165, 191);
    }

    ul{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 8vw;
      height: 10vw;
      margin-top: 10px;
      margin-left: 40px
    }

    ul li {
      width: 10vw;
      margin-right: 40px;
      margin-bottom: 12px;
      font-size:14px;
    }
  }
`;

const ImageProduct = styled.img`
  width: 40%;
  box-shadow: 2px 2px 2px lightgray;
  border-radius: 8px;
  margin-left: 170px;
`;

const ContainerInfo = styled.div`
  font-family: sans-serif;
  position: absolute;
  top: 25%;
  right: 10%;
`;

const ContainerBack = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const TitleProduct = styled.h4`
  margin-left: 20px;
  font-size: 18px;
  color: rgb(77, 73, 73);
`;

const ContainerPrice = styled.div`
  background-color:rgb(244,248,242);
  border-bottom: 18px solid rgb(105,182,74);
  border-radius: 8px;
  padding: 10px;
  width: 30vw;
  margin-bottom: 10%;
  p {
    font-size: 16px;
  }

  .title-product {
    color:rgb(5,165,191);
    font-weight: 800;
  }

  .price-product{
    margin: 5px 0;
    font-size: 24px;
    display: flex;
    flex-flow: row nowrap;
    color: rgb(5,165,191);
    font-weight: 800;
    margin-left: 20px;
    .condicionalPayment{
      margin: 5px 5px;
      font-size: 10px;
      color: gray;
    }
  }
  `;

export {
  ContainerCard, 
  ContainerCardNews,
  DescribeProduct, 
  PriceProduct, 
  CondicionalPrice,
  MainContainer,
  NameSection,
  SectionDescribe,
  ContainerMain,
  ImageProduct,
  ContainerInfo,
  ContainerBack,
  TitleProduct,
  ContainerPrice,
};