import React from 'react';
import '../Footer/Footer.css';
import campMeImg from '../images/campmeIcon.png';
import campingOnImg from '../images/campingonIcon.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  if (window.location.pathname === '/loading') return null;
  const campingon = () => {
    navigate('/');
  };
  const campme = () => {
    navigate('/');
  };

  return (
    <div className="footer">
      <div className="Icons">
        <img src={campingOnImg} alt="캠핑온아이콘" onClick={campingon} />
        <img src={campMeImg} alt="캠프미아이콘" onClick={campme} />
      </div>
      <div className="businessInform">
        <p className="waterMark">© CampingON: Corp.</p>
        <p className="footerInform">
          <strong>CampME: 주식회사 사업자 정보</strong>
        </p>
        <div className="footerInfomation">
          <div className="footerInfo">
            상호 : ㈜CampME 소재지 : 대전광역시 중구 <br></br>호스팅제공자 : ㈜CampME
          </div>

          <div className="footerInfo">개인정보보호책임자 : CampME - 데이터보완팀</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
