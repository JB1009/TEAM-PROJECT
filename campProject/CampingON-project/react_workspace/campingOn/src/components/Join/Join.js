import './Join.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { warnAlert } from '../../libs/alert';
import swal from 'sweetalert';

const Join = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [nickname, setNickname] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setContirmPassword] = useState('');
  const [Phone, setPhoneValue] = useState('');
  const [isEmailCheck, setEmailCheck] = useState(false);
  const [isNicknameCheck, setNicknameCheck] = useState(false);
  const [isClick, setIsClick] = useState(false);

  // note: 내가 혼자 기억하기 위해 뭔가 적어두기 ? ....
  // feat: 다른 팀원이나 미래의 나를 위해서 이 부분이 무슨 기능 (feature) 하는지 써놓기
  // warn: 이 부분 수정하면 디진다 만지지 마셈 이런거 적어두면 됨

  // todo: 백엔드 자체에서 에러메시지 보낼 수 있는지 아니면 그냥...뭐.. 일케 쓰기
  const emailcheck = () => {
    const emailCheckUrl = `/user-email/${email}`;
    // const emailCheckUrl = '/user-email/' + email;

    axios.get(emailCheckUrl, {}).then((response) => {
      if (response.data) {
        // todo: 스윗 얼럿으로 교체
        swal('잠깐!', '이미 가입된 이메일입니다.', 'error');
        setEmailCheck(false);
        // errorAlert('이미 가입된 이메일입니다.');
        setEmail('');
        return emailcheck;
      } else {
        // todo: 스윗 얼럿으로 교체
        swal('통과!', '사용 가능한 이메일입니다.', 'success');
        setEmailCheck(true);
        setEmail.disabled();
      }
    });
  };

  const nickNamecheck = () => {
    const nicknameCheckUrl = `/user-nickname/${nickname}`;
    // const nickNamecheckUrl = '/user-email/' + email;

    axios.get(nicknameCheckUrl, {}).then((response) => {
      if (response.data) {
        swal('잠깐!', '이미 사용중인 닉네임입니다.', 'error');
        setNicknameCheck(false);
        setNickname('');
        return nickNamecheck;
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
      .post('/user', {
        userName: username,
        userEmail: email,
        userBirth: birth,
        userNickname: nickname,
        userPassword: Password,
        userTel: Phone,
      })
      .then((response) => {
        // 성공
        if (response.data) {
          swal('성공!', username + '님 캠프미 회원이 되신것을 축하드립니다.😎', 'success');
          navigate('/login');
        } else {
          swal('잠깐!', '회원가입 실패..', 'error');
          setIsClick(false);
        }
      })
      .catch((error) => {
        swal('잠깐!', '정보를 다시확인해주세요.😥', 'error');
        setIsClick(false);
      });
  };

  const onusernameHandler = (event) => {
    setUsername(event.currentTarget.value);
  };
  const onemailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onnicknameHandler = (event) => {
    setNickname(event.currentTarget.value);
  };
  const onbirthHandler = (event) => {
    setBirth(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setContirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      swal('실패!', '비밀번호가 확인부분과 다릅니다.', 'error');
      // todo: 스윗얼럿으로 교체
      return false;
    }
    if (!isEmailCheck || !isNicknameCheck) {
      warnAlert('중복확인을 진행해주세요.');
      return false;
    }
    if (!emailcheck) {
      swal('잠깐!', '이미 가입된 이메일입니다.', 'error');
      return false;
    }
    // register();
  };

  const handlePress = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneValue(e.target.value);
    }
  };

  useEffect(() => {
    if (Phone.length === 10) {
      setPhoneValue(Phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (Phone.length === 13) {
      setPhoneValue(Phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [Phone]);
  return (
    <div className="App">
      <div className="container">
        <div className="JoinSection">
          <h2>회원가입</h2>
          <div className="JoinBox">
            <form className="Joinform" onSubmit={onSubmitHandler}>
              <label>이름</label>
              <input type="name" name="name" placeholder="이름을 입력해주세요." value={username} onChange={onusernameHandler} required />
              <label>이메일</label>
              {isEmailCheck === true ? (
                <input type="email" name="email" placeholder="test@email.com" value={email} onChange={onemailHandler} required readOnly />
              ) : (
                <input type="email" name="email" placeholder="test@email.com" value={email} onChange={onemailHandler} required />
              )}
              <button type="button" onClick={emailcheck}>
                중복확인
              </button>
              <label>생년월일</label>
              <input type="date" name="birth" onChange={onbirthHandler} required />
              <label>비밀번호</label>
              <input type="password" placeholder="비밀번호를 입력해주세요." value={Password} onChange={onPasswordHandler} required />
              <label>비밀번호 확인</label>
              <input type="password" placeholder="다시한번 입력해주세요." value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
              <label>닉네임</label>
              {isNicknameCheck === true ? (
                <input
                  type="text"
                  placeholder="활동 닉네임을 입력해주세요."
                  value={nickname}
                  name="nickname"
                  onChange={onnicknameHandler}
                  required
                  readOnly
                />
              ) : (
                <input type="text" placeholder="활동 닉네임을 입력해주세요." value={nickname} name="nickname" onChange={onnicknameHandler} required />
              )}
              <button type="button" onClick={nickNamecheck}>
                중복확인
              </button>
              <label>핸드폰번호</label>
              <input type="text" placeholder="'ㅡ'은 자동으로 입력됩니다." onChange={handlePress} value={Phone} name="phonenum" required />
              <button type="submit" onClick={register}>
                제출하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
