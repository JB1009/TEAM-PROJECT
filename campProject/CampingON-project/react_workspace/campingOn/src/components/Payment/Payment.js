import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import './Payment.css';
import { useLocation } from 'react-router';
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Payment = () => {
  const { state } = useLocation();
  const { reservationStartDay, reservationEndDay, userName, userTel, reservationMemo, bookingRoom, campsiteName, campsitePrice, campsiteIdx } = state;
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);
  const [checkPayment, setCheckPayment] = useState(false);
  const [showsPage, setShowsPage] = useState(false);
  const navigate = useNavigate();

  const [priceSum, setTotalPrice] = useState(0); //최종 예약 가격
  const totalPrice = priceSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const [paymentType, setPaymentType] = useState('');

  const GetClick = (e) => {
    setPaymentType(e.target.innerText);
    setCurrentClick(e.target.id);
  };

  //결제하기 버튼
  const handlerPaymentButton = async () => {
    checkPayment ? setShowsPage(true) : swal('잠깐', '결제유형을 선택해주세요.', 'error');
    if (checkPayment) {
      //reservation insert
      const reservationData = {
        reservationStartDay: reservationStartDay,
        reservationEndDay: reservationEndDay,
        reservationMemo: reservationMemo,
        campsite: {
          campsiteIndex: campsiteIdx,
        },
        user: {
          userNumber: localStorage.getItem('userId'),
        },
      };
      await axios
        .post('/reservation', reservationData)
        .then((response) => {
          let reservationIdx = response.data.reservationIndex;
          const paymentData = {
            paymentType: paymentType,
            paymentPrice: campsitePrice,
            reservation: {
              reservationIndex: reservationIdx,
            },
          };
          for (let i = 0; i < bookingRoom; i++) {
            axios
              .post('/payment', paymentData)
              .then((response) => {
                if (response.status === 200) {
                  swal('결제완료', '결제가 완료되었습니다.', 'success').then((result) => {
                    if (result) {
                      navigate('/checkedbooking', { state: reservationIdx });
                    }
                  });
                }
              })
              .catch((error) => {
                swal('오류', '결제 시스템 서버 오류.', 'error');
              });
          }
        })
        .catch((error) => {
          swal('오류', '결제 시스템 서버 오류.', 'error');
        });
    }
  };

  useEffect(() => {
    let totalMoney = bookingRoom * campsitePrice;
    setTotalPrice(totalMoney);
  }, []);

  useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.style.background = 'var(--secondary-color)';
        current.style.border = 'none';
        setCheckPayment(true);
      }
      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.background = 'white';
        prev.style.border = '1px solid grey';
      }
      setPrevClick(currentClick);
    },
    [currentClick],
  );

  return (
    <div className="wholeWrapMyReservation">
      <div className="titlePayment">상품정보</div>
      <div className="productInfoPayment">
        <div className="productNamePayment">{campsiteName}</div>
        <div className="rowFlexBox">
          <label className="researchShortName">출발</label>
          <input className="startDate date paymentDate" type="date" value={reservationStartDay} readOnly />
          <label className="researchShortName">도착</label>
          <input className="endDate date paymentDate" type="date" value={reservationEndDay} readOnly />
        </div>
      </div>
      <div className="titlePayment">예약자 정보</div>
      <div className="bookingInfoPayment">
        <table className="bookingTablePayment">
          <tbody>
            <tr>
              <td className="tableTitlePayment">이름</td>
              <td>{userName}</td>
            </tr>
            <tr>
              <td className="tableTitlePayment">연락처</td>
              <td>{userTel}</td>
            </tr>
            <tr>
              <td className="tableTitlePayment">요청사항</td>
              <td>{reservationMemo}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="titlePayment">결제 금액</div>
      <div className="amountPayment">
        <div className="amountTitlePayment">객실요금</div>
        <div className="amountTableBoxPayment">
          <table className="amountTablePayment">
            <tr>
              <td>{bookingRoom} 개</td>
              <td>{totalPrice} 원</td>
            </tr>
            <tr>
              <td>온라인 결제금액</td>
              <td>{totalPrice} 원</td>
            </tr>
            <tr>
              <td>총 결제금액</td>
              <td>{totalPrice} 원</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="titlePayment">결제 방법</div>
      <div className="paymentOption">
        <div className="simplicityPayment">
          <div className="subTitlePayment">간편결제</div>
          <div className="paymentBox">
            <div id="case1" onClick={GetClick} className="clickPayment">
              네이버페이
            </div>
            <div id="case2" onClick={GetClick} className="clickPayment">
              토스
            </div>
            <div id="case3" onClick={GetClick} className="clickPayment">
              카카오페이
            </div>
            <div id="case4" onClick={GetClick} className="clickPayment">
              페이코
            </div>
            <div id="case5" onClick={GetClick} className="clickPayment">
              스마일페이
            </div>
          </div>
        </div>
        <div className="commonPayment">
          <div className="subTitlePayment">일반결제</div>
          <div className="paymentBox">
            <div id="case6" onClick={GetClick} className="clickPayment">
              신용카드
            </div>
            <div id="case7" onClick={GetClick} className="clickPayment">
              계좌이체
            </div>
          </div>
        </div>
        <div className="onSitePayment">
          <div className="subTitlePayment">현장결제</div>
          <div className="paymentBox">
            <div id="case8" onClick={GetClick} className="clickPayment">
              신용카드
            </div>
            <div id="case9" onClick={GetClick} className="clickPayment">
              현금
            </div>
          </div>
        </div>
      </div>
      <div className="buttonBoxPayment">
        <button className="buttonPayment" onClick={handlerPaymentButton}>
          결제하기
        </button>
      </div>
      {/* {showsPage ? <Loading /> : null} */}
    </div>
  );
};

export default Payment;
