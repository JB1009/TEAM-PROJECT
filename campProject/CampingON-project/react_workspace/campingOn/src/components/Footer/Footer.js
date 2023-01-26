import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Footer.css";
import csImg from "../../images/customerService.png";
import campMeImg from "../../images/campmeIcon.png";
import campingOnImg from "../../images/campingonIcon.png";

import { Link, Route, Routes } from "react-router-dom";

const Footer = () => {
  // loading.js 에서 Footer 삭제
  if (window.location.pathname === "/loading") return null;

  return (
    <div className="footer">
      <div className="Icons">
        <Link to="/">
          <img src={campingOnImg} alt="캠핑온아이콘"></img>
        </Link>
        <img src={campMeImg} alt="캠프미아이콘"></img>
        <Link to="/customerservicecenter">
          <img src={csImg} alt="고객센터아이콘"></img>{" "}
        </Link>
      </div>
      <div className="businessInform">
        <p className="waterMark">© CampingON: Corp.</p>
        <p className="footerInform">
          캠핑ON:은 통신판매 중개자로서 통신판매의 당사자가 아니며 고객지원을
          제외한 상품의 예약, 이용 등과 관련한 의무와 책임 등 모든 거래에 대한
          책임은 가맹점에게 있습니다.
        </p>
        <br></br>
        <p className="footerInform">
          고객센터 바로가기 | 전화 : 070-000-0000 평일 : 오전9시 ~ 오후 5시 30분
          <br></br>
          (오후 12시 30분 ~ 1시 30분 상담제외) / 주말·공휴일 휴무
        </p>
        <br></br>
        <p className="footerInform">
          <strong>캠핑ON: 주식회사 사업자 정보</strong> <br></br>상호 : 캠핑ON:
          주식회사<br></br> 소재지 : 대전시 중구<br></br>개인정보보호책임자 :
          캠핑ON: 데이터보완팀 <br></br>호스팅제공자 : 캠핑ON: 주식회사{" "}
          <br></br>고객센터 : 070-0000-0000
        </p>
      </div>
    </div>
  );
};

export default Footer;
