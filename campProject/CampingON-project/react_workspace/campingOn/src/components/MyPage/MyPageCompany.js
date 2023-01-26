import React, { useState } from 'react';
import '../../common/init.css';
import '../../common/sizes.css';
import '../../App.css';
import './MyPage.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function MyPageCompany() {
  return (
    <div className="wrapBoxMyPage">
      <div className="flexBoxMyPage">
        <Link to="/campingregistration">
          <div className="smallImgBoxMyPage">
            <p className="spacingMyPage">
              캠핑장 <br />
              등록
            </p>
          </div>
        </Link>
        <Link to="/checkcampingregistration">
          <div className="smallImgBoxMyPage">
            <p className="spacingMyPage">
              캠핑장 <br />
              관리
            </p>
          </div>
        </Link>
        <Link to="/reservationmanagement">
          <div className="smallImgBoxMyPage">예약관리</div>
        </Link>
      </div>
      <div className="flexBoxMyPage">
        <Link to="/mypoint">
          <div className="smallImgBoxMyPage">포인트</div>
        </Link>
        <Link to="/inquiryhistory">
          <div className="smallImgBoxMyPage">문의내역</div>
        </Link>
        <Link to="/modifymyinformation">
          <div className="smallImgBoxMyPage">
            <p className="spacingMyPage">
              내정보 <br />
              수정
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MyPageCompany;
