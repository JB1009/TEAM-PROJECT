import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ShowCampingDetail = (props) => {
  const campsiteIndex = window.location.pathname.split('/')[2];
  const { onClose } = props;
  const [instroduction, setintroduction] = useState('');
  const getcampsiteInform = () => {
    axios.get('/campsite/' + campsiteIndex, {}).then((response) => {
      console.log(response);
      setintroduction(response.data.campsiteIntroduction);
    });
  };
  useEffect(getcampsiteInform, []);
  return (
    <div className="wholeWrapShowCampingRule">
      <div className="wholeShowCampingRule">
        <div className="titleShowCampingRule">
          캠핑장 소개{' '}
          <button
            onClick={() => {
              onClose(false);
            }}
          >
            {' '}
            X
          </button>
        </div>

        <div className="infoShowCampingRule">
          <div className="textShowCampingRule">
            {' '}
            <br />
            [상품소개] <br />
          </div>
          <div className="textShowCampingRule"> {instroduction}</div>
          <div className="textShowCampingRule">
            <br />
            [구성품]
            <br />
            침대2개(Qsize), 전기장판, TV, 에어컨, 선풍기, 제습기, 냉장고, 전자레인지, 버너,
            <br />
            드라이기, 거울, 스텐드 조명, 냉장고, 주방테이블, 바비큐테이블, 체어, 불판, 화장실, 샤워실, 개수대, 각종 취사도구, 일회용품(종이컵,
            플라스틱컵, 수저, 종이그릇), 캠핑용 그릇세트(필요시제공)
            <br />
            <br />
            [제공사항]
            <br />
            * 취사세트 : 냄비, 집게, 가위, 국자, 그릇, 도마, 칼 등<br />
            * 일회용품 : 종이컵, 플라스틱컵, 수저, 종이그릇, 부탄가스, 물티슈, 휴지, 캠핑용 그릇세트
            <br />
            * 어매니티 : 수건, 칫솔, 치약, 샴푸, 린스, 비누, 바디워시, 바디로션, 폼클랜저, 레이디세트
            <br />
            <br />
            [안전용품]
            <br />
            * 소화기, 단독화재 경보기, 일산화탄소 경보기, 손전등
            <br />
            <br />
            추가요금 36개월 이하 무료 / 미취학 10,000 / 초등중등 20,000 / 고등성인 30,000
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowCampingDetail;
