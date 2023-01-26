import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import './ReservationManagement.css';

const ReservationManagement = () => {
  const [campsiteData, setcampsiteData] = useState([]);
  const userNumber = localStorage.getItem('userId');
  const [isLoading, setIsLoading] = useState(true);

  const getRegistratedCamp = async () => {
    await axios
      .get('/campsite/camping/' + userNumber, {})
      .then((response) => {
        setcampsiteData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showCamp = async (e) => {
    let campId = e.target.id;
    let tableHtml = '';
    await axios.get('/reservation/camping/' + campId, {}).then((response) => {
      if (response.data.length > 0) {
        tableHtml =
          "<table className='subscriberTable'><tr><td>예약날짜</td> <td>" +
          response.data[0].reservationDate +
          '</td><td>예약번호</td> <td>' +
          response.data[0].reservationIndex +
          "</td></tr><tr><td colSpan='1'>이용자</td><td colSpan='3'>" +
          response.data[0].user.userName +
          '<br/>' +
          response.data[0].user.userTel +
          '</td></tr></table>';
        e.target.nextSibling.innerHTML = tableHtml; //클릭한 캠핑 예약 나오게
      }
    });
  };

  useEffect(() => {
    getRegistratedCamp();
  }, []);

  return (
    <div className="CheckCampingRegistrationPage">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="wholeWrapTitle">
            <h2 className="registrationTitle">캠핑장 예약 관리</h2>
          </div>
          {campsiteData.map((campsiteData) => {
            return (
              <div key={campsiteData.campsiteIndex}>
                <div className="showCampName" id={campsiteData.campsiteIndex} onClick={showCamp}>
                  {campsiteData.campsiteName}
                </div>
                <div id={'table' + campsiteData.campsiteIndex}></div>
              </div>
            );
          })}
          <div>
            <h2 className="registrationTitle">수익현황</h2>
            <table>
              <tr>
                <td>예약수</td>
                <td>{campsiteData.length}건</td>
              </tr>
              <tr>
                <td>수익금</td>
                <td>200000 원</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationManagement;
