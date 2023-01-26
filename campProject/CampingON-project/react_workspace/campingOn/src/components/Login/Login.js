import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import axios from 'axios';
import swal from 'sweetalert';

// Link vs Navigate
// Link => 페이지 내에서 뭔가... 그런거 ?
// LInk

const Login = () => {
  const navigate = useNavigate();
  const [userNumber, setUserNumber] = useState('');
  const [userId, setUserId] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [userpassword, setUserPassword] = useState('');
  const [isLogin, setLogin] = useState(false);

  // todo: 여기서 메뉴창 닫기

  // const uemail = useRef();
  // const upassword = useRef();

  //async 동기 (API 연동할 때 async, await 쓰자)
  const register = () => {
    axios
      .post('/user/login', {
        userEmail: useremail,
        userPassword: userpassword,
      })
      .then((response) => {
        // 성공
        // setUserName(response.data.userNickname);
        if (response.data) {
          console.log(response);
          localStorage.clear();
          localStorage.setItem('userId', response.data.userNumber);
          // localStorage.setItem('userNumber', userNumber);
          localStorage.setItem('isLogin', true);
          setLogin(true);
          setUserId(useremail);
          setUserNumber(response.data.userNumber);

          swal('로그인 성공!', useremail + '님 로그인되었습니다.', 'success');
          navigate('/');
          // window.location.replace('/'); << 이걸로 해결해야 하는 문제 ? ==> navigate
        } else {
          swal('로그인 실패!', '이메일 또는 비밀번호를 다시 확인해주세요.', 'error');
        }
      })
      .catch((error) => {
        // 실패
        console.log(error);
        swal('로그인 실패..', '정보를 다시 확인해주세요.', 'warning');
        // alert('정보를 다시확인해주세요.😥');
      });
  };

  const onuserEmailHandler = (event) => {
    setUserEmail(event.currentTarget.value);
  };
  const onuserPasswordHandler = (event) => {
    setUserPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="LoginSection">
          <div className="LoginBox">
            <h1>로그인</h1>
            <form className="LoginForm" onSubmit={onSubmitHandler}>
              <label>이메일</label>
              <input
                // ref={uemail}
                type="email"
                name="email"
                placeholder="test@email.com"
                value={useremail}
                onChange={onuserEmailHandler}
                required
              />
              <label>비밀번호</label>
              <input
                // ref={upassword}
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                value={userpassword}
                onChange={onuserPasswordHandler}
                required
              />
              {/* 이쁜 얼럿창 */}
              {/* swal('로그인 성공!',useremail+"님 로그인되었습니다.", 'success') */}

              <div className="LoginButton">
                <button onClick={register}>로그인</button>
              </div>

              <div className="loginmenu">
                <Link to="/findPw">
                  <div className="findpw">비밀번호 찾기</div>
                </Link>
                <Link to="/Join">
                  <div>회원가입</div>
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
