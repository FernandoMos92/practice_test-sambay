import React, { Component } from 'react';
import "../../Style/CardProduct.css"
import { ContainerCardNews, DescribeProduct, PriceProduct, CondicionalPrice } from '../../Style/CardProduct';

class index extends Component {
  render() {
    const { desc, img, pay, pric } = this.props;
    return (
      <ContainerCardNews className="container-card">
        <img src={ img } alt="caneca-zequinha" className="picture-product"/>
        <DescribeProduct className="describe-product">{desc}</DescribeProduct>
        <PriceProduct className="price-product">R$ {pric}</PriceProduct>
        <CondicionalPrice className="condicional-price">{pay}</CondicionalPrice>
        <p className="footer-describe-news">Promoção</p>
      </ContainerCardNews>
    );
  }
}

export default index;