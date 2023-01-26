import React, { useEffect } from 'react';
import './Mynotification.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';

const Mynotification = () => {
  const [data, setData] = useState([]);
  const nowTime = moment().format('YYYY-MM-DD');
  const DATE = [];
  DATE.push(nowTime.split('-'));
  let D_DAY = '';

  const myReservations = () => {
    axios.get('/myReservation/' + localStorage.getItem('userId'), {}).then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        if (
          parseInt(response.data[i].reservationStartDay.split('-')[0]) == parseInt(DATE[0][0]) &&
          parseInt(response.data[i].reservationStartDay.split('-')[1]) == parseInt(DATE[0][1]) &&
          parseInt(response.data[i].reservationStartDay.split('-')[2]) - parseInt(DATE[0][2]) == 1
        ) {
          response.data[i].reservationStartDay += ' 내일';
        }
      }
      setData(response.data);
    });
  };
  useEffect(myReservations, []);

  return (
    <div className="notificationWrap">
      <div className="notificationTitle">알림</div>
      {data.map((v, i) => {
        return nowTime < v.reservationEndDay ? (
          <div className="notificationInfo" key={i}>
            <div>{v.reservationDate} 일자로 예약 완료되었습니다.</div>
            <div>{v.reservationStartDay} 입실입니다.</div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Mynotification;
