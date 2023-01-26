import React from "react";
import "./MyPoint.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const MyPoint = () => {
  return (
    <div className="wholeWrapMyReservation">
      <h1 className="titleFontMyPoint">포인트</h1>
      <div className="availableMyPointBox">
        <div className="avilableFontMyPoint">사용가능 포인트</div>
        <div className="avilableTotalPoint">5,015P</div>
      </div>
      <div className="saveHistoryMyPoint">
        <div className="saveTitleMyPoint">
          <div>
            <FontAwesomeIcon icon={faCoins} />
          </div>
          <div className="fontIconMyPoint">내 포인트 적립 내역</div>
        </div>
        <table className="saveTableMyPoint">
          <tr>
            <th className="saveFirstMyPoint">이용일</th>
            <th className="saveSecondMyPoint">캠핑장</th>
            <th className="saveThirdMyPoint">포인트</th>
          </tr>
          <tr>
            <td>2023.01.08</td> <td>청산에살어리랏다 캠핑장</td>
            <td>+1,200P</td>
          </tr>
          <tr>
            <td></td> <td></td>
          </tr>
        </table>
      </div>
      <div className="saveHistoryMyPoint">
        <div className="saveTitleMyPoint">
          <div>
            <FontAwesomeIcon icon={faCoins} />
          </div>
          <div className="fontIconMyPoint">내 포인트 사용 내역</div>
        </div>
        <table className="saveTableMyPoint">
          <tr>
            <th className="saveFirstMyPoint">사용일</th>
            <th className="saveSecondMyPoint">캠핑장</th>
            <th className="saveThirdMyPoint">포인트</th>
          </tr>
          <tr>
            <td>2023.01.10</td> <td>얄라리얄라 캠핑장</td> <td>-800P</td>
          </tr>
          <tr>
            <td></td> <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyPoint;
