import React, { Component } from 'react';
import Header from '../Components/Header'
import CardProduct from '../Components/CardProduct';
import '../Style/Home.css';
import { NameSection, MainContainer} from '../Style/CardProduct';
const { product } = require('../Api/productApi');

class Home extends Component {
  render() {
    console.log(product)
    const { describe, image, payment, price, status} = product[0];
    return (
    <>
      <Header />
      <MainContainer>
        <NameSection htmlFor="promo-section">
          Produtos em promoção
          <section className="section-promo" id="promo-section">
            <CardProduct
              describe={describe}
              image={image}
              price={price}
              payment={payment}
              status={status}
            />
          </section>
        </NameSection>
        <NameSection htmlFor="section-news">
          Últimas novidades
          <section className="section-news" id="section-news">
          </section>
        </NameSection>
      </MainContainer>
    </>
    );
  }
}

export default Home;