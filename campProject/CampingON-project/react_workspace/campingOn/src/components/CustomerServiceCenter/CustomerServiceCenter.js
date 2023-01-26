// CustomerServiceCenter
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CustomerServiceCenter.css";
import RefundQuestion from "./QnARefundQuestion";
import CancelReservation from "./QnACancelReservation";
import QnAReservation from "./QnAReservation";
import QnATOP6 from "./QnATOP6";
import QnACScenter from "./QnACScenter";
import QnAPaymentReceipt from "./QnAPaymentReceipt";
const CustomerServiceCenter = () => {
  //   let [ReFund, ReFundset] = useState(false);
  const [Question, Questionset] = useState(1);
  //클릭시 버튼 색상 변경
  const [btColor, btColorSet] = useState(1);

  function changeQuestionList() {
    switch (Question) {
      case 1:
        return <QnATOP6 />;
      case 2:
        return <CancelReservation />;
      case 3:
        return <QnAPaymentReceipt />;
      case 4:
        return <QnAReservation />;
      case 5:
        return <RefundQuestion />;
      case 6:
        return <QnACScenter />;
      default:
        return <QnATOP6 />;
    }
  }

  return (
    <div className="CustomerServiceCenter">
      <div className="CScenterInfo">
        <button className="CScenterTitle">고객센터</button>
        <div>
          <div className="rowFlexBox">
            <div
              onClick={() => {
                Questionset(1);
                btColorSet(1);
              }}
              className={`seperateQuestion${btColor == 1 ? " Change" : ""}`}
            >
              TOP 6
            </div>
            <div
              onClick={() => {
                Questionset(2);
                btColorSet(2);
              }}
              className={`seperateQuestion${btColor == 2 ? " Change" : ""}`}
            >
              예약취소
            </div>
            <div
              onClick={() => {
                Questionset(3);
                btColorSet(3);
              }}
              className={`seperateQuestion${btColor == 3 ? " Change" : ""}`}
            >
              결제영수증
            </div>
          </div>
          <div className="rowFlexBox">
            <div
              onClick={() => {
                Questionset(4);
                btColorSet(4);
              }}
              className={`seperateQuestion${btColor == 4 ? " Change" : ""}`}
            >
              예약문의
            </div>
            <div
              onClick={() => {
                Questionset(5);
                btColorSet(5);
              }}
              className={`seperateQuestion${btColor == 5 ? " Change" : ""}`}
            >
              환불문의
            </div>
            <div
              onClick={() => {
                Questionset(6);
                btColorSet(6);
              }}
              className={`seperateQuestion${btColor == 6 ? " Change" : ""}`}
            >
              고객센터
            </div>
          </div>
        </div>
      </div>
      <div className="CScenterInfo">
        <div>{changeQuestionList()}</div>
        <div className="showCSQuestion">
          원하시는 내용이 없나요?
          <Link to="/customerquestion">
            <button className="showCSQuestion boldGreen">문의하기</button>
          </Link>
        </div>
      </div>
      <div className="CScenterInfo ">
        <div className="questionQnATitle backgroudGreen">
          고객센터 운영 시간
        </div>
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

export default CustomerServiceCenter;
