import React, { useState } from "react";
import "../../common/init.css";
import "../../common/sizes.css";
import "../../App.css";
import "./InquiryHistory.css";
import "../MyReservation/MyReservation.css";
import ShowMyInquiryHistory from "./ShowInquiryHistory";
import ShowInquiryAnswerHistory from "./ShowInquiryAnswerHistory";

const InquiryHistory = () => {
  const [ShowInquiryHistory, ShowInquiryHistoryset] = useState(false);
  return (
    <div className="wholeWrapMyInquiryHistory">
      <h1 className="titleFontMyReservation">문의내역</h1>
      <div className="menuBarMyReservation">
        <div
          onClick={() => {
            ShowInquiryHistoryset(true);
          }}
        >
          답변대기()
        </div>
        <div>|</div>
        <div
          className="ShowListMyReservationset"
          onClick={() => {
            ShowInquiryHistoryset(false);
          }}
        >
          답변완료()
        </div>
      </div>
      <div>
        {ShowInquiryHistory == true ? (
          <ShowMyInquiryHistory />
        ) : (
          <ShowInquiryAnswerHistory />
        )}
      </div>
    </div>
  );
};

export default InquiryHistory;
