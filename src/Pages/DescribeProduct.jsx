import React, { Component } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import Header from '../Components/Header'
import { SectionDescribe, ContainerBack, TitleProduct, ContainerMain, ImageProduct, ContainerInfo, ContainerPrice } from '../Style/CardProduct';
import { Link } from 'react-router-dom';
import '../Style/DescribeProduct.css';
const { product} = require('../Api/productApi');


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
                <p className="title-product">Produto Novo</p>
                <p className="price-product">
                  R$ {price}
                  <p className="condicionalPayment">{payment}</p>
                </p>
              </ContainerPrice>

              <label className="labelDescribe">
                <h2>Descrição</h2>
                <p>
                {describe}
                </p>
              </label>

              <label className="labelDetalhes">
                <h2>Detalhes do Produto</h2>
                <ul>
                  <li><strong style={{ color: 'rgb(5, 165, 191)'}}>Categoria:</strong> Utilidades Domésticas</li>
                  <li><strong style={{ color: 'rgb(5, 165, 191)'}}>Material:</strong> Porcelana</li>
                  <li><strong style={{ color: 'rgb(5, 165, 191)'}}>Parcele em:</strong> 2x</li>
                  <li><strong style={{ color: 'rgb(5, 165, 191)'}}>Tamanho:</strong> 9cm X 8cm X 0cm X 8kg</li>
                  <li><strong style={{ color: 'rgb(5, 165, 191)'}}>Marca:</strong> by Nilson Muller</li>
                  <li><strong style={{ color: 'rgb(5, 165, 191)'}}>Estoque:</strong> 8</li>
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