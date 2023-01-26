import React, { usest, useState } from "react";
import { CloseButton } from "react-bootstrap";

const DetailInquiryAnswer = () => {
  return (
    <td colspan={4}>
      <div className="questionMyInquiry">
        문의내용 배고파서 쥬금 밥줘 밥 피자먹고싶어 길게 써보자 길게 width값이
        이게 맞나 오 이게되네
      </div>
      <div className="answerMyInquiry">
        <div className="answerMyInquiryTitle">답변완료된 문의입니다.</div>
        <div className="answerMyInquiryText">
          안녕하세요 고객님, 종빈이랑 종찬쓰가 사줄듯 해삐☆
        </div>
      </div>
      <div className="divButtonMyReservation">
        <div className="buttonMyReservation">
          <button className="userButtonMyReservation">확인</button>
        </div>
      </div>
    </td>
  );
};

export default DetailInquiryAnswer;
