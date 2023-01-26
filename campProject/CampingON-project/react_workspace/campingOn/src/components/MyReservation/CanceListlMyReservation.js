import React, { useState } from "react";
import ShowCancelMyReservation from "./ShowCancelMyReservation";

const CancelListMyReservation = () => {
  let [ShowCancelListMyReservation, CancelListMyReservationset] =
    useState(false);
  return (
    <div>
      <table className="tableCancelMyReservationList">
        <tr className=" titleMyReservation">
          <td colSpan={4}>예약취소</td>
        </tr>
        <tr
          onClick={() => {
            CancelListMyReservationset(!ShowCancelListMyReservation);
          }}
        >
          {ShowCancelListMyReservation == true ? (
            <ShowCancelMyReservation></ShowCancelMyReservation>
          ) : (
            <>
              <td className="MyReservationNum">예약번호</td> <td></td>
              <td className="MyReservationSite">캠핑장</td> <td></td>
            </>
          )}
        </tr>
        <tr>
          <td className="MyReservationNum">예약번호</td> <td></td>
          <td className="MyReservationSite">캠핑장</td> <td></td>
        </tr>
      </table>
    </div>
  );
};

export default CancelListMyReservation;
