import React, { useEffect } from 'react';
import { useState } from 'react';
import ShowMyReservation from './ShowMyReservation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import moment from 'moment';
const ListMyReservation = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let nowTime = moment().format('YYYY-MM-DD');
  const myReservations = () => {
    axios.get('/myReservation/' + localStorage.getItem('userId'), {}).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  };
  const MyBookingHandler = (e) => {
    navigate('/CheckedBooking', { state: e });
    console.log(e);
  };

  useEffect(myReservations, []);
  useEffect(() => {
    myReservations();
    setTimeout(() => {}, 700);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <table className="tableMyReservationList">
          <tr className=" titleMyReservation">
            <td colSpan={4}>예약현황</td>
          </tr>
          {data.map((v, i) => {
            return nowTime < v.reservationEndDay ? (
              <tr
                key={i}
                onClick={() => {
                  MyBookingHandler(v.reservationIndex);
                }}
              >
                <td>예약일</td>{' '}
                <td>
                  {v.reservationDate.split('-')[0].split('0')[1] + '/' + v.reservationDate.split('-')[1] + '/' + v.reservationDate.split('-')[2]}{' '}
                </td>
                <td>캠핑장명</td> <td>{v.campsite.campsiteName.split(' ')[0]}</td>
              </tr>
            ) : null;
          })}
        </table>
      )}
    </div>
  );
};
export default ListMyReservation;
