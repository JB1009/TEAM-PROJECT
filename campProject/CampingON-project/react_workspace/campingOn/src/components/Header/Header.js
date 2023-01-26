import React from 'react';
import './Header.css';
import logoImg from '../../images/campingonLogo.jpg';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Mynotification from '../MyNotification/Mynotification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const [notification, setNotification] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const Logincheck = localStorage.getItem('isLogin', true);
  // loading.js 에서 Header 삭제
  if (window.location.pathname === '/loading') return null;

  return (
    <div className="headerWrap">
      <div className="header">
        <div className="headerLogo">
          <Link to="/">
            <img src={logoImg} alt="캠핑온로고"></img>
          </Link>
        </div>
        <div className="headerNavigation">
          <Link to="/mypage">
            <div className="MyPageButton">MY</div>
          </Link>
          <div className="MenuButton" onClick={() => setNotification(!notification)}>
            <FontAwesomeIcon icon={faBell} />
          </div>
        </div>

        <div className="mynotificationWrap">{notification ? <Mynotification /> : null}</div>
      </div>
    </div>
  );
};

export default Header;
