import React, { Component } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import Header from '../Components/Header'
import { SectionDescribe } from '../Style/CardProduct';
import { Link } from 'react-router-dom';
import '../Style/DescribeProduct.css';
import styled from 'styled-components';
const { product } = require('../Api/productApi');

const ContainerMain = styled.main`
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
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
`;

class DescribeProduct extends Component {
  render() {
    const { describe, image, payment, price, status} = product[0];
    return (
      <div>
        <Header />
        <ContainerBack>
          <Link to="/">
            <MdArrowBackIosNew />
          </Link>
          <TitleProduct>Caneca do Zequinha</TitleProduct>
        </ContainerBack>
        <ContainerMain>
          <SectionDescribe>
            <ImageProduct src={ image} alt={status} />
            <ContainerInfo>
              <ContainerPrice>
                <p>Produto Novo</p>
                <p>R$ {price}</p>
                <p>Em até 2x</p>
              </ContainerPrice>
              <label htmlFor="|">
                <p>
              
                </p>
              </label>
              <label htmlFor="">
                <ul>
                  <li>Categoria 1</li>
                  <li>Categoria 2</li>
                  <li>Categoria 3</li>
                  <li>Categoria 4</li>
                  <li>Categoria 5</li>
                </ul>
              </label>
            </ContainerInfo>
          </SectionDescribe>
        </ContainerMain>
      </div>
    );
  }
}

export default DescribeProduct;