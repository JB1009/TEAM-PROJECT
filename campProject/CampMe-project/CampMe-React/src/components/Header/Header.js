/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import './Header.css';
import imgLogo from '../images/logo1.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

const Header = () => {
  const [isLogin, setLogin] = useState(false);
  const [userNickname, setUserNickname] = useState('');
  const navigate = useNavigate();

  if (localStorage.getItem('userId') !== null) {
    axios.get('/user/' + localStorage.getItem('userId')).then((response) => {
      setUserNickname(response.data.userNickname);
    });
  }

  const logout = () => {
    localStorage.clear();
    navigate('/');
    setLogin(false);
    swal('벌써가?', '또 올거지..?😥', 'info');
    navigate('/');
  };

  const login = () => {
    navigate('/login');
  };

  const home = () => {
    navigate('/');
  };

  const Logincheck = localStorage.getItem('isLogin', true);

  return (
    <div className="headerContainer">
      <div className="header">
        <div className="logo">
          <img src={imgLogo} alt="logo image" onClick={home} />
        </div>

        {Logincheck ? (
          <div className="HeaderMenu">
            <div className="HeaderTitle">
              <div>{userNickname}님 환영합니다!</div>
            </div>

            <div className="HeaderButton">
              <Link to="/WriteList">
                <button type="button">내가 쓴 글</button>
              </Link>
              <Link to="/mypage">
                <button type="button">개인정보수정</button>
              </Link>
              <button type="button" onClick={logout}>
                로그아웃
              </button>
            </div>
          </div>
        ) : (
          <div className="HeaderLogin">
            <button onClick={login}>로그인</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
