import React, { useState } from "react";

const QnACScenter = () => {
  const [Answer, setAnswer] = useState(0);
  const [btColor, btColorSet] = useState(0);
  return (
    <div className="questionQnAList">
      <div className="questionQnATitle">고객센터 이용문의</div>
      <div>
        <div
          onClick={function () {
            setAnswer(1);
            btColorSet(1);
          }}
          className={`questionQnA${btColor == 1 ? " Change" : ""}`}
        >
          고객센터 연결이 지연되면 어떻게 하나요?
        </div>
        <div className={`answerQnA${Answer == 1 ? " block" : ""}`}>
          <p>
            <br />
            일부 시간대에는 통화량이 많아 상담원 연결이 지연될 수 있습니다.{" "}
            <br />
            순차적으로 상담 드리오니 양해 부탁드립니다.
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
          캠핑온에 입점하고 싶어요.
        </div>
        <div className={`answerQnA${Answer == 2 ? " block" : ""}`}>
          <p>
            <br /> 우선 회원가입을 진행해 주신 뒤에 캠핑톡 고객센터에서 등록
            신청하시면 친절하게 안내드리겠습니다. 감사합니다. <br />
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
          고객센터를 통해서 캠핑장 측과 연결가능한가요?
        </div>
        <div className={`answerQnA${Answer == 3 ? " block" : ""}`}>
          <p>
            <br />
            고객센터와는 별개로 캠핑장 측의 연락처를 통해 연결가능합니다. <br />
            하지만, 캠핑장 측에서 일방적으로 연락을 피하는 경우에는 고객센터를
            통해 문의주시면 빠르게 대처해드리겠습니다.
            <br /> <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default QnACScenter;
