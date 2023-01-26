import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Find/Find.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [Phone, setPhoneValue] = useState('');
  const [findPw, setFindPw] = useState(false);

  const register = () => {
    axios
      .patch('http://192.168.0.58:8080/user/join', {
        userEmail: email,
        userTel: Phone,
      })
      .then((response) => {
        // 성공
        console.log('잘했어요');
        setFindPw(true);
        alert('비밀번호를 찾았습니다');
        navigate('/login');
      })
      .catch((error) => {
        // 실패
        console.log('An error:', error.response);
        alert('일치하는 정보가 없습니다');
        return;
      });
  };

  const onemailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handlePress = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneValue(e.target.value);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefalult();
  };

  useEffect(() => {
    if (Phone.length === 10) {
      setPhoneValue(Phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (Phone.length === 13) {
      setPhoneValue(
        Phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      );
    }
  }, [Phone]);

  return (
    <div className="App">
      <div className="container">
        <div className="FindSection">
          <div className="FindBox">
            <h1>비밀번호찾기</h1>
            <form className="FindForm" onSubmit={onSubmitHandler}>
              <label>이메일</label>
              <input
                type="email"
                name="email"
                placeholder="test@email.com"
                value={email}
                onChange={onemailHandler}
                required
              ></input>
              <label>핸드폰번호</label>
              <input
                type="text"
                name="phonenum"
                placeholder="핸드폰번호를 입력해주세요"
                value={Phone}
                onChange={handlePress}
                required
              />
              <div className="FindButton">
                <button onClick={() => register()}>찾기</button>
              </div>
            </form>
            <div className="PwFind">
              <span>OOO님 비밀번호는 OOOO입니다.</span>
            </div>
            <div className="pwlogin">
              <a>로그인</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
