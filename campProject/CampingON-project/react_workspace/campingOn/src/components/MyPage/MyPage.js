import React, { useState } from 'react';
import '../../common/init.css';
import '../../common/sizes.css';
import '../../App.css';
import './MyPage.css';
import modifyIcon from '../../images/modifyIcon.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Mynotification from '../MyNotification/Mynotification';
import Login from '../Login/Login';
import axios from 'axios';
import swal from 'sweetalert';
import MyPageCompany from './MyPageCompany';
function MyPage() {
  const Logincheck = localStorage.getItem('isLogin', true);
  const [isLogin, setLogin] = useState(false);
  const [userNickname, setUserNickname] = useState('');
  const [userGrade, setuserGrade] = useState(1);
  const navigate = useNavigate();
  axios.get('/user/' + localStorage.getItem('userId')).then((response) => {
    setUserNickname(response.data.userNickname);
    setuserGrade(response.data.userGrade);
  });

  const logout = () => {
    localStorage.clear();
    swal('벌써가?', '또 올거지..?😥', 'info');
    navigate('/');
    setLogin(false);
  };

  return (
    <div className="wrapMypageDeskFlex">
      <div className="wholeWrapMyPage">
        {Logincheck ? (
          <div className="mainMyPage">
            <h2 className="titleFontMyPage">My Page</h2>
            <div className="imageCircle"></div>
            <div className="infoTitleMyPage">
              <h2>{userNickname}</h2>
              <Link to="/modifymyinformation">
                <img className="modifyIconMyPage" src={modifyIcon} alt="수정아이콘"></img>
              </Link>
            </div>
          </div>
        ) : (
          <div className="mainMyPage">
            <h2 className="titleFontMyPage">My Page</h2>
            <div className="buttonWrapMyPage">
              <Login></Login>
            </div>
          </div>
        )}
        {userGrade === 2 ? (
          <MyPageCompany />
        ) : (
          <div className="wrapBoxMyPage">
            <div className="flexBoxMyPage">
              <Link to="/myreservation">
                <div className="smallImgBoxMyPage">내 예약</div>
              </Link>
              <Link to="/campinghistory">
                <div className="smallImgBoxMyPage">캠핑기록</div>
              </Link>
              <Link to="/likecamping">
                <div className="smallImgBoxMyPage">
                  <p className="spacingMyPage">
                    찜한 <br />
                    캠핑장
                  </p>
                </div>
              </Link>
            </div>
            <div className="flexBoxMyPage">
              <Link to="/mypoint">
                <div className="smallImgBoxMyPage">포인트</div>
              </Link>
              <Link to="/inquiryhistory">
                <div className="smallImgBoxMyPage">문의내역</div>
              </Link>
              <Link to="/modifymyinformation">
                <div className="smallImgBoxMyPage">
                  <p className="spacingMyPage">
                    내정보 <br />
                    수정
                  </p>
                </div>
              </Link>
            </div>
          </div>
        )}
        {Logincheck ? (
          <div className="logoutMyPage">
            <button className="logoutButton" onClick={logout}>
              로그아웃
            </button>
          </div>
        ) : (
          ''
        )}
      </div>

      <div className="notificationMypageWrap">
        <Mynotification></Mynotification>
      </div>
    </div>
  );
}

export default MyPage;
