import React, { useState } from "react";

const QnACancelReservation = () => {
  const [Answer, setAnswer] = useState(0);
  const [btColor, btColorSet] = useState(0);

  return (
    <div className="questionQnAList">
      <div className="questionQnATitle ">예약취소</div>
      <div>
        <div
          onClick={function () {
            setAnswer(1);
            btColorSet(1);
          }}
          className={`questionQnA${btColor == 1 ? " Change" : ""}`}
        >
          예약을 취소하고 싶어요.
        </div>
        <div className={`answerQnA${Answer == 1 ? " block" : ""}`}>
          <p>
            <br />
            예약자 본인이 직접 예약확인/취소 가능합니다. <br />
            예약/결제 당시 안내된 취소/환불 규정에 따라 처리되며, 취소수수료가
            발생 시 취소수수료를 차감한 금액으로 환불 처리됩니다.
            <br />
            <br />
          </p>
        </div>
        <div
          onClick={function () {
            setAnswer(2);
            btColorSet(2);
          }}
          className={`questionQnA${btColor == 2 ? " Change" : ""}`}
        >
          천재지변으로 인한 예약취소는 어떻게 하나요?
        </div>
        <div className={`answerQnA${Answer == 2 ? " block" : ""}`}>
          <p>
            <br />
            일반적인 우천에 의한 예약 취소 및 변경 불가합니다.
            <br /> 태풍 등 기상 특보 시, 입실 당일 현장 날씨 및 캠핑장/펜션의
            정책에 따라 연기 또는 취소 결정됩니다.
            <br /> 입실 당일 오전에 캠핑장/펜션에 연락하셔서 안내 받으시기
            바랍니다.
            <br />
            <br />
          </p>
        </div>

        <div
          onClick={function () {
            setAnswer(3);
            btColorSet(3);
          }}
          className={`questionQnA${btColor == 3 ? " Change" : ""}`}
        >
          입실일을 변경하고 싶어요.
        </div>
        <div className={`answerQnA${Answer == 3 ? " block" : ""}`}>
          <p>
            <br />
            예약 이용일 변경은 불가능합니다. <br />
            취소 수수료를 확인하시고 기존 예약건을 취소하신 다음 재예약하셔야
            합니다.
            <br />
            <br />
          </p>
        </div>
        <div
          onClick={function () {
            setAnswer(4);
            btColorSet(4);
          }}
          className={`questionQnA${btColor == 4 ? " Change" : ""}`}
        >
          객실 타입을 변경하고 싶어요.
        </div>
        <div className={`answerQnA${Answer == 4 ? " block" : ""}`}>
          <p>
            <br />
            객실 타입 변경은 각 캠핑장 별 재량에 따릅니다. <br />
            캠핑온 원칙상으로는 취소 불가능하시며, 취소 수수료를 확인하시고 기존
            예약건을 취소하신 다음 재예약하셔야 합니다.
            <br />
            더 자세한 사항은 고객센터로 문의하시기 바랍니다.
            <br />
            <br />
          </p>
        </div>
        <div
          onClick={function () {
            setAnswer(5);
            btColorSet(5);
          }}
          className={`questionQnA${btColor == 5 ? " Change" : ""}`}
        >
          예약 완료 후 바로 취소했는데 수수료가 나왔어요.
        </div>
        <div className={`answerQnA${Answer == 5 ? " block" : ""}`}>
          <p>
            <br />
            취소 수수료는 예약 시점과는 무관합니다.
            <br /> 예약 후 바로 취소하더라도 입실일/이용일로부터 남은 날짜
            기준으로 수수료가 부과됩니다.
            <br /> 특히, 이용일 10일 이내 예약 건은 더욱 신중한 예약 바랍니다.
            <br />
            <br />
          </p>
        </div>
        <div
          onClick={function () {
            setAnswer(6);
            btColorSet(6);
          }}
          className={`questionQnA${btColor == 6 ? " Change" : ""}`}
        >
          예약 취소했는데 언제 환불되나요?
        </div>
        <div className={`answerQnA${Answer == 6 ? " block" : ""}`}>
          <p>
            <br />
            예약 취소 후 간편결제 사업자, 은행 또는 신용카드사에 따라 환불
            절차에 일정 시간이 소요될 수 있습니다.
            <br />
            영업일 기준(토/일/공휴일 제외) 실시간 계좌이체는 2~3일, 신용카드는
            3~5일 소요됩니다.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default QnACancelReservation;
