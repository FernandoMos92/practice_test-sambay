import React, { Component } from 'react';
import sambay from '../../img/sambay.svg'
import { BsBell, BsCart3, BsSearch } from 'react-icons/bs';
import "../../Style/Header.css";

class index extends Component {
  render() {
    return (
      <div className="header-container">
        <img 
          src={sambay} 
          alt="sambay-icon" 
          className="icon-sambay"
        />
        <BsSearch className="icon-search"/>
        <input
        className="search-input"
        type="text"
        placeholder="Busque aqui seu produto"
        />
        <div className="user-container">
          <BsBell className="icon-react"/>
          <BsCart3 className="icon-react"/>
          <div className="user-icon">

          </div>
        </div>
      </div>
    );
  }
}

export default index;