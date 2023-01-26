import React, { useState } from "react";

const QnAPaymentReceipt = () => {
  const [Answer, setAnswer] = useState(0);
  const [btColor, btColorSet] = useState(0);
  return (
    <div className="questionQnAList">
      <div className="questionQnATitle">결제영수증</div>
      <div>
        <div
          onClick={function () {
            setAnswer(1);
            btColorSet(1);
          }}
          className={`questionQnA${btColor == 1 ? " Change" : ""}`}
        >
          현금영수증 발급은 어떻게 하나요?
        </div>
        <div className={`answerQnA${Answer == 1 ? " block" : ""}`}>
          <p>
            <br />
            [간편계좌이체 - 페이플] <br />
            1. 결제 단계에서 고객님께서 발급 신청을 하시면, 입력하신 정보로 자동
            발행됩니다. (영수증은 발급 신청 혹은 주문 신청 시 입력하신 이메일로
            발송됩니다.) <br />
            2. 예약 시 현금영수증을 신청하지 않은 경우, 법령에 의거하여
            캠핑톡에서 자진 발행을 진행하고 있습니다. 캠핑톡
            고객센터(070-4336-1824)를 통하여 발행번호를 확인하실 수 있으며,
            국세청 홈텍스에서 직접 등록이 가능합니다. <br />
            <br />
            [카카오페이] <br />
            1. 카카오페이머니 결제 시 자동으로 발행됩니다. <br />
            2. 자진발급은 카카오톡 > pay > 우측 상단 톱니바퀴(나의 카카오페이) >
            이용내역 > 결제 > 개별 상세내역 > 현금영수증 확인에서 가능합니다.
            <br />
            [페이코]
            <br /> 페이코 고객센터에서 확인해주세요. <br />
            <br />
            [스마일페이] <br />
            1. 스마일페이 앱에서 확인 가능합니다. <br />
            2. 현금영수증은 설정 > 회원정보관리 > 현금영수증에서 발급받으실 수
            있습니다. <br />
            <br />
            [토스]
            <br /> 1. 토스 앱에서 확인 가능합니다. <br />
            2. 토스 앱 > 전체 탭 > 설정 > 결제 설정 > 결제 내역에서 건 별로
            확인하실 수 있습니다.
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
          결제영수증 발급은 어떻게 하나요?
        </div>
        <div className={`answerQnA${Answer == 2 ? " block" : ""}`}>
          <p>
            <br />
            결제 영수증은 개별 카드사의 결제 내역 또는 결제 대행사 페이지에서
            고객님께서 직접 발급하실 수 있습니다.
            <br />
            [신용/체크카드]
            <br />
            이니시스에서 확인이 가능합니다.
            <br />
            [페이플]
            <br />
            페이플 홈페이지에서 확인이 가능합니다.
            <br />
            [페이코]
            <br />
            페이코 홈페이지에서 확인 가능합니다.
            <br />
            [스마일페이]
            <br />
            마이스마일페이에서 확인 가능합니다.
            <br />
            [토스]
            <br />
            토스 앱에서 확인 가능합니다.
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
          계좌 등록 후 은행에서 문자가 왔어요
        </div>
        <div className={`answerQnA${Answer == 3 ? " block" : ""}`}>
          <p>
            <br />
            간편결제수단에 계좌 등록 시 은행에서 자동이체 서비스가 등록되었다는
            문자가 발송될 수 있습니다.
            <br />
            매달 일정 금액이 자동이체 되는 것이 아니고, 고객님께서 예약/결제하신
            1회성 결제이니 안심하고 이용해 주시길 바랍니다.
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
          계좌이체 등록 해지는 어떻게 하나요?
        </div>
        <div className={`answerQnA${Answer == 4 ? " block" : ""}`}>
          <p>
            <br />
            간편 결제 사이트에서 변경이 가능합니다. <br />
            자세한 사항은 등록하신 간편결제사(카카오페이 등)로 문의해주시기
            바랍니다. <br />
            다만, 페이플의 경우 일회성 등록이며 실제로 간편계좌이체 등록이 된
            것은 아닙니다. <br />
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
          제가 이용 중인 카드가 결제 목록에 없어요
        </div>
        <div className={`answerQnA${Answer == 5 ? " block" : ""}`}>
          <p>
            <br />
            결제 시 사용 가능한 카드 종류는 PG사(전자결제 대행사)에서 정하는
            부분이고, 일부 카드는 결제 지원이 되지 않습니다.
            <br />
            IBK기업은행 또는 우리카드의 경우, 목록에서 비씨를 선택하시면 결제
            가능합니다.
            <br />
            카카오뱅크 카드는 KB국민카드를 선택하시면 결제 가능합니다. <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default QnAPaymentReceipt;
