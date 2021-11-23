import React, { Component } from 'react';
import sambay from '../../img/sambay.svg'
import { BsBell, BsCart3, BsSearch } from 'react-icons/bs';

class index extends Component {
  render() {
    return (
      <div className="header-container">
        <img src={sambay} alt="sambay-icon" />
        <BsSearch />
        <input
        type="text"
        placeholder="Busque aqui seu produto"
        />
        <BsBell />
        <BsCart3 />
      </div>
    );
  }
}

export default index;