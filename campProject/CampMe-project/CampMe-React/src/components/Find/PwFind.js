import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Find/Find.css';
import { successAlert, errorAlert } from '../../libs/alert';

const PwFind = () => {
  const navigate = useNavigate();
  const [findPw, setFindPw] = useState('');
  const [pwFind, setPwFind] = useState(false);
  const [userNickname, setUserNickname] = useState('');
  const [find, setFind] = useState({
    userEmail: '',
    userTel: '',
  });

  const { userEmail, userTel } = find;

  const register = () => {
    axios
      .post('/user/identity', find)
      .then((response) => {
        if (response.data) {
          setFindPw(response.data.userPassword);
          setUserNickname(response.data.userNickname);
          setPwFind(true);
          successAlert('비밀번호를 찾았습니다.');
        } else {
          errorAlert('일치하는 정보가 없습니다.');
          setPwFind(false);
        }
      })
      .catch((error) => {
        // 실패
        errorAlert('일치하는 정보가 없습니다.');
        setPwFind(false);
      });
  };

  const onChange = (e) => {
    setFind({ ...find, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefalult();
  };

  useEffect(() => {
    if (userTel.length === 11) {
      setFind({ ...find, userTel: userTel.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') });
    } else if (userTel.length === 13) {
      setFind({ ...find, userTel: userTel.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') });
    }
  }, [userTel]);

  const login = () => {
    navigate('/login');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="FindSection">
          <div className="FindBox">
            <h1>비밀번호찾기</h1>
            <form className="FindForm" onSubmit={onSubmitHandler}>
              <label>이메일</label>
              <input type="email" name="userEmail" placeholder="test@email.com" value={userEmail} onChange={onChange} required></input>
              <label>핸드폰번호</label>
              <input type="text" name="userTel" placeholder="핸드폰번호를 입력해주세요" value={userTel} onChange={onChange} required />
              <div className="FindButton">
                <button type="button" onClick={register}>
                  찾기
                </button>
              </div>
            </form>
            {pwFind ? (
              <div className="resultbox">
                <div className="PwFindnickname">
                  <span className="nickname">{userNickname} </span>
                  <span>님의 비밀번호는</span>
                </div>
                <div className="PwFindresult">
                  <span className="finduserpw"> {findPw} </span>
                  <span>입니다.</span>
                </div>
              </div>
            ) : null}

            <div className="pwlogin">
              <button onClick={login}>로그인</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PwFind;
