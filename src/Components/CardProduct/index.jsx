import React, { Component } from 'react';
import "../../Style/CardProduct.css"
import { ContainerCard, DescribeProduct, PriceProduct, CondicionalPrice } from '../../Style/CardProduct';

class index extends Component {
  render() {
    const { describe, image, payment, price} = this.props;
    return (
      <ContainerCard className="container-card">
        <img src={ image } alt="caneca-zequinha" className="picture-product"/>
        <DescribeProduct className="describe-product">{describe}</DescribeProduct>
        <PriceProduct className="price-product">R$ {price}</PriceProduct>
        <CondicionalPrice className="condicional-price">{payment}</CondicionalPrice>
        <p className="footer-describe">Promoção</p>
      </ContainerCard>
    );
  }
}

export default index;