import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './CheckedBooking.css';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';

const CheckedBooking = () => {
  const [userNickname, setUserNickname] = useState('');
  const [reservationDate, setreservationDate] = useState('');
  const [reservationStartDay, setReservationStartDay] = useState('');
  const [reservationEndDay, setReservationEndDay] = useState('');
  const [userTel, setUserTel] = useState('');
  const [campName, setCampName] = useState('');
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();
  const navigate = useNavigate();

  axios.get('/user/' + localStorage.getItem('userId')).then((response) => {
    setUserNickname(response.data.userNickname);
    setUserTel(response.data.userTel);
  });

  const callMyReservaiton = () => {
    axios.get('/reservation/' + state).then((response) => {
      console.log(response.data);
      setReservationStartDay(response.data.reservationStartDay);
      setReservationEndDay(response.data.reservationEndDay);
      setCampName(response.data.campsite.campsiteName);
      setreservationDate(response.data.reservationDate);

      setLoading(false);
    });
  };

  useEffect(() => {
    callMyReservaiton();
    setTimeout(() => {}, 700);
  }, []);

  function showReservationList() {
    navigate('/myreservation');
  }
  function showAnotherCamping() {
    navigate('/');
  }

  return (
    <div className="wrapCheckedBookingDeskFlex">
      {/* <div className="myPageCheckedBookingWrap">
        <MyPageMedia></MyPageMedia>
      </div> */}

      <div className="wrapCheckedBooking">
        <div className="messageCheckedBooking">
          <div className="titleCheckedBooking">{userNickname}님</div>
          <div className="textCheckedBooking">{reservationDate} 일자로 예약이 완료되었습니다!</div>
        </div>
        {/* {loading ? (
        <Loading />
      ) : ( */}
        <div className="infoCheckedBooking">
          <div className="infoTitleCheckedBooking">예약정보</div>
          <table className="infoTableCheckedBooking">
            <tr>
              <td>예약번호</td> <td>{state}</td>
            </tr>
            <tr>
              <td>일정</td>{' '}
              <td>
                {reservationStartDay} <br></br>~ {reservationEndDay}
              </td>
            </tr>
            <tr>
              <td>캠핑장</td> <td>{campName}</td>
            </tr>
          </table>
        </div>
        {/* // )} */}

        <div className="infoCheckedBooking">
          <div className="infoTitleCheckedBooking">이용자 정보</div>
          <table className="infoTableCheckedBooking">
            <tr>
              <td>예약자</td>
              <td>{userNickname}</td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>{userTel}</td>
            </tr>
          </table>
        </div>
        <div className="rowFlexCheckedBooking">
          <button className="showAnotherPage" onClick={showReservationList}>
            예약목록 가기
          </button>
          <button className="showAnotherPage" onClick={showAnotherCamping}>
            다른 캠핑 둘러보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckedBooking;
