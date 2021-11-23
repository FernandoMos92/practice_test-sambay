import React, { Component } from 'react';
import "../../Style/CardProduct.css"

class index extends Component {
  render() {
    const { describe, image, payment, price} = this.props;
    return (
      <div className="container-card">
        <img src={ image } alt="caneca-zequinha" className="picture-product"/>
        <p className="describe-product">{describe}</p>
        <p className="price-product">R$ {price}</p>
        <p className="condicional-price">{payment}</p>
        <p className="footer-describe">Promoção</p>
      </div>
    );
  }
}

export default index;