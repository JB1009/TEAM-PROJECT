import React from "react";

const ShowCancelMyReservation = () => {
  return (
    <td colSpan="4">
      <table className="tableiInformationMyReservation">
        <tr className=" titleMyReservation showTitleMyReservation">
          <td colSpan={2}>예약취소</td>
        </tr>
        <tr>
          <td className="tableTitleMyReservation">예약번호</td> <td></td>
        </tr>
        <tr>
          <td className="tableTitleMyReservation">일정</td> <td></td>
        </tr>
        <tr>
          <td className="tableTitleMyReservation">캠핑장</td> <td></td>
        </tr>
        <tr>
          <td className="tableTitleMyReservation">예약인원</td> <td></td>
        </tr>
        <tr>
          <td className="tableTitleMyReservation">예약차량</td> <td></td>
        </tr>
      </table>
      <table className="tableUserMyReservation">
        <tr className=" titleMyReservation showTitleMyReservation">
          <td colSpan={2}>이용자 정보</td>
        </tr>
        <tr>
          <td className="tableTitleMyReservation">예약자</td> <td></td>
        </tr>
        <tr>
          <td className="tableTitleMyReservation">결제정보</td> <td></td>
        </tr>
      </table>
      <div className="divButtonMyReservation">
        <div className="buttonMyReservation">
          <button className="userButtonMyReservation">확인버튼</button>
        </div>
      </div>
    </td>
  );
};

export default ShowCancelMyReservation;
