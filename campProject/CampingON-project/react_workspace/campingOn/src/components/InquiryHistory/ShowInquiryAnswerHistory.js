import React, { useState } from "react";
import "../../common/init.css";
import "../../common/sizes.css";
import "../../App.css";
import "./InquiryHistory.css";
import DetailInquiryHistory from "./DetailInquiryHistory";
import DetailInquiryAnswer from "./DetailInquiryAnswer";
const ShowInquiryAnswerHistory = () => {
  let [ShowMyInquiryList, ShowMyInquiryListset] = useState(false);
  return (
    <div>
      <div className="rowFlexBoxInquiry">
        <div className="checkboxWrapInquiry">
          <input type="checkbox" className="checkboxInquiry"></input> 전체선택
        </div>
        <button type="button" className="closeButtonInquiry">
          삭제
        </button>
      </div>
      <table className="tableMyInquiryHistoryList">
        <tr className="titleMyInquiryHistory">
          <td colSpan={4}>답변완료된 문의내역</td>
        </tr>
        <tr
          onClick={() => {
            ShowMyInquiryListset(!ShowMyInquiryList);
          }}
        >
          <td>문의제목</td>
          <td className="col3TdInquiry" colSpan="3">
            배고프다
            <input
              className="checkboxInquiry leftCheckbox"
              type="checkbox"
            ></input>
          </td>
        </tr>
        <tr>
          <td>문의번호</td> <td></td>
          <td>작성일자</td> <td></td>
        </tr>
        <tr>{ShowMyInquiryList == true ? <DetailInquiryAnswer /> : null}</tr>
      </table>
    </div>
  );
};
export default ShowInquiryAnswerHistory;
