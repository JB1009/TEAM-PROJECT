import './Join.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Join = () => {
  return (
    <div className='App'>
        <div className='container'>
            <Header/>
                <div className='Section'>
                    <div className='JoinBox'>
                        <p style={{ fontSize:'25px' }}>회원가입</p>
                        <div className='JoinSubBox'>
                            <div className='Information'>
                                <div className='JoinId'>
                                    <span>
                                        아이디 :
                                    </span>
                                    <input className='JoinInputId' type="text" placeholder='아이디를 입력해주세요.' />
                                    <button className='checkDuplication'>중복확인</button>
                                </div>
                                <div className='JoinPassWord'>
                                    <span>
                                        비밀번호 :
                                    </span>
                                    <input className='JoinInputPassWord' type="password" placeholder='비밀번호를 입력해주세요.' />
                                </div>
                                <div className='JoinPassWordCheck'>
                                    <span>
                                        비밀번호재확인 :
                                    </span>
                                    <input className='JoinInputPassWordCheck' type="password" placeholder='비밀번호를 한번 더 입력해주세요.' />
                                </div>
                                <div className='JoinName'>
                                    <span>
                                        이름 :
                                    </span>
                                    <input className='JoinInputName' type="text" placeholder='이름을 입력해주세요.' />
                                </div>
                                <div className='JoinBirth'>
                                    <span>
                                        생년월일 :
                                    </span>
                                    <input className='JoinInputBirth' type="date"/>
                                </div>
                                <div className='JoinPhoneNumber'>
                                    <span>
                                        핸드폰번호 :
                                    </span>
                                    <input className='JoinInputPhoneNumber' type="number" placeholder='핸드폰번호를 입력해주세요.' />
                                </div>
                                <div className='JoinEmail'>
                                    <span>
                                        이메일 :
                                    </span>
                                    <input className='JoinInputEmail' type="email" placeholder='이메일을 입력해주세요.' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Join