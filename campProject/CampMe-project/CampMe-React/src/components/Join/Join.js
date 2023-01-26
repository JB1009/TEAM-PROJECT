import './Join.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { errorAlert } from '../../libs/alert';
import swal from 'sweetalert';

const Join = () => {
  const navigate = useNavigate();
  const [ConfirmPassword, setContirmPassword] = useState('');
  const [isEmailCheck, setEmailCheck] = useState(false);
  const [isNicknameCheck, setNicknameCheck] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [inputs, setInputs] = useState({
    userName: '',
    userEmail: '',
    userBirth: '',
    userNickname: '',
    userPassword: '',
    userTel: '',
  });
  const { userName, userEmail, userBirth, userNickname, userPassword, userTel } = inputs;

  const emailcheck = () => {
    let email = inputs.userEmail;
    if (email === '') {
      swal('잠깐!', '이메일을 입력해주세요.', 'error');
      return false;
    }
    let reg = /^\S+@\S+$/i;
    if (!reg.test(email)) {
      swal('잠깐!', '이메일 형식이 아닙니다.', 'error');
      return false;
    }
    const emailCheckUrl = `/user-email/${email}`;
    axios.get(emailCheckUrl, {}).then((response) => {
      if (response.data) {
        setInputs({ ...inputs, userEmail: '' });
        swal('잠깐!', '이미 가입된 이메일입니다.', 'error');
        setEmailCheck(false);
        return false;
      } else {
        swal('통과!', '사용 가능한 이메일입니다.', 'success');
        setEmailCheck(true);
      }
    });
  };

  const nickNamecheck = () => {
    const nicknameCheckUrl = `/user-nickname/${inputs.userNickname}`;
    axios.get(nicknameCheckUrl, {}).then((response) => {
      if (response.data) {
        swal('잠깐!', '이미 사용중인 닉네임입니다.', 'error');
        setNicknameCheck(false);
        setInputs({ ...inputs, userNickname: '' });
        return false;
      } else {
        swal('통과!', '사용 가능한 닉네임입니다.', 'success');
        setNicknameCheck(true);
      }
    });
  };

  const register = () => {
    if (isClick) {
      return;
    }
    setIsClick(true);
    axios
      .post('/user', inputs)
      .then((response) => {
        // 성공
        if (response.data) {
          swal('성공!', inputs.userName + '님 캠프미 회원이 되신것을 축하드립니다.😎', 'success');
          navigate('/login');
        } else {
          swal('잠깐!', '회원가입 실패..', 'error');
        }
      })
      .catch((error) => {
        swal('잠깐!', '정보를 다시확인해주세요.😥', 'error');
      });
  };

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const onConfirmPasswordHandler = (event) => {
    setContirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputs.userPassword !== ConfirmPassword) {
      errorAlert('비밀번호확인이 다릅니다.');
      return false;
    }
    if (!isEmailCheck || !isNicknameCheck) {
      errorAlert('중복확인을 먼저 진행해주세요.');
      return false;
    }
    if (!emailcheck) {
      swal('잠깐!', '이미 가입된 이메일입니다.', 'error');
      return false;
    }
    if (!nickNamecheck) {
      swal('잠깐!', '닉네임 중복확인을 진행해주세요.', 'error');
      return false;
    }
    register();
  };

  useEffect(() => {
    if (userTel.length === 11) {
      setInputs({ ...inputs, userTel: userTel.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') });
    } else if (userTel.length === 13) {
      setInputs({ ...inputs, userTel: userTel.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') });
    }
  }, [userTel]);

  return (
    <div className="App">
      <div className="container">
        <div className="JoinSection">
          <div className="JoinBox">
            <h2>회원가입</h2>
            <form className="Joinform" onSubmit={onSubmitHandler}>
              <label>이름</label>
              <input type="name" name="userName" placeholder="이름을 입력해주세요." value={userName} onChange={onChange} required />
              <label>이메일</label>
              {isEmailCheck === true ? (
                <input type="email" name="userEmail" placeholder="test@email.com" value={userEmail} onChange={onChange} required readOnly />
              ) : (
                <input type="email" name="userEmail" placeholder="test@email.com" value={userEmail} onChange={onChange} required />
              )}
              <button type="button" onClick={emailcheck}>
                중복확인
              </button>
              <label>생년월일</label>
              <input type="date" name="userBirth" value={userBirth} onChange={onChange} required />
              <label>비밀번호</label>
              <input type="password" name="userPassword" placeholder="비밀번호를 입력해주세요." value={userPassword} onChange={onChange} required />
              <label>비밀번호 확인</label>
              <input type="password" placeholder="다시한번 입력해주세요." value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
              <label>닉네임</label>
              {isNicknameCheck === true ? (
                <input
                  maxLength={6}
                  type="text"
                  placeholder="활동 닉네임을 입력해주세요.(6자이내)"
                  value={userNickname}
                  name="userNickname"
                  onChange={onChange}
                  required
                  readOnly
                />
              ) : (
                <input
                  maxLength={6}
                  type="text"
                  placeholder="활동 닉네임을 입력해주세요.(6자이내)"
                  value={userNickname}
                  name="userNickname"
                  onChange={onChange}
                  required
                />
              )}
              <button type="button" onClick={nickNamecheck}>
                중복확인
              </button>
              <label>핸드폰번호</label>
              <input
                maxLength={13}
                type="text"
                placeholder="'ㅡ'은 자동으로 입력됩니다."
                onChange={onChange}
                value={userTel}
                name="userTel"
                required
              />
              <button type="submit">제출하기</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
