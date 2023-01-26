/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Header.css';
import imgLogo from './logo1.jpg';
import { Link } from 'react-router-dom';
import { VscChecklist } from "react-icons/vsc";


const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
        <Link to="/">
            <img src={imgLogo} alt='logo image' />
          </Link>
        </div>
          <div className='login'>
            <Link to="/login">
              <VscChecklist className='HeaderIcon'/>
            </Link>
          </div>
    </div>
  )
}

export default Header