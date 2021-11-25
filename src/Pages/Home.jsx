import React, { Component } from 'react';
import Header from '../Components/Header'
import CardProduct from '../Components/CardProduct';
import CardPrductNews from '../Components/CardPrductNews';
import '../Style/Home.css';
import { NameSection, MainContainer} from '../Style/CardProduct';
const { product } = require('../Api/productApi');

class Home extends Component {
  render() {
    const { describe, image, payment, price, status} = product[0];
    const { describe: desc, image: img, payment: pay, price: pric, status: sta} = product[1];
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
                <CardProduct
              describe={describe}
              image={image}
              price={price}
              payment={payment}
              status={status} 
            />
                <CardProduct
              describe={describe}
              image={image}
              price={price}
              payment={payment}
              status={status} 
            />
                <CardProduct
              describe={describe}
              image={image}
              price={price}
              payment={payment}
              status={status} 
            />
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
          <CardPrductNews
            desc={desc}
            img={img}
            pay={pay}
            pric={pric}
            sta={sta}
          />
          <CardPrductNews
            desc={desc}
            img={img}
            pay={pay}
            pric={pric}
            sta={sta}
          />
          <CardPrductNews
            desc={desc}
            img={img}
            pay={pay}
            pric={pric}
            sta={sta}
          />
          <CardPrductNews
            desc={desc}
            img={img}
            pay={pay}
            pric={pric}
            sta={sta}
          />
          <CardPrductNews
            desc={desc}
            img={img}
            pay={pay}
            pric={pric}
            sta={sta}
          />
          </section>
        </NameSection>
      </MainContainer>
    </>
    );
  }
}

export default Home;