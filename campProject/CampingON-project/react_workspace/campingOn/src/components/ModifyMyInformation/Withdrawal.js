import React, { useState } from 'react';
import swal from 'sweetalert';
import '../../App.css';
import './ModifyMyInformation.css';
// import WithdrawalConfirm from "./WithdrawalConfirm";

const Withdrawal = () => {
  //탈퇴확인창
  const [showModal, setModal] = useState(false);
  //체크박스 여부
  const [agreebox, setAgreebox] = useState(false);

  return (
    <div className="wholeWrapModifyMyInformation">
      <h1 className="titleFontModifyMyInformation">회원탈퇴</h1>
      <div className="withdrawalInfo">
        <p className="withrawalInfoTitle">사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다.</p>
        <p className="withrawalInfoText">
          <strong className="withrawalInfoOrange">탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가</strong>
          하오니 신중하게 선택하시기 바랍니다.
        </p>
      </div>
      <div className="withdrawalInfo">
        <p className="withrawalInfoTitle">탈퇴 후 회원정보 및 개인형 서비스 이용기록은 모두 삭제됩니다.</p>
        <p className="withrawalInfoText">
          개인형 서비스 이용기록은 모두 삭제되며, 삭제된 데이터는 복구되지 않습니다.
          <br />
          삭제되는 내용을 확인하시고 필요한 데이터는 미리 백업을 해주세요.
        </p>
      </div>
      <div className="withdrawalInfo">
        <p className="withrawalInfoTitle">탈퇴 후에도 등록한 게시물은 그대로 남아 있습니다.</p>
        <p className="withrawalInfoText">
          게시글 및 댓글은 탈퇴 시 자동 삭제되지 않고 그대로 남아 있습니다. <br />
          삭제를 원하는 게시글이 있다면 
          <strong className="withrawalInfoOrange">
            반드시 탈퇴 전 비공개 처리하거나 삭제하시기 바랍니다.
            <br />
          </strong>
          탈퇴 후에는 회원정보가 삭제되어 본인 여부를 확인할 수 있는 방법이 없어, 게시글을 임의로 삭제해드릴 수 없습니다.
        </p>
      </div>
      <div className="withdrawalInfo">
        <div className="withdrawalCheckboxarea">
          <input type="checkbox" onClick={() => setAgreebox(!agreebox)}></input>
          안내 사항을 모두 확인하였으며, 이에 동의합니다.
        </div>
        <div className={agreebox ? 'displayNone' : 'agreeboxNotCheck'}>
          <strong>✔</strong> 필수 동의항목에 동의하지 않으셨습니다.
        </div>
      </div>
      <div className="checkModifyMyInformation">
        <button
          className="modifyMyInformationButton"
          onClick={() => (agreebox ? setModal(true) : swal('잠깐', '동의항목에 동의해주세요🙏🙏🙏', 'error'))}
        >
          탈퇴하기
        </button>
      </div>
    </div>
  );
};

export default Withdrawal;
