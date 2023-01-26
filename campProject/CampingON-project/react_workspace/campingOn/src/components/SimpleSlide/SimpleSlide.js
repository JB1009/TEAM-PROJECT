import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Settings } from '../../common/settings';
import '../SimpleSlide/SimpleSlide.css';
import campingOnBanner from '../../images/campingOnBanner.png';
import campMeBanner from '../../images/campMeBanner.png';
import joinUsBanner from '../../images/joinUsBanner.png';
import festivalBanner from '../../images/festivalBanner.png';

const simpleslide = () => {
  return (
    <div className="main-slide">
      <div className="slide">
        <Slider {...Settings}>
          <div className="slideImgBox">
            <img src={campingOnBanner} alt="배너1"></img>
          </div>
          <div className="slideImgBox">
            <img src={campMeBanner} alt="배너2"></img>
          </div>
          <div className="slideImgBox">
            <Link to="/recommend">
              <img src={festivalBanner} alt="배너3"></img>
            </Link>
          </div>
          <div className="slideImgBox">
            <Link to="/join">
              <img src={joinUsBanner} alt="배너4"></img>
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default simpleslide;
