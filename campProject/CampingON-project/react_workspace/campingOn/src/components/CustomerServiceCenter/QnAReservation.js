import React, { useState } from "react";

const QnAReservation = () => {
  const [Answer, setAnswer] = useState(0);
  const [btColor, btColorSet] = useState(0);
  return (
    <div className="questionQnAList">
      <div className="questionQnATitle">예약문의</div>
      <div>
        <div
          onClick={function () {
            setAnswer(1);
            btColorSet(1);
          }}
          className={`questionQnA${btColor == 1 ? " Change" : ""}`}
        >
          예약 확인은 어떻게 하나요?
        </div>
        <div className={`answerQnA${Answer == 1 ? " block" : ""}`}>
          <p>
            <br />
            상단 마이페이지 > 내예약에서 확인하실 수 있습니다.
            <br /> <br />
          </p>
        </div>
        <div
          onClick={function () {
            setAnswer(2);
            btColorSet(2);
          }}
          className={`questionQnA${btColor == 2 ? " Change" : ""}`}
        >
          비회원도 예약할 수 있나요?
        </div>
        <div className={`answerQnA${Answer == 2 ? " block" : ""}`}>
          <p>
            <br />
            아쉽게도 회원이 아닌 비회원 예약/결제는 불가능합니다.
            <br />
            회원 가입하시고 캠핑온 사이트를 편하게 이용해보세요.
            <br /> <br />
          </p>
        </div>

        <div
          onClick={function () {
            setAnswer(3);
            btColorSet(3);
          }}
          className={`questionQnA${btColor == 3 ? " Change" : ""}`}
        >
          미성년자도 예약할 수 있나요?
        </div>
        <div className={`answerQnA${Answer == 3 ? " block" : ""}`}>
          <p>
            <br />
            미성년자는 예약이 불가능하며, 보호자 없이 숙박 시설을 이용하실 수
            없습니다.
            <br /> <br />
          </p>
        </div>
        <div
          onClick={function () {
            setAnswer(4);
            btColorSet(4);
          }}
          className={`questionQnA${btColor == 4 ? " Change" : ""}`}
        >
          여러 개의 객실을 동시에 예약할 수 있나요?
        </div>
        <div className={`answerQnA${Answer == 4 ? " block" : ""}`}>
          <p>
            <br />
            네. 예약시 예약객실 수를 여러 개 선택하실 수 있습니다. <br />
            단, 개별 사이트 상품(A-1, 사이트1 등 상품명에 숫자가 기재된 경우)은
            1개만 예약하실 수 있습니다.
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
          연박 예약도 가능한가요?
        </div>
        <div className={`answerQnA${Answer == 5 ? " block" : ""}`}>
          <p>
            <br />
            연박 예약 시 체크인(입실일)-체크아웃(퇴실일) 날짜 지정 후 예약하시면
            됩니다. <br />
            일정 선택 달력은 1박 예약으로 자동 설정되어 있습니다. <br />
            연박 예약 시 체크인/체크아웃 날짜를 직접 지정하여 검색하셔야
            연박예약이 가능한 숙소를 확인하실 수 있습니다. <br /> (금,토 2박인
            경우 금요일과 일요일 클릭 후 검색)
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
          인원 추가, 숯불세트 등 옵션 상품(부가요금)은 어떻게 결제하나요?
        </div>
        <div className={`answerQnA${Answer == 6 ? " block" : ""}`}>
          <p>
            <br />
            옵션 상품 결제는 예약 시 선택하셔서 함께 결제하시면 됩니다. <br />
            옵션 상품은 업체 별로 상이하오니 옵션 선택에서 확인하시면 됩니다.{" "}
            <br />
            옵션을 선택하지 않고 예약하셨거나 현장 결제를 원하시는 경우 업체에
            문의하시기 바랍니다.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default QnAReservation;
