import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import axios from 'axios';
import swal from 'sweetalert';
import { errorAlert } from '../../libs/alert';

const Login = () => {
  const navigate = useNavigate();
  const [userNumber, setUserNumber] = useState('');
  const [userId, setUserId] = useState('');
  const [isLogin, setLogin] = useState(false);
  const [userNickname, setUserNickname] = useState('');
  const [userlogin, setUserlogin] = useState({
    userEmail: '',
    userPassword: '',
  });

  const { userEmail, userPassword } = userlogin;

  const register = () => {
    axios
      .post('/user/login', userlogin)
      .then((response) => {
        // 성공
        if (response.data) {
          localStorage.clear();
          localStorage.setItem('userNickName', response.data.userNickname);
          localStorage.setItem('userId', response.data.userNumber);
          localStorage.setItem('isLogin', true);
          setLogin(true);
          setUserId(userlogin.userEmail);
          setUserNumber(response.data.userNumber);

          swal('로그인 성공!', localStorage.getItem('userNickName') + '님 로그인되었습니다.', 'success');
          navigate('/');
        } else {
          swal('로그인 실패!', '이메일 또는 비밀번호를 다시 확인해주세요.', 'error');
        }
      })
      .catch((error) => {
        // 실패
        swal('로그인 실패..', '정보를 다시 확인해주세요.', 'warning');
      });
  };

  const onChange = (e) => {
    setUserlogin({ ...userlogin, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (setUserlogin({ ...userlogin, userEmail: '' })) {
      errorAlert('이메일을 입력해주세요.');
    }
    if (setUserlogin({ ...userlogin, userPassword: '' })) {
      errorAlert('비밀번호를 입력해주세요.');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="LoginSection">
          <div className="LoginBox">
            <h1>로그인</h1>
            <form className="LoginForm" onSubmit={onSubmitHandler}>
              <label>이메일</label>
              <input type="email" name="userEmail" placeholder="test@email.com" value={userEmail} onChange={onChange} required />
              <label>비밀번호</label>
              <input type="password" name="userPassword" placeholder="비밀번호를 입력해주세요" value={userPassword} onChange={onChange} required />
              <div className="LoginButton">
                <button onClick={register}>로그인</button>
              </div>
              <div className="loginmenu">
                <Link to="/findPw">
                  <span className="findpw">비밀번호 찾기</span>
                </Link>
                <Link to="/Join">
                  <span>회원가입</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
