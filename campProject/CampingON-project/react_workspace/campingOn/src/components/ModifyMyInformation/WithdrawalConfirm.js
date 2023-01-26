import React, { useState, useEffect } from 'react';
import './ModifyMyInformation.css';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const WithdrawalConfirm = (props) => {
  const { onClose } = props;

  const [nickname, setNickname] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [PasswordCheck, setPasswordCheck] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/user/' + localStorage.getItem('userId'), {}).then((response) => {
      setPasswordCheck(response.data.userPassword);
    });
  });

  const userDelete = () => {
    if (Password !== PasswordCheck) {
      swal('비밀번호를 다시 확인해주세요!');
      return false;
    }
    axios.delete('/user/' + localStorage.getItem('userId'), {}).then((response) => {
      swal('헐..!', '언젠간 다시 만날 수 있겠죠..😥', 'success');
      console.log(response);
      localStorage.clear();
      navigate('/');
    });
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  useEffect(() => {
    axios.get('/user/' + localStorage.getItem('userId')).then((response) => {
      setNickname(response.data.userNickname);
    });
  });

  return (
    <div className="withdrawalConfirmPage">
      <div className="withdrawalConfirm">
        <div className="nameFontWithdrawalPopup">
          {nickname} 님
          <button
            onClick={() => {
              onClose(false);
            }}
          >
            X
          </button>
        </div>
        <p className="withdrawalConfirmPageText">
          탈퇴 후에는 이메일로 다시 가입할 수 없으며 아이디와 데이터는 복구할 수 없습니다. <br />
          서비스에 남아 있는 게시글은 탈퇴 후 삭제할 수 없습니다. <br />
          또한, 캠핑온 이메일을 사용해 캠프미에 로그인 할 수 없게 됩니다. 동의하신다면 비밀번호를 입력해주세요. <br />
          비밀번호를 입력해주시면 탈퇴가 진행됩니다.
        </p>
        <div className="withdrawalConfirmPageText">
          <p className="withrawalInfoTitle">비밀번호 확인</p>{' '}
          <input className="withdrawalConfirmInput" type="password" onChange={onPasswordHandler}></input>
        </div>
        <div className="checkModifyMyInformation">
          <button className="modifyMyInformationButton" type="button" onClick={userDelete}>
            탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalConfirm;
