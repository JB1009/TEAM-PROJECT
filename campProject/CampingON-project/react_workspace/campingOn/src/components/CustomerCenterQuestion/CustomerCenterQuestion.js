import React, { useState } from "react";
import "../CustomerServiceCenter/CustomerServiceCenter.css";
import "./CustomerCenterQuestion.css";
import { Link } from "react-router-dom";
import axios from 'axios';
const CustomerCenterQuestion = () => {

  const [inquiryText, setInquiryText] = useState("");
  const [inquiryTitle, setInquiryTitle] = useState("");
  const [inquiryType, setInquiryType] = useState("");

  // const checkOnlyOne = (checkThis) => {
  //   const checkboxes = document.getElementsByName("showPublic");

  //   for (let i = 0; i < checkboxes.length; i++) {
  //     if (checkboxes[i] !== checkThis) {
  //       checkboxes[i].checked = false;
  //     }
  //   }
  // };
  const writeInquiry = () => {

    axios.post('/inquiry',{
      inquiryType: inquiryType,
      inquiryTitle: inquiryTitle,
      inquiryText: inquiryText,
      user:{
        userNumber : localStorage.getItem('userId')
      }
    }).then((response)=>{
      if(response.data){
        alert("등록 성공");
      }else{
        alert("등록 실패");
      }
    })

  };

  const handleSetText = (e) => {
    setInquiryText(e.target.value);
  };
  const handleSetTitle = (e) => {
    setInquiryTitle(e.target.value);
  };

  const onIquiryTypeHandler = (e) => {
    setInquiryType(e.currentTarget.value);
  };
  return (
    <div className="CustomerServiceCenter">
      <div className="CScenterInfo">
        <Link to="/customerservicecenter">
          <button className="CScenterTitle">고객센터</button>
        </Link>

        <p className="questionQnATitle">문의하기</p>
        <div>
          <input
            className="inputQnA"
            id="titleQnA"
            type="text"
            placeholder="제목을 입력하세요"
            value={inquiryTitle}
            onChange={(e) => handleSetTitle(e)}
          />
          <select className="title-option" value={inquiryType} onChange={onIquiryTypeHandler}>
            <option selected>문의 유형 선택</option>
            <option value="로그인">로그인</option>
            <option value="결제/환불">결제 환불</option>
          </select>
          <textarea
            className="inputQnA"
            id="contentQnA"
            rows="40"
            name="content"
            placeholder="문의내용을 입력하세요"
            value={inquiryText}
            onChange={(e) => handleSetText(e)}
          ></textarea>
        </div>
        <button className="researchButton" type="button" onClick={writeInquiry}>
          질문등록
        </button>
      </div>
      <div className="CScenterInfo ">
        <div className="questionQnATitle">고객센터 운영 시간</div>
        <div className="numberCScenter">042-000-0000</div>
        <div>
          <div className="rowFlexBoxCScenter">
            <div className="boldFontCScenter">평일</div>{" "}
            <div>오전9시 ~ 오후 5시 30분</div>
          </div>
          <div className="rowFlexBoxCScenter">
            <div className="boldFontCScenter">주말·공휴일</div> <div> 휴무</div>
          </div>
          <div className="rowFlexBoxCScenter">
            <div className="boldFontCScenter">점심시간</div>{" "}
            <div>오후 12시 30분 ~ 1시 30분</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCenterQuestion;
