import React, { Component } from 'react';
import Header from '../Components/Header'
import CardProduct from '../Components/CardProduct';
import CardPrductNews from '../Components/CardPrductNews';
import '../Style/Home.css';
import { NameSection, MainContainer} from '../Style/CardProduct';
import { Link } from 'react-router-dom';
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
            <Link to="describe">
              <CardProduct
                describe={describe}
                image={image}
                price={price}
                payment={payment}
                status={status}
              />
            </Link>
                <Link to="describe">
                  <CardProduct
                    describe={describe}
                    image={image}
                    price={price}
                    payment={payment}
                    status={status} 
                  />
                </Link>
                <Link to="describe">
                  <CardProduct
                    describe={describe}
                    image={image}
                    price={price}
                    payment={payment}
                    status={status} 
                  />
                </Link>
                <Link to="describe">
                  <CardProduct
                    describe={describe}
                    image={image}
                    price={price}
                    payment={payment}
                    status={status} 
                  />
                </Link>
                <Link to="describe">
                  <CardProduct
                    describe={describe}
                    image={image}
                    price={price}
                    payment={payment}
                    status={status} 
                  />
                </Link>
          </section>
        </NameSection>
        <NameSection htmlFor="section-news">
          Últimas novidades
          <section className="section-news" id="section-news">

          <Link to="describe">
            <CardPrductNews
              desc={desc}
              img={img}
              pay={pay}
              pric={pric}
              sta={sta}
            />
          </Link>

          <Link to="describe">
            <CardPrductNews
              desc={desc}
              img={img}
              pay={pay}
              pric={pric}
              sta={sta}
            />
          </Link>

          <Link to="describe">
            <CardPrductNews
              desc={desc}
              img={img}
              pay={pay}
              pric={pric}
              sta={sta}
            />
          </Link>

          <Link to="describe">
            <CardPrductNews
              desc={desc}
              img={img}
              pay={pay}
              pric={pric}
              sta={sta}
            />
          </Link>

          <Link to="describe">
            <CardPrductNews
              desc={desc}
              img={img}
              pay={pay}
              pric={pric}
              sta={sta}
            />
          </Link>

          </section>
        </NameSection>
      </MainContainer>
    </>
    );
  }
}

export default Home;