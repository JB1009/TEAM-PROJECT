import axios from 'axios';
import React, { useEffect, useState } from "react";

const DetailInquiryHistory = (inquiryIndex) => {
  
  
  var number = JSON.parse(inquiryIndex.inquiryIndex);

  const [inquiryText, setInquiryText] = useState("");

  const getMyInquiry = () => {
    axios.get("/inquiry/" + number,{

    }).then((response) => {
      setInquiryText(response.data.inquiryText);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(getMyInquiry,[]);
  return (
    <td colspan={4}>
      <div className="questionMyInquiry" dangerouslySetInnerHTML={{__html:inquiryText}}>
      </div>
      <div className="answerMyInquiryTitle"> 답변대기중입니다.</div>
      <div className="divButtonMyReservation">
        <div className="buttonMyReservation">
          <button className="userButtonMyReservation">확인</button>
        </div>
      </div>
    </td>
  );
};

export default DetailInquiryHistory;
