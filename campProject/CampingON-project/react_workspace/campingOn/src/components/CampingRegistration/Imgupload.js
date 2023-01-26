import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Settings } from '../../common/settings';
import './CampingRegistration.css';
// import Test from './Test';
const Imgupload = () => {
  const [showImages, setShowImages] = useState([]);
  // 이미지 상대경로 저장
  const handleAddImages = (e) => {
    const imageLists = e.target.files;
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
  };

  return (
    <div>
      <Slider>
        {showImages.map((image, id) => (
          <div className="capingSiteSlide" key={id}>
            <img src={image} alt={`${image}-${id}`} />
            <button className="deleteImageButton" onClick={() => handleDeleteImage(id)}>
              X
            </button>
          </div>
        ))}
      </Slider>
      <label htmlFor="inputFile" onChange={handleAddImages}>
        <input type="file" id="inputFile" multiple accept='".jpg,.jpeg,.png' style={{ display: 'none' }} />
        <span className="inputFile">사진추가</span>
      </label>
      {/* // 저장해둔 이미지들을 순회하면서 화면에 이미지 출력 */}
    </div>
  );
};

export default Imgupload;
