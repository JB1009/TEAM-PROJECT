import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Settings } from '../../common/settings';
import '../SimpleSlide/SimpleSlide.css';
import campMe from '../images/campMeBanner.png';
import campingOn from '../images/campingOnBanner.png';
import festival from '../images/festivalBanner.png';
import joinUs from '../images/joinUsBanner.png';

const simpleslide = () => {
  return (
    <div className="main-slide">
      <div className="slide">
        <Slider {...Settings}>
          <div className="slideImg">
            <img src={campMe} />
          </div>
          <div className="slideImg">
            <img src={campingOn} />
          </div>
          <div className="slideImg">
            <img src={festival} />
          </div>
          <div className="slideImg">
            <img src={joinUs} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default simpleslide;
