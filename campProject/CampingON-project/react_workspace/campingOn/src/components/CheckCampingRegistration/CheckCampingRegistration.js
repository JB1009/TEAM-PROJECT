import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './CheckCampingRegistration.css';
import Loading from '../Loading/Loading';
import CheckRegistrationList from './CheckRegistrationList';
const CheckCampingRegistration = () => {
  const [data, setData] = useState([]);
  const userNumber = localStorage.getItem('userId');
  const [isLoading, setIsLoading] = useState(true);
  const getRegistratedCamp = () => {
    axios
      .get('/campsite/camping/' + userNumber, {})
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(getRegistratedCamp, []);
  return (
    <div className="CheckCampingRegistrationPage">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="wholeWrapTitle">
            <h2 className="registrationTitle">캠핑장 등록 현황</h2>
          </div>
          <div>
            <CheckRegistrationList registrationList={data} />
            <div className="showRegistration">문의글보기</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckCampingRegistration;
