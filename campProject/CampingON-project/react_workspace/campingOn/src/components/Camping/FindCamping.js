import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CampingList from './CampingList';
import { useRecoilState } from 'recoil';
const FindCamping = () => {
  const [campings, setCampings] = useState([]);
  // const [type, setType] = useRecoilState(searchLocal);
  const type = window.location.pathname.split('/')[2];
  console.log(type);
  
  const campsiteFindByType = () => {
    axios
      .get('/campsite/type/' + type)
      .then((response) => {
        setCampings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const campsiteFindByLocal = () => {
    axios
    .get('/campsite/local/' + type).then((response) => {
      console.log(response);
      return setCampings(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect( type === "camping" || type === "caravan" || type === "glamping" || type === "carping" ? campsiteFindByType : campsiteFindByLocal ,[])
    
  return <CampingList camping={ campings } />;
};

export default FindCamping;
