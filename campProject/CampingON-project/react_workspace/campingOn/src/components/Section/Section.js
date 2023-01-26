import React, { useState } from 'react';
import './Section.css';
import { Link, useNavigate, Route, Routes } from 'react-router-dom';
import SimpleSlide from '../SimpleSlide/SimpleSlide';
import { useRecoilState } from 'recoil';
import { searchLocal } from '../../state/atoms';
import Camping from '../Camping/Camping';
import campingIcon from '../../images/campingIcon.png';
import caravanIcon from '../../images/caravanIcon.png';
import carpingIcon from '../../images/carpingIcon.png';
import glampingIcon from '../../images/glampingIcon.png';
import recommendAll from '../../images/recomendAll.jpg';
import recommendseoul from '../../images/recomendSeoul.jpg';
import recommendjeju from '../../images/recomendJeju.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faMapLocation, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionMap from './SectionMap';
import axios from 'axios';
import { useEffect } from 'react';

const Section = () => {
  const [local, setLocal] = useRecoilState(searchLocal);
  const [campingType, setCampingType] = useState('');
  const navigate = useNavigate();

  //타입별 찾기
  const getType = (e) => {
    navigate('/camping/' + e);
  };

  // 지역별 찾기
  const getLocal = (e) => {
    navigate('/location/' + e);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="flexMap">
      <div className="section ">
        <div className="mainSlide">
          <SimpleSlide />
        </div>
        <div className="mainNavMenuWrap">
          <div className="mainNavMenuFlex">
            <div className="openCamping" onClick={() => getType('camping')}>
              <img src={campingIcon} alt="캠핑아이콘" />
              캠핑
            </div>
            <div className="openCamping" onClick={() => getType('caravan')}>
              <img src={caravanIcon} alt="카라반아이콘" />
              카라반
            </div>
            <div className="openCamping" onClick={() => getType('glamping')}>
              <img src={glampingIcon} alt="글램핑아이콘" />
              글램핑
            </div>
            <div className="openCamping" onClick={() => getType('carping')}>
              <img src={carpingIcon} alt="차박아이콘" />
              차박
            </div>
          </div>
        </div>
        <div className="mainNavMenuWrap">
          <h2 className="mainNavTitle"> 원하는 지역이 있으신 가요? </h2>
          <div className="mainNavMenuFlex">
            <div onClick={() => getLocal('findAll')}>
              <FontAwesomeIcon className="mainNavIcon" icon={faMap} size="2x" />
              <br /> 전국
            </div>
            <div onClick={() => getLocal('seoul')}>
              <FontAwesomeIcon className="mainNavIcon" icon={faMapLocationDot} size="2x" />
              <br /> 서울
            </div>
            <div onClick={() => getLocal('gyeonggido')}>
              <FontAwesomeIcon className="mainNavIcon" icon={faMapLocationDot} size="2x" />
              <br /> 경기도
            </div>
            <div onClick={() => getLocal('chungcheongdo')}>
              <FontAwesomeIcon className="mainNavIcon" icon={faMapLocationDot} size="2x" />
              <br /> 충청도
            </div>
          </div>
          <div className="mainNavMenuFlex">
            <div onClick={() => getLocal('gyeonsangdo')}>
              <FontAwesomeIcon className="mainNavIcon" icon={faMapLocationDot} size="2x" />
              <br /> 경상도
            </div>
            <div onClick={() => getLocal('jeonrado')}>
              <FontAwesomeIcon className="mainNavIcon" icon={faMapLocationDot} size="2x" />
              <br /> 전라도
            </div>
            <div onClick={() => getLocal('gangwondo')}>
              <FontAwesomeIcon className="mainNavIcon" icon={faMapLocationDot} size="2x" />
              <br /> 강원도
            </div>
            <div onClick={() => getLocal('jejudo')}>
              <FontAwesomeIcon className="mainNavIcon" icon={faMapLocationDot} size="2x" />
              <br /> 제주도
            </div>
          </div>
        </div>
        <div className="recomandTrip">
          <div className="mainTitle">
            <Link to="/recommend">추천여행</Link>
          </div>

          <div className="openTrip">
            <Slider {...settings}>
              <div>
                <img className="" src={recommendseoul} alt="서울" />
              </div>
              <div>
                <img className="" src={recommendAll} alt="전국" />
              </div>
              <div>
                <img className="" src={recommendjeju} alt="제주도" />
              </div>
              <div>
                <img className="" src={recommendseoul} alt="서울" />
              </div>
            </Slider>
          </div>
        </div>
        <div className="appInform"> 이용안내 </div>
      </div>
      <div className="mainMap">
        <SectionMap />
      </div>
    </div>
  );
};

export default Section;
