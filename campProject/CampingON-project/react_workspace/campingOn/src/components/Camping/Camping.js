import React, { useState } from 'react';

import './Camping.css';
import heartIcon from '../../images/heart.png';
import CampingList from './CampingList';
import FindCamping from './FindCamping';
import { useRecoilState } from 'recoil';
import { searchLocal } from '../../state/atoms';
import CampingMap from './CampingMap';
const Camping = () => {
  const [showSearchbox, setSearchbox] = useState(false);
  const [optionTypeIndex, setOptionTypeIndex] = useState([]);
  const [campsiteLocal, setcampsiteLocal] = useState('서울');
  const [campsiteName, setcampsiteName] = useState('');
  const [typeIndex, setTypeIndex] = useState([]);
  const [serchingCamp, setserchingCamp] = useState('캠핑장');
  //캠핑날짜

  //캠핑장 검색
  const oncampsiteNameHandler = (event) => {
    setcampsiteName(event.currentTarget.value);
  };
  //캠핑지역
  const oncampsiteLocalHandler = (event) => {
    setcampsiteLocal(event.currentTarget.value);
  };
  //캠핑유형
  const data = [
    { id: 1, title: '선택 1' },
    { id: 2, title: '선택 2' },
    { id: 3, title: '선택 3' },
    { id: 4, title: '선택 4' },
  ];
  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setTypeIndex((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setTypeIndex(setTypeIndex.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setTypeIndex(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setTypeIndex([]);
    }
  };

  //옵션검색
  const onoptionTypeIndexHandler = (event) => {
    if (event.currentTarget.checked && optionTypeIndex.indexOf(event.currentTarget.value) === -1) {
      optionTypeIndex.push(event.currentTarget.value);
    } else {
      let idx = optionTypeIndex.indexOf(event.currentTarget.value);

      optionTypeIndex.splice(idx, 1);
    }
  };

  //검색기능
  const campsiteFindByMultiple = () => {};
  //지도 바꾸기
  const changeMap = () => {
    setserchingCamp(campsiteName);
  };
  return (
    <div className="campingPage">
      <div className="contentsRowFlexDesktop">
        <div className="showContentsCamping">
          <div className="researchBox">
            <div className="rowFlexBoxOnly">
              <h1 className="researchTitle">캠핑장 일정 조회</h1>
              <button
                className="cssNoneButton"
                type="button"
                onClick={() => {
                  setSearchbox(!showSearchbox);
                }}
              >
                {showSearchbox ? '∧' : '∨'}
              </button>
            </div>
            <div className={showSearchbox ? '' : 'displayNone'}>
              <div className="leftArray">
                <div>
                  <label className="researchName">캠핑장 검색</label>
                  <input onChange={oncampsiteNameHandler} className="researchInput" type="text"></input>
                </div>
                <div>
                  <label className="researchName">지역 검색</label>
                  <select onChange={oncampsiteLocalHandler} className="campsiteLocal" name="campsiteLocal">
                    <option value="서울">서울</option>
                    <option value="경기도">경기도</option>
                    <option value="강원도">강원도</option>
                    <option value="제주도">제주도</option>
                    <option value="충청도">충청도</option>
                    <option value="경상도">경상도</option>
                    <option value="전라도">전라도</option>
                  </select>
                </div>
                <div></div>

                <div>
                  <label className="researchNameLeft">캠핑유형</label>
                  <div className="rowFlexBoxTablet">
                    <div className="rowFlexBoxLeft">
                      <input
                        type="checkbox"
                        name="select-all"
                        onChange={(e) => handleAllCheck(e.target.checked)}
                        // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                        checked={typeIndex.length === data.length ? true : false}
                        className="checkBoxBorder"
                      />
                      <label className="checkboxLabel">전체</label>
                      <input
                        type="checkbox"
                        name={`select-1`}
                        onChange={(e) => handleSingleCheck(e.target.checked, 1)}
                        // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                        checked={typeIndex.includes(1) ? true : false}
                        className="checkBoxBorder"
                      />
                      <label className="checkboxLabel">캠핑</label>
                      <input
                        type="checkbox"
                        name={`select-2`}
                        onChange={(e) => handleSingleCheck(e.target.checked, 2)}
                        checked={typeIndex.includes(2) ? true : false}
                        className="checkBoxBorder"
                      />
                      <label className="checkboxLabel">글램핑</label>
                    </div>
                    <div className="rowFlexBoxLeft">
                      <input
                        type="checkbox"
                        name={`select-3`}
                        onChange={(e) => handleSingleCheck(e.target.checked, 3)}
                        checked={typeIndex.includes(3) ? true : false}
                        className="checkBoxBorder"
                      />
                      <label className="checkboxLabel">카라반</label>
                      <input
                        type="checkbox"
                        name={`select-4`}
                        onChange={(e) => handleSingleCheck(e.target.checked, 4)}
                        checked={typeIndex.includes(4) ? true : false}
                        className="checkBoxBorder"
                      />
                      <label className="checkboxLabel">차박</label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="researchNameLeft">옵션검색</label>
                  <div className="rowFlexBoxTablet">
                    <div className="rowFlexBoxLeft">
                      <input onChange={onoptionTypeIndexHandler} name="optionTypeIndex" value="0" type="checkbox" className="checkBoxBorder" />
                      <label className="checkboxLabel">편의점</label>
                      <input onChange={onoptionTypeIndexHandler} name="optionTypeIndex" value="1" className="checkBoxBorder" type="checkbox" />
                      <label className="checkboxLabel">바베큐</label>
                      <input onChange={onoptionTypeIndexHandler} name="optionTypeIndex" value="2" className="checkBoxBorder" type="checkbox" />
                      <label className="checkboxLabel">주차장</label>
                    </div>
                    <div className="rowFlexBoxLeft">
                      <input onChange={onoptionTypeIndexHandler} name="optionTypeIndex" value="5" type="checkbox" className="checkBoxBorder" />
                      <label className="checkboxLabel">와이파이</label>
                      <input onChange={onoptionTypeIndexHandler} name="optionTypeIndex" value="6" className="checkBoxBorder" type="checkbox" />
                      <label className="checkboxLabel">샤워장</label>
                      <input onChange={onoptionTypeIndexHandler} name="optionTypeIndex" value="7" className="checkBoxBorder" type="checkbox" />
                      <label className="checkboxLabel">수영장</label>
                    </div>
                    <div className="rowFlexBoxLeft">
                      <input onChange={onoptionTypeIndexHandler} name="optionTypeIndex" value="3" className="checkBoxBorder" type="checkbox" />
                      <label className="checkboxLabel">반려동물</label>
                      <input onChange={onoptionTypeIndexHandler} name="optionTypeIndex" value="4" className="checkBoxBorder" type="checkbox" />
                      <label className="checkboxLabelLong">개인화장실</label>
                    </div>
                  </div>
                </div>
                <button
                  className="researchButton"
                  onClick={() => {
                    campsiteFindByMultiple();
                    changeMap();
                  }}
                >
                  검색
                </button>
              </div>
            </div>
          </div>
          <FindCamping />
        </div>
        <div className="contentsMap">
          <CampingMap serchingCamp={serchingCamp} />
        </div>
      </div>
    </div>
  );
};

export default Camping;
