import React, { useEffect, useState, useRef } from 'react';
import './Booking.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import swal from 'sweetalert';
import axios from 'axios';

const Booking = () => {
  const [userName, setUsername] = useState();
  const [Phone, setPhoneValue] = useState('');
  const { state } = useLocation();
  const { campsiteName, campsitePrice, campsiteIdx } = state;
  const bookingRoomCnt = useRef(); //객실수

  const [values, setValues] = useState({
    reservationStartDay: '',
    reservationEndDay: '',
    userName: '',
    userTel: '',
    reservationMemo: '',
    bookingRoom: 0,
    campsiteName: '',
    campsitePrice: campsitePrice,
    campsiteIdx: campsiteIdx,
  }); //전체 예약정보 담는 변수

  // 예약하기 버튼
  function showPayment() {
    values.bookingRoom = bookingRoomCnt.current.value;
    values.userName = userName;
    values.userTel = Phone;
    values.campsiteName = campsiteName;
    navigate('/payment', { state: values });
  }
  //체크박스 여부
  const [agreebox, setAgreebox] = useState(false);

  // 예약객실수 체크
  const [bookingRooms, setBookingRooms] = useState(1);
  const navigate = useNavigate();
  const onClinkMinustBookingRooms = (e) => {
    e.preventDefault();
    bookingRooms > 1 ? setBookingRooms(bookingRooms - 1) : setBookingRooms(1);
  };
  const onClinkPlustBookingRooms = (e) => {
    e.preventDefault();
    setBookingRooms(bookingRooms + 1);
  };

  // 배열
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (name === 'userName') {
      setUsername(e.target.value);
    }
    if (name === 'userTel') {
      const regex = /^[0-9\b -]{0,13}$/;
      if (regex.test(e.target.value)) {
        setPhoneValue(e.target.value);
      }
    }
  };

  useEffect(() => {
    axios.get('/user/' + localStorage.getItem('userId')).then((response) => {
      setUsername(response.data.userName);
      setPhoneValue(response.data.userTel);
    });
  }, []);

  useEffect(() => {
    if (Phone.length === 10) {
      setPhoneValue(Phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (Phone.length === 13) {
      setPhoneValue(Phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [Phone]);

  return (
    <div className="wholeWrapMyReservation">
      <div className="titlePayment">상품정보</div>
      <div className="productInfoPayment">
        <div className="productNamePayment">{campsiteName}</div>
        <div className="rowFlexBox rowFlexBoxBooking">
          <label className="researchShortName">출발</label>
          <input className="startDate date" name="reservationStartDay" type="date" onChange={onChange}></input>
          <label className="researchShortName">도착</label>
          <input className="endDate date" name="reservationEndDay" type="date" onChange={onChange}></input>
        </div>
        <div className="productNamePayment">예약객실수</div>
        <div className="bookingRoomsBox">
          <div className="rowFlexBoxBookingRoom">
            <label className="researchShortName">객실수</label>
            <button className="peopleHandlerButton" onClick={onClinkMinustBookingRooms}>
              -
            </button>
            <input className="peopleResearchInput" name="bookingRoom" type="number" ref={bookingRoomCnt} value={bookingRooms}></input>
            <button className="peopleHandlerButton" onClick={onClinkPlustBookingRooms}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="titlePayment">예약자 정보</div>
      <div className="peopleInfoBooking">
        <div className="peopleInfoBox">
          <label className="bookingLabel">이름</label>
          <input
            className="bookingInput"
            name="userName"
            value={userName}
            type="text"
            placeholder="이름을 입력하세요."
            onChange={onChange}
            required
          ></input>
        </div>
        <div className="peopleInfoBox">
          <label className="bookingLabel">휴대폰번호</label>
          <input
            className="bookingInput"
            name="userTel"
            value={Phone}
            type="text"
            placeholder="'ㅡ'은 자동으로 입력됩니다."
            onChange={onChange}
            required
          ></input>
        </div>

        <div className="peopleInfoBox">
          <label className="bookingLabel">요청사항</label>
          <textarea className="bookingInput bookingTextArea" name="reservationMemo" placeholder="여기에 입력하세요." onChange={onChange}></textarea>
        </div>
      </div>
      <div className="bookingAgreeBox">
        <div className="bookingCheckBox">
          <input className="checkBoxBorder" type="checkbox" onClick={() => setAgreebox(!agreebox)} />
          약관 동의(필수)
        </div>
      </div>
      <div className="buttonBoxPayment">
        <button className="buttonPayment" onClick={() => (agreebox ? showPayment() : swal('잠깐', '동의항목에 동의해주세요🙏🙏🙏', 'error'))}>
          예약하기
        </button>
      </div>
    </div>
  );
};

export default Booking;
