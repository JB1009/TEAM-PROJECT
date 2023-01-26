import React from "react";

import "./CampingHistory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground } from "@fortawesome/free-solid-svg-icons";

const CampingHistory = () => {
  return (
    <div className="wholeWrapCampingHistory">
      <h1 className="titleFontCampingHistory">캠핑기록</h1>
      <div className="contentsCampingHistory">
        <h1 className="contensNameCampingHistory">캠핑장명</h1>
        <div className="contentsStoryCampingHistory">
          <div className="contentsImgCampingHistory"></div>
          <table className="contentstableCampingHistory">
            <tr>
              <td className="contentsHeadTitleCampingHistory">캠핑날짜</td>
              <td></td>
            </tr>
            <tr>
              <td className="contentsHeadTitleCampingHistory">예약인원</td>
              <td></td>
            </tr>
            <tr>
              <td className="contentsHeadTitleCampingHistory">평 점</td>
              <td className="contentsIconCampingHistory">
                <FontAwesomeIcon icon={faCampground} />{" "}
                <FontAwesomeIcon icon={faCampground} />{" "}
                <FontAwesomeIcon icon={faCampground} />{" "}
                <FontAwesomeIcon icon={faCampground} />{" "}
                <FontAwesomeIcon icon={faCampground} />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="contentsCampingHistory">
        <h1 className="contensNameCampingHistory">캠핑장명</h1>
        <div className="contentsStoryCampingHistory">
          <div className="contentsImgCampingHistory"></div>
          <table className="contentstableCampingHistory">
            <tr>
              <td className="contentsHeadTitleCampingHistory">캠핑날짜</td>
              <td></td>
            </tr>
            <tr>
              <td className="contentsHeadTitleCampingHistory">예약인원</td>
              <td></td>
            </tr>
            <tr>
              <td className="contentsHeadTitleCampingHistory">평 점</td>
              <td className="contentsIconCampingHistory">
                <FontAwesomeIcon icon={faCampground} />{" "}
                <FontAwesomeIcon icon={faCampground} />{" "}
                <FontAwesomeIcon icon={faCampground} />{" "}
                <FontAwesomeIcon icon={faCampground} />{" "}
                <FontAwesomeIcon icon={faCampground} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CampingHistory;
