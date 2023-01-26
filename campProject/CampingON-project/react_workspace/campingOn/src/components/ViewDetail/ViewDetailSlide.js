import React, { useEffect,useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Settings } from '../../common/settings';
// import '../SimpleSlide/SimpleSlide.css';
import axios from 'axios';

const ViewDetailSlide = () => {
  const campsiteIndex = window.location.pathname.split('/')[2];
  const [data, setData] = useState([]);
  const getcampsiteImg = () => {
    axios.get('/campsite/image/' + campsiteIndex, {}).then((response) => {
      console.log(response);
      setData(response.data)
    });
  };
  useEffect(getcampsiteImg, []);
  return (
    <div className="main-slide">
      <div className="slide">
        <Slider {...Settings}>
          {data.map((v,i)=>{
            return(
              <div className="slideImgBox" key={i}><img src={v.imageName} alt="배너1"/></div>
          )
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ViewDetailSlide;
