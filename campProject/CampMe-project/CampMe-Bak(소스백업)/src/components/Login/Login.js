import './Login.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { IoIosPerson } from "react-icons/io";
import { IoIosKey } from "react-icons/io";

const Login = () => {
  return (
    <div className='App'>
    <div className='container'>
      <Header></Header>
      <div className='LoginSection'>
        <div className='loginDiv'>
          <p style={{ fontSize:'25px' }}>로그인</p>
          <div className='LoginBoxDiv'>
            <div className='LoginBox'>
              <div className='Id'>
                <span>
                  <IoIosPerson/>
                </span>
                  <input className='LoginId' type="text" placeholder='아이디를 입력해주세요.' />
              </div>
              <div className='PassWord'>
                <span>
                  <IoIosKey/>
                </span>
                  <input className='LoginPw' type="password" placeholder='비밀번호를 입력해주세요.'/>
              </div>
              <div className='CheckBox' style={{float: "left", fontSize: "14px"}}>
                <input type="checkbox" />로그인상태유지
              </div>
              <button className='LoginButton' onClick={() => alert('로그인 되었습니다.')}>로그인</button>
            </div>
          </div>
          <div className='LoginMenu'>
            <ul>
              <Link to={"/findId"}>
                <span>아이디찾기</span>
              </Link>
              <Link to={"/findPw"}>
                <span>비밀번호찾기</span>
              </Link>
              <Link to={"/Join"}>
                <p>회원가입</p>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    </div>
  )
  
}


export default Login