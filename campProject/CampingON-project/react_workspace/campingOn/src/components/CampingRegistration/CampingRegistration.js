import React, { useEffect, useState } from 'react';
import PopupPostCode from './PopupPostCode';
import './CampingRegistration.css';
import PopupDom from './PopupDom';
import Imgupload from './Imgupload';
import axios from 'axios';
import swal from 'sweetalert';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CampingRegistration.css';
const CampingRegistration = (data) => {
  const [campsiteName, setCampingSitename] = useState('');
  const [campsiteAddress, setCampsiteAddress] = useState('');
  const [campsiteIntroduction, setCampsiteIntroduction] = useState('');
  const [campsiteGuide, setCampsiteGuide] = useState('');
  const [typeIndex, setTypeIndex] = useState([]);
  const [campsiteLocal, setcampsiteLocal] = useState('서울');
  const [campsitePrice, setcampsitePrice] = useState('');
  const [optionTypeIndex, setOptionTypeIndex] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [datas, setDatas] = useState([]);

  const [showImages, setShowImages] = useState([]);

  const [selectedFile, setSelectedFile] = useState([]);

  const [campIdx, setCampIdex] = useState('');

  // 이미지 상대경로 저장
  const handleAddImages = (e) => {
    const imageLists = e.target.files;
    for (var i = 0; i < imageLists.length; i++) {
      selectedFile.push(e.target.files[i]);
    }
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      //미리보기 가능하게 변수화
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
    selectedFile.filter((_, index) => index !== id);
  };

  //데이터 업데이트
  const register = () => {
    if (isClick) {
      return;
    }
    setIsClick(true);

    setOptionTypeIndex(...optionTypeIndex);

    let options = [false, false, false, false, false, false, false, false];

    for (let i = 0; i < options.length; i++) {
      options[optionTypeIndex[i]] = true;
    }

    const formData = new FormData();
    for (var i = 0; i < selectedFile.length; i++) {
      formData.append('image', selectedFile[i]);
    }
    formData.append('camp', [
      campsiteName,
      campsiteAddress,
      campsiteIntroduction,
      campsiteGuide,
      campsiteLocal,
      campsitePrice,
      options[0],
      options[1],
      options[2],
      options[3],
      options[4],
      options[5],
      options[6],
      options[7],
      typeIndex,
      localStorage.getItem('userId'),
    ]);

    axios({
      method: 'post',
      url: '/api/v1/image',
      data: formData,
    }).then((res) => {
      if (res.data) {
        // 캠핑장 등록 성공
        swal('성공', '캠핑장이 등록되었습니다!', 'success');
      } else swal('잠깐', '등록정보를 확인해주세요', 'error');
    });
  };
  const oncampingSitenameHandler = (event) => {
    setCampingSitename(event.currentTarget.value);
  };
  const oncampsiteAddressHandler = (event) => {
    setCampsiteAddress(event.currentTarget.value);
  };
  const oncampsiteIntroductionHandler = (event) => {
    setCampsiteIntroduction(event.currentTarget.value);
  };
  const oncampsiteGuideHandler = (event) => {
    setCampsiteGuide(event.currentTarget.value);
  };
  const ontypeIndexHandler = (event) => {
    setTypeIndex(event.currentTarget.value);
  };
  const oncampsiteLocalHandler = (event) => {
    setcampsiteLocal(event.currentTarget.value);
  };
  const oncampsitePriceHandler = (event) => {
    setcampsitePrice(event.currentTarget.value);
  };
  const onoptionTypeIndexHandler = (event) => {
    if (event.currentTarget.checked && optionTypeIndex.indexOf(event.currentTarget.value) === -1) {
      optionTypeIndex.push(event.currentTarget.value);
    } else {
      let idx = optionTypeIndex.indexOf(event.currentTarget.value);

      optionTypeIndex.splice(idx, 1);
    }
  };

  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };
  //우편번호 가져오기
  return (
    <div className="CampingRegistration">
      <Slider className="capingSiteSlide">
        {showImages.map((image, id) => (
          <div key={id}>
            <img src={image} alt={`${image}-${id}`} />
            <button className="deleteImageButton" onClick={() => handleDeleteImage(id)}>
              X
            </button>
          </div>
        ))}
      </Slider>
      <from>
        <label htmlFor="inputFile" onChange={handleAddImages}>
          <input type="file" id="inputFile" multiple accept='".jpg,.jpeg,.png' style={{ display: 'none' }} />
          <span className="inputFile">사진추가</span>
        </label>

        <div className="registerCampingBox">
          <label className="researchName">캠핑장 이름</label>
          <input onChange={oncampingSitenameHandler} name="campsiteName" className="researchInput" type="text"></input>
          <div>
            <label className="researchName">주소</label>
            <input defaultValue={data.fullAddress} className="postCode" onChange={oncampsiteAddressHandler} type="text"></input>
            <button className="postCode" type="button" onClick={openPostCode}>
              주소검색
            </button>
            <label className="researchName"></label>
            <input className="researchInput" type="text">
              {data.zonecode}
            </input>

            <div id="popupDom">
              {isPopupOpen && (
                <PopupDom>
                  <PopupPostCode onClose={closePostCode} />
                </PopupDom>
              )}
            </div>
            <div>
              <label className="researchName">지역</label>
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
          </div>
          <div>
            <label className="researchNameLeft">캠핑장 상세설명</label>
            <textarea className="campsiteTextarea" name="campsiteIntroduction" onChange={oncampsiteIntroductionHandler} type="text" />
          </div>
          <div>
            <label className="researchNameLeft">캠핑장 주의사항</label>
            <textarea className="campsiteTextarea" name="campsiteGuide" onChange={oncampsiteGuideHandler} type="text" />
          </div>
          <div>
            <label className="researchNameLeft">캠핑유형</label>
            <div className="rowFlexBoxTablet">
              <div className="rowFlexBoxLeft">
                <input onChange={ontypeIndexHandler} name="typeIndex" value="1" className="radioBox" type="radio" />
                <label className="radioLabel">캠핑</label>
                <input onChange={ontypeIndexHandler} name="typeIndex" value="2" className="radioBox" type="radio" />
                <label className="radioLabel">글램핑</label>
                <input onChange={ontypeIndexHandler} name="typeIndex" value="3" className="radioBox" type="radio" />
                <label className="radioLabel">카라반</label>
                <input onChange={ontypeIndexHandler} name="typeIndex" value="4" className="radioBox" type="radio" />
                <label className="radioLabel">차박</label>
              </div>
            </div>
          </div>
          <div>
            <label className="researchNameLeft">옵션선택</label>
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
            <div>
              <label className="researchPrice">가격</label>
              <input type="number" onChange={oncampsitePriceHandler} className="campsitePrice" name="campsitePrice"></input>
            </div>
          </div>

          <button className="researchButton" onClick={() => (showImages.length === 0 ? swal('잠깐', '사진을 등록해주세요', 'error') : register())}>
            등록
          </button>
        </div>
      </from>
    </div>
  );
};

export default CampingRegistration;
