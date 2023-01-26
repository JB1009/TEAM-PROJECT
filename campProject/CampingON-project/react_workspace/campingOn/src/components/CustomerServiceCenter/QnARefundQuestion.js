import React, { useState } from "react";

const QnARefundQuestion = () => {
  const [Answer, setAnswer] = useState(0);
  const [btColor, btColorSet] = useState(0);
  return (
    <div className="questionQnAList">
      <div className="questionQnATitle">환불문의</div>
      <div>
        <div
          onClick={function () {
            setAnswer(1);
            btColorSet(1);
          }}
          className={`questionQnA${btColor == 1 ? " Change" : ""}`}
        >
          당일 예약 취소인데, 환불되나요?
        </div>
        <div className={`answerQnA${Answer == 1 ? " block" : ""}`}>
          <p>
            <br />
            고객님, 통상적으로 당일 취소시 예약금 전액 환불 받으실 수 없습니다.
            <br />
            하지만, 환불 규정은 캠핑장마다 다르오니 해당 캠핑장으로 직접
            문의하시기 바람니다.
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
          취소수수로 산정 기준은 어떻게 되나요?
        </div>
        <div className={`answerQnA${Answer == 2 ? " block" : ""}`}>
          <p>
            <br />
            취소수수료는 숙소별로 상이합니다.
            <br /> 취소수수료는 예약 시점과는 무관하게 입실일로부터 남은 날짜
            기준으로 부과되며, 결제하신 금액에서 취소수수료를 차감한 금액이
            환불됩니다. <br />
            환불 예정 금액은 조회 시점 또는 실제 환불 진행 시점에 따라 달라질 수
            있으므로, 예약/결제 진행 당시 안내된 취소/환불 규정을 반드시
            숙지해주시길 바랍니다.
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
          예약 취소했는데 언제 환불되나요?
        </div>
        <div className={`answerQnA${Answer == 3 ? " block" : ""}`}>
          <p>
            <br />
            예약 취소 후 간편결제 사업자, 은행 또는 신용카드사에 따라 환불
            절차에 일정 시간이 소요될 수 있습니다. <br />
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

export default QnARefundQuestion;
