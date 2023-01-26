import React, { useEffect } from 'react';
import './MyReservation.css';
import { useState } from 'react';
import ListMyReservation from './ListMyReservation';
import CancelListMyReservation from './CanceListlMyReservation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
const MyReservation = () => {
  let [ShowListMyReservation, ListMyReservationset] = useState(false);
  let [cnt, setCnt] = useState(0);
  let nowTime = moment().format('YYYY-MM-DD');
  let ReservationCnt = 0;
  const myReservations = () => {
    axios.get('/myReservation/' + localStorage.getItem('userId'), {}).then((response) => {
      setCnt(response.data.length);
      for (let i = 0; i < response.data.length; i++) {
        if (nowTime < response.data[i].reservationEndDay) {
          ReservationCnt++;
          setCnt(ReservationCnt);
        }
      }
    });
  };
  useEffect(myReservations, []);

  return (
    <div className="wholeWrapMyReservation">
      <h1 className="titleFontMyReservation">내 예약</h1>
      <div className="menuBarMyReservation">
        <div
          onClick={() => {
            ListMyReservationset(false);
          }}
        >
          예약현황({cnt})
        </div>
      </div>
      <div>{ShowListMyReservation === true ? <CancelListMyReservation /> : <ListMyReservation />}</div>
    </div>
  );
};

export default MyReservation;
