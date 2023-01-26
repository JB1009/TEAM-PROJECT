import React, { useState, useEffect } from 'react';
import './ModifyMyInformation.css';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ModifyMyInformation = () => {
  const [userNumber, setUserNumber] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [nickname, setNickname] = useState('');
  const [newNickname, setNewNickname] = useState('');
  const [userPoint, setUserPoint] = useState('');
  const [nowPassword, setNowPassword] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Phone, setPhoneValue] = useState('');
  const [isNicknameCheck, setNicknameCheck] = useState(false);
  const [isPasswordCheck, setPasswordCheck] = useState(false);

  const navigate = useNavigate();

  const noNewPassword = () => {
    axios
      .put('/user', {
        userNumber: localStorage.getItem('userId'),
        userName: username,
        userEmail: email,
        userBirth: birth,
        userPassword: nowPassword,
        userNickname: nickname,
        userTel: Phone,
        userPoint: userPoint,
      })
      .then((response) => {
        if (response.data) {
        } else {
          swal('잠깐!', '입력한 정보를 다시확인해주세요.😥', 'error');
        }
      })
      .catch((error) => {
        swal('잠깐!', '정보 수정실패..😥', 'error');
      });
  };

  const newPassword = () => {
    axios
      .put('/user', {
        userNumber: localStorage.getItem('userId'),
        userName: username,
        userEmail: email,
        userBirth: birth,
        userPassword: Password,
        userNickname: newNickname,
        userTel: Phone,
        userPoint: userPoint,
      })
      .then((response) => {
        if (response.data) {
        } else {
          swal('잠깐!', '입력한 정보를 다시확인해주세요.😥', 'error');
        }
      })
      .catch((error) => {
        swal('잠깐!', '정보 수정실패..😥', 'error');
      });
  };

  // 회원정보 제출
  const update = () => {
    if (!isPasswordCheck) {
      swal('실패!', '현재 비밀번호 확인을 먼저 진행해주세요.', 'error');
      return;
    }
    if (Password !== ConfirmPassword) {
      swal('실패!', '비밀번호가 확인부분과 다릅니다.', 'error');
      return false;
    }
    if (Password === nowPassword) {
      swal('실패!', '현재 사용중인 비밀번호입니다.', 'error');
      return false;
    }
    if (Password === '') {
      noNewPassword();
      swal('성공!', username + '님 정보가 수정되었으니 다시 로그인해주세요.😎', 'success');
      localStorage.clear();
      navigate('/login');
    } else {
      newPassword();
      swal('성공!', username + '님 정보가 수정되었으니 다시 로그인해주세요.😎', 'success');
      localStorage.clear();
      navigate('/login');
    }
  };

  const PasswordCheck = () => {
    axios.get('/user/' + localStorage.getItem('userId')).then((response) => {
      console.log(response.data.userPassword);
      if (response.data.userPassword !== nowPassword) {
        swal('잠깐!', '현재 비밀번호가 일치하지 않습니다!', 'error');
        setNowPassword('');
        setPasswordCheck(false);
      } else {
        swal('통과!', '현재 사용중인 비밀번호가 맞습니다!', 'success');
        setPasswordCheck(true);
      }
    });
  };

  const nickNamecheck = () => {
    const nicknameCheckUrl = `/user-nickname/${newNickname}`;

    axios.get(nicknameCheckUrl, {}).then((response) => {
      if (response.data) {
        swal('잠깐!', '이미 사용중인 닉네임입니다.', 'error');
        setNicknameCheck(false);
      } else {
        swal('통과!', '사용 가능한 닉네임입니다.', 'success');
        setNicknameCheck(true);
      }
    });
  };

  const onusernameHandler = (event) => {
    setUsername(event.currentTarget.value);
  };
  const onemailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onNewNicknameHandler = (event) => {
    setNewNickname(event.currentTarget.value);
  };
  const onbirthHandler = (event) => {
    setBirth(event.currentTarget.value);
  };
  const onNowPasswordHandler = (event) => {
    setNowPassword(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
    console.log('체인지 발동 : ' + Password);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const handlePress = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneValue(e.target.value);
    }
  };

  useEffect(() => {
    axios.get('/user/' + localStorage.getItem('userId')).then((response) => {
      setUserNumber(response.data.userNumber);
      setUsername(response.data.userName);
      setEmail(response.data.userEmail);
      setBirth(response.data.userBirth);
      setNickname(response.data.userNickname);
      setPhoneValue(response.data.userTel);
      setUserPoint(response.data.userPoint);
      // setPassword(response.data.userPassword);
    });
    if (Phone.length === 10) {
      setPhoneValue(Phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (Phone.length === 13) {
      setPhoneValue(Phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [Phone]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!isPasswordCheck) {
      swal('잠깐!', '현재 비밀번호를 먼저 확인해주세요😥', 'error');
      return false;
    }
    if (Password !== ConfirmPassword) {
      swal('실패!', '비밀번호가 확인부분과 다릅니다.', 'error');
      return false;
    }
    if (!isPasswordCheck) {
      swal('실패!', '현재 비밀번호 확인을 먼저 진행해주세요.', 'error');
      return false;
    }
    if (Password === nowPassword) {
      swal('실패!', '현재 비밀번호 사용중인 비밀번호입니다.', 'error');
      return false;
    } else {
      swal('성공!', nickname + '님 정보가 수정되었으니 다시 로그인해주세요.😎', 'success');
      localStorage.clear();
      navigate('/login');
    }
  };
  return (
    <div className="wholeWrapModifyMyInformation">
      <h1 className="titleFontModifyMyInformation">내정보 수정</h1>
      <div className="infoBoxModifyMyInformation">
        <div className="nameFontModifyMyInformation">{nickname} 님</div>
        <button className="buttonModifyMyInformation">사진수정</button>
      </div>
      <div className="passwordModifyMyInformation">
        <form className="passwordModifyMyInformationForm" onSubmit={onSubmitHandler}>
          <label>이름</label>
          <input
            className="nameModify"
            type="name"
            name="name"
            placeholder="이름을 입력해주세요."
            value={username}
            onChange={onusernameHandler}
            required
            readOnly
          />
          <label>이메일</label>
          <input
            className="emailModify"
            type="email"
            name="email"
            placeholder="test@email.com"
            value={email}
            onChange={onemailHandler}
            required
            readOnly
          />
          <label>생년월일</label>
          <input className="birthModify" type="date" name="birth" value={birth} onChange={onbirthHandler} required readOnly />
          <label>현재 비밀번호</label>
          {isPasswordCheck === true ? (
            <input
              className="passwordModify"
              type="password"
              placeholder="현재 비밀번호를 입력해주세요."
              value={nowPassword}
              onChange={onNowPasswordHandler}
              required
              readOnly
            />
          ) : (
            <input type="password" placeholder="현재 비밀번호를 입력해주세요." value={nowPassword} onChange={onNowPasswordHandler} required />
          )}
          <div className="passwordModifyMyInformationButtonBox">
            <button className="passwordModifyMyInformationButton" type="button" onClick={PasswordCheck}>
              현재 비밀번호 확인
            </button>
          </div>
          <label>변경할 비밀번호</label>
          <input
            className="passwordModify"
            type="password"
            placeholder="변경할 비밀번호를 입력해주세요."
            value={Password}
            onChange={onPasswordHandler}
            required
          />
          <label>변경할 비밀번호 확인</label>
          <input type="password" placeholder="다시한번 입력해주세요." value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
          <label>닉네임</label>
          {isNicknameCheck === true ? (
            <input
              className="nickNameModify"
              type="text"
              placeholder="변경할 닉네임을 입력해주세요."
              value={newNickname}
              name="nickname"
              onChange={onNewNicknameHandler}
              required
              readOnly
            />
          ) : (
            <input
              type="text"
              placeholder="변경할 닉네임을 입력해주세요."
              value={newNickname}
              name="nickname"
              onChange={onNewNicknameHandler}
              required
            />
          )}
          <div className="nickNameModifyMyInformationButtonBox">
            <button className="nickNameModifyMyInformationButton" type="button" onClick={nickNamecheck}>
              중복확인
            </button>
          </div>
          <label>핸드폰전화</label>
          <input
            className="cellphoneModify"
            type="text"
            placeholder="'ㅡ'은 자동으로 입력됩니다."
            onChange={handlePress}
            value={Phone}
            name="phonenum"
            required
          />
        </form>
      </div>

      <div className="membershipWithdrawal">
        <Link to="/withdrawal">
          <button className="membershipWithdrawalButton">회원탈퇴</button>
        </Link>
      </div>
      <div className="checkModifyMyInformation">
        <button className="modifyMyInformationButton" type="submit" onClick={update}>
          수정하기
        </button>
      </div>
    </div>
  );
};

export default ModifyMyInformation;
