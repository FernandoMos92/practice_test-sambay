import React, { Component } from 'react';
import sambay from '../../img/sambay.svg'
import { BsBell, BsCart3, BsSearch, BsFillBellFill } from 'react-icons/bs';
import "../../Style/Header.css";
import { Link } from 'react-router-dom'

class index extends Component {
  constructor() {
    super();
    this.state = {
      switchBell: true,
    }

    this.handleBell = this.handleBell.bind(this);
  }

  handleBell() {
    const { switchBell } = this.state;
    this.setState({switchBell: !switchBell})
    if (switchBell) window.alert('Notificações ativadas!')
  }

  render() {

    const{ 
      state: { switchBell },
    } = this

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
         {
         switchBell ? 
          <BsBell 
            className="icon-react"
            onClick={ () => this.handleBell()}
            style={{
              cursor: 'pointer'
            }}
          /> :
          <BsFillBellFill 
          onClick={ () => this.handleBell()}
          style={{
            color: 'white',
            cursor:'pointer',
            fontSize: '24px',
          }}
          />
        }
          <BsCart3 className="icon-react"/>
          <div className="user-icon">

          </div>
        </div>
      </div>
    );
  }
}

export default index;