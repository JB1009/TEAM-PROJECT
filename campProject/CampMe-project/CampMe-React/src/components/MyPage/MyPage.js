import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import '../MyPage/MyPage.css';
import axios from 'axios';

const MyPage = () => {
  const [nowPassword, setNowPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [isNicknameCheck, setNicknameCheck] = useState(false);
  const [isPasswordCheck, setPasswordCheck] = useState(false);
  const [privacy, setPrivacy] = useState({
    userNumber: localStorage.getItem('userId'),
    userName: '',
    userEmail: '',
    userBirth: '',
    userPassword: '',
    userNickname: '',
    userTel: '',
    userPoint: '',
  });

  const { userNumber, userName, userEmail, userBirth, userPassword, userNickname, userTel, userPoint } = privacy;

  const navigate = useNavigate();

  const noNewPassword = () => {
    privacy.userPassword = nowPassword;
    axios
      .put('/user', privacy)
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
      .put('/user', privacy)
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
    if (privacy.userPassword !== ConfirmPassword) {
      swal('실패!', '비밀번호가 확인부분과 다릅니다.', 'error');
      return false;
    }
    if (privacy.userPassword === nowPassword) {
      swal('실패!', '현재 사용중인 비밀번호입니다.', 'error');
      return false;
    }
    if (privacy.userPassword === '') {
      noNewPassword();
      swal('성공!', privacy.userNickname + '님 정보가 수정되었으니 다시 로그인해주세요.😎', 'success');
      localStorage.clear();
      navigate('/login');
    } else {
      newPassword();
      swal('성공!', privacy.userNickname + '님 정보가 수정되었으니 다시 로그인해주세요.😎', 'success');
      localStorage.clear();
      navigate('/login');
    }
  };

  const PasswordCheck = () => {
    axios
      .post('/user/check', {
        userNumber: localStorage.getItem('userId'),
        userPassword: nowPassword,
      })
      .then((response) => {
        if (!response.data) {
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
    const nicknameCheckUrl = `/user-nickname/${privacy.userNickname}`;

    axios.get(nicknameCheckUrl, {}).then((response) => {
      if (response.data) {
        swal('잠깐!', '이미 사용중인 닉네임입니다.', 'error');
        setNicknameCheck(false);
        setPrivacy({ ...privacy, userNickname: '' });
      } else {
        swal('통과!', '사용 가능한 닉네임입니다.', 'success');
        setNicknameCheck(true);
      }
    });
  };

  const onChange = (e) => {
    setPrivacy({ ...privacy, [e.target.name]: e.target.value });
  };
  const onNowPasswordHandler = (event) => {
    setNowPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const userDelete = () => {
    if (!isPasswordCheck) {
      swal('실패!', '현재 비밀번호 확인을 먼저 진행해주세요.', 'error');
      return;
    }
    axios.delete('/user/' + privacy.userNumber).then((response) => {
      swal('헐..!', '언젠간 다시 만날 수 있겠죠..😥', 'success');
      localStorage.clear();
      navigate('/');
    });
  };

  useEffect(() => {
    axios.get('/user/' + localStorage.getItem('userId')).then((response) => {
      setPrivacy(response.data);
    });
    if (userTel.length === 11) {
      setPrivacy({ ...privacy, userTel: userTel.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') });
    } else if (userTel.length === 13) {
      setPrivacy({ ...privacy, userTel: userTel.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') });
    }
  }, [userTel]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!isPasswordCheck) {
      swal('잠깐!', '현재 비밀번호를 먼저 확인해주세요😥', 'error');
      return false;
    }
    if (privacy.userPassword !== ConfirmPassword) {
      swal('실패!', '비밀번호가 확인부분과 다릅니다.', 'error');
      setPrivacy({ ...privacy, userPassword: '' });
      setConfirmPassword('');
      return false;
    }
    if (!isPasswordCheck) {
      swal('실패!', '현재 비밀번호 확인을 먼저 진행해주세요.', 'error');
      return false;
    }
    if (privacy.userPassword === nowPassword) {
      swal('실패!', '현재 비밀번호 사용중인 비밀번호입니다.', 'error');
      setPrivacy({ ...privacy, userPassword: '' });
      setConfirmPassword('');
      return false;
    } else {
      swal('성공!', privacy.userNickname + '님 정보가 수정되었으니 다시 로그인해주세요.😎', 'success');
      localStorage.clear();
      navigate('/login');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="MyPageSection">
          <div className="MyPageBox">
            <h2>개인정보수정</h2>
            <form className="MyPageform" onSubmit={onSubmitHandler}>
              <label>이름</label>
              <input type="name" name="userName" placeholder="이름을 입력해주세요." value={userName} onChange={onChange} required readOnly />
              <label>이메일</label>
              <input type="email" name="email" placeholder="test@email.com" value={userEmail} onChange={onChange} required readOnly />
              <label>생년월일</label>
              <input type="date" name="birth" value={userBirth} onChange={onChange} required readOnly />
              <label>현재 비밀번호</label>
              {isPasswordCheck === true ? (
                <input
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
              <button type="button" onClick={PasswordCheck}>
                현재 비밀번호 확인
              </button>
              <label>변경할 비밀번호</label>
              <input
                type="password"
                name="userPassword"
                placeholder="변경할 비밀번호를 입력해주세요."
                value={userPassword}
                onChange={onChange}
                required
              />
              <label>비밀번호 확인</label>
              <input type="password" placeholder="다시한번 입력해주세요." value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
              <label>닉네임</label>
              {isNicknameCheck === true ? (
                <input
                  maxLength={6}
                  type="text"
                  placeholder="변경할 닉네임을 입력해주세요.(6자이내)"
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
                  placeholder="변경할 닉네임을 입력해주세요.(6자이내)"
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
              <input type="text" placeholder="'ㅡ'은 자동으로 입력됩니다." onChange={onChange} value={userTel} name="phonenum" required />
              <div className="MyPageButton">
                <button type="submit" onClick={update} className="updatebutton">
                  수정하기
                </button>
              </div>
              <div className="MyPageOut">
                <span type="button" onClick={userDelete}>
                  회원탈퇴
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
