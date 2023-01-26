import React, { useEffect, useState } from 'react';
import '../../App.css';
import './ViewDetail.css';
import ViewDetailSlider from './ViewDetailSlide';
import ShowFeeInfo from './ShowFeeInfo';
import ShowCampingRule from './ShowCampingRule';
import ShowCampingDetail from './ShowCampingDetail';
import axios from 'axios';
import { useNavigate } from 'react-router';
import ShowCampMap from './ShowCampMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faDog, faFireBurner, faParking, faShower, faStore, faSwimmingPool, faToilet, faWifi } from '@fortawesome/free-solid-svg-icons';

const ViewDetail = () => {
  const campsiteIndex = window.location.pathname.split('/')[2];
  const [instroduction, setintroduction] = useState('');
  const [campsitePrice, setcampsitePrice] = useState('');
  const [campsiteName, setcampsiteName] = useState('');
  const [campsiteGuide, setcampsiteGuide] = useState('');
  const [campsitedata, setcampsitedata] = useState([]);
  const [camptype, setcamptype] = useState('');
  const [optionTypeIndex, setoptionTypeIndex] = useState([]);
  const campsitePriceComma = campsitePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  //데이터 가져오기
  const getcampsiteInform = () => {
    axios.get('/campsite/' + campsiteIndex, {}).then((response) => {
      setintroduction(response.data.campsiteIntroduction);
      setcampsiteName(response.data.campsiteName);
      setcampsiteGuide(response.data.campsiteGuide);
      setcampsitePrice(response.data.campsitePrice);
      setcampsitedata(response.data);
      console.log(response.data);
    });
  };
  useEffect(getcampsiteInform, []);

  //페이지 보여주기
  const [showFee, showFeeSet] = useState(false);
  const [showCampingRule, showCampingRuleSet] = useState(false);
  const [showCampingDetail, showCampingDetailSet] = useState(false);

  //예약하기 navigate
  const navigate = useNavigate();

  const showBooking = () => {
    const data = {
      campsiteName: campsiteName,
      campsitePrice: campsitePrice,
      campsiteIdx: campsiteIndex,
    };
    navigate('/Booking', { state: data });
  };

  return (
    <div>
      {showCampingDetail === true ? <ShowCampingDetail onClose={showCampingDetailSet} /> : null}
      {showCampingRule === true ? <ShowCampingRule onClose={showCampingRuleSet} /> : null}
      {/* {popup ? <ShowCampingDetail  /> : null} */}

      <div className="pageViewdetail">
        <div className="titleViewdetail"> {campsiteName} </div>
        <div className="contentViewdetail">
          <div className="sliderViewdetail">
            <ViewDetailSlider />
          </div>
          <div className="campingInfoViewdetail">
            <div className="campingInfoTitleViewdetail"> 캠핑장 정보</div>
            <div>
              <table className="campingInfoTableViewdetail">
                <tbody>
                  <tr>
                    <td> 캠핑장유형 </td>
                    <td> {camptype === 1 ? '캠핑' : camptype === 2 ? '카라반' : camptype === 3 ? '글램핑' : '차박'} </td>
                  </tr>
                  <tr>
                    <td> 기준인원 </td>
                    <td>기준인원 2인 / 최대인원 4인</td>
                  </tr>
                  <tr>
                    <td> 퇴실시간 </td>
                    <td>입실 15:00 / 퇴실 11:00</td>
                  </tr>
                  <tr>
                    <td> 대표옵션 </td>
                    <td>
                      {campsitedata.parking ? <FontAwesomeIcon className="optionIcon" icon={faParking} /> : ''}
                      {campsitedata.pet ? <FontAwesomeIcon className="optionIcon" icon={faDog} /> : ''}
                      {campsitedata.pool ? <FontAwesomeIcon className="optionIcon" icon={faSwimmingPool} /> : ''}
                      {campsitedata.shower ? <FontAwesomeIcon className="optionIcon" icon={faShower} /> : ''}
                      {campsitedata.store ? <FontAwesomeIcon className="optionIcon" icon={faStore} /> : ''}
                      {campsitedata.barbecue ? <FontAwesomeIcon className="optionIcon" icon={faFireBurner} /> : ''}
                      {campsitedata.bathroom ? <FontAwesomeIcon className="optionIcon" icon={faToilet} /> : ''}
                      {campsitedata.wifi ? <FontAwesomeIcon className="optionIcon" icon={faWifi} /> : ''}
                    </td>
                  </tr>
                  <tr>
                    <td> 금액 </td>
                    <td>{campsitePriceComma} 원</td>
                  </tr>
                </tbody>
              </table>
              <div className="campingInfoTextTitleViewdetail"></div>
              <div className="campingInfoTextContentsViewdetail"></div>
            </div>
          </div>
          <div className="campingInfoViewdetail">
            <div className="campingInfoTitleViewdetail">캠핑장 소개</div>
            <div className="campingInfoTextGrayViewdetail">{instroduction}</div>
            <button onClick={() => showCampingDetailSet(true)} className="showMoreInfoButtonViewdetail">
              캠핑장 소개 더보기
            </button>
          </div>
          <div className="campingInfoViewdetail">
            <div className="campingInfoTitleViewdetail">캠핑장 주소</div>
            <div className="campingInfoTextGrayViewdetail">{campsitedata.campsiteAddress}</div>
            <ShowCampMap campAddress={campsitedata} />
          </div>
          <div className="campingInfoViewdetail">
            <div className="campingInfoTitleViewdetail">캠핑장 이용수칙</div>
            <div className="campingInfoTextGrayViewdetail colorRed">캠핑장 이용수칙을 읽지 않고 발생하는 불이익에 대해 책임지지 않습니다.</div>
            <div className="campingInfoTextGrayViewdetail">{campsiteGuide}</div>
            <button onClick={() => showCampingRuleSet(true)} className="showMoreInfoButtonViewdetail">
              이용수칙 더보기
            </button>
          </div>
          <div className="campingInfoViewdetail rowFlexBoxViewdetail">
            <div className="campingInfoTitleViewdetail colorRed ">취소수수료 안내</div>
            <button
              onClick={() => {
                showFeeSet(!showFee);
              }}
              className="showFeeButtonViewdetail"
              type="button"
            >
              {showFee === true ? '∧' : '∨'}
            </button>
          </div>
          {showFee === true ? <ShowFeeInfo type={instroduction} /> : null}
        </div>
      </div>
      <div className="registerButtonViewdetail" onClick={showBooking}>
        예약하기
      </div>
    </div>
  );
};

export default ViewDetail;
