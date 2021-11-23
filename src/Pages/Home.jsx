import React, { Component } from 'react';
import Header from '../Components/Header'
import CardProduct from '../Components/CardProduct';
import '../Style/Home.css';
const { product } = require('../Api/productApi');

class Home extends Component {
  render() {
    console.log(product)
    const { describe, image, payment, price, status} = product[0];
    return (
    <>
      <Header />
      <section className="section-promo">
        <h2>Produtos em promoção</h2>
        <CardProduct 
          describe={describe} 
          image={image} 
          price={price} 
          payment={payment}
          status={status}
        />
      </section>
      <section className="section-news">
        <h2>Últimas novidades</h2>
      </section>
    </>
    );
  }
}

export default Home;