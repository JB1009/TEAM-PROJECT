import React from 'react';
import '../../common/init.css';
import '../../common/sizes.css';
import '../../App.css';
import './Recommend.css';
import recommendAll from '../../images/recomendAll.jpg';
import recommendseoul from '../../images/recomendSeoul.jpg';
import recommendgyeongi from '../../images/recommendGyeongi.jpg';
import recommendjeju from '../../images/recomendJeju.jpg';
import recommendgangwon from '../../images/recomendGangwon.jpg';
import recommendgyeongsang from '../../images/recomendGyeongsang.jpg';
import recommendChung from '../../images/recommendChung.jpg';
import recommendjeonrado from '../../images/recommendJeonrado.jpg';
import festivalPage1 from '../../images/festivalPage1.jpg';
import festivalPage2 from '../../images/festivalPage2.jpg';
import festivalPage3 from '../../images/festivalPage3.jpg';
import festivalPage4 from '../../images/festivalPage4.jpg';
import festivalPage5 from '../../images/festivalPage5.jpg';
const Recommend = () => {
  return (
    <div className="wholeWrapRecommend">
      <h2 className="titleFontRecommend">지역별 추천 여행지</h2>
      <div className="wrapBoxRecommend">
        <div className="flexBoxRecommend">
          <img className="mediumImgBoxRecommend" src={recommendAll} alt="전국" />
          <img className="mediumImgBoxRecommend" src={recommendseoul} alt="서울" />
        </div>
        <div className="flexBoxRecommend">
          <img className="smallImgBoxRecommend" src={recommendgyeongi} alt="경기도" />
          <img className="smallImgBoxRecommend" src={recommendjeju} alt="제주도" />
          <img className="smallImgBoxRecommend" src={recommendgangwon} alt="강원도" />
        </div>
        <div className="flexBoxRecommend">
          <img className="smallImgBoxRecommend" src={recommendgyeongsang} alt="경상도" />
          <img className="smallImgBoxRecommend" src={recommendChung} alt="충청도" />
          <img className="smallImgBoxRecommend" src={recommendjeonrado} alt="전라도" />
        </div>
      </div>
      <div className="underBarRecommend">
        <span className="infoTitleRecommend">추천축제</span>
      </div>
      <div className="infoBoxRecommend">
        <div className="infoImgRecommend">
          <img src={festivalPage1} alt="축제이미지" />
        </div>
        <div className="infoTextRecommend">
          <h2 className="infoH2Recommend">제11회 홍천강 꽁꽁축제이름</h2>
          <p className="infoPRecommend">축제기간 : 2023. 1. 13. ~ 24. / 09:00 - 18:00</p>
          <p className="infoPRecommend">
            축제설명 : 매년 겨울 인삼 송어와 함께하는 홍천강 꽁꽁 축제가 강원도 홍천에서 펼쳐진다. 남녀노소 손쉽게 즐길 수 있는 얼음낚시와 맨손으로
            잡는 맨손 송어 잡기 그리고 눈으로 보고 낚시를 할 수 있어 아이들에게 인기 만점인 가족 실내 낚시터까지! 올해는 몸길이 45cm 이상 슈퍼인
            삼송어와 함께 더욱 짜릿한 즐거음을 느껴보자. 이외에도 실내 가족 체험관과, 눈썰매장, 시골의 정취를 느낄 수 있는 초가집 풍경, 겨울철 민속
            놀이터, 향토음식점 등 먹거리, 놀 거리가 다양하게 준비되어 있다.
          </p>
        </div>
      </div>
      <div className="infoBoxRecommend">
        <div className="infoImgRecommend">
          <img src={festivalPage2} alt="축제이미지" />
        </div>
        <div className="infoTextRecommend">
          <h2 className="infoH2Recommend">2023 얼음나라화천 산천어축제</h2>
          <p className="infoPRecommend">축제기간 : 2023. 1. 7. ~ 29./ 09:00 - 18:00</p>
          <p className="infoPRecommend">
            축제설명 : 세계가 주목한 이색 겨울축제! 강원도 화천에서 열리는 얼음 나라 화천산천어축제는 2011년 미국 CNN이 선정한 ‘겨울의 7대 불가사의’
            중 하나로 꼽힌 이색 겨울축제이다. 물 맑기로 유명한 화천천이 겨울 추위에 꽁꽁 얼어붙는 매년 1월에 축제가 열리며, 얼음낚시로 ‘계곡의
            여왕’이라 불리는 산천어를 잡을 수 있다. 남녀노소 누구나 쉽고 재미있게 산천어 얼음낚시의 손맛을 즐길 수 있어서 매년 100만 명 이상이
            방문하고 있다. 산천어축제의 최대 묘미는 직접 잡은 산천어를 그 자리에서 맛볼 수 있다는 점이다. 300마리를 한꺼번에 구울 수 있는 초대형
            구이통을 이용해서 노릇노릇 맛있게 산천어를 구워 먹을 수 있으며, 회 센터에서 먹기 좋게 회를 떠서 싱싱한 산천어의 맛을 즐길 수도 있다.
            얼음낚시 이외에도 루어낚시, 수상 낚시, 산천어 맨손 잡기 체험도 할 수 있다. 아이들이 좋아하는 얼음 미끄럼틀과 눈썰매, 봅슬레이,
            피겨스케이트, 얼음축구 등 재미있는 체험도 가능하다.
          </p>
        </div>
      </div>
      <div className="infoBoxRecommend">
        <div className="infoImgRecommend">
          <img src={festivalPage3} alt="축제이미지" />
        </div>
        <div className="infoTextRecommend">
          <h2 className="infoH2Recommend">제30회 태백산 눈축제</h2>
          <p className="infoPRecommend">축제기간 : 2023. 1. 27. ~ 31. / 10:30 ~ 18:00</p>
          <p className="infoPRecommend">
            1994년 제1회를 시작으로 개최되어 30회를 맞이하는 태백산 눈 축제는 해마다 다른 주제로 웅장하고 섬세한 눈 조각들을 만나볼 수 있으며, 전국
            대학생의 예술성을 뽐낼 수 있는 전국 대학생 눈 조각 경연 대회 와 아름다운 눈으로 뒤덮인 태백산의 설경을 체험할 수 있는 태백산 전국 눈꽃
            등반 대회가 개최된다. 또한 각종 공연행사와 체험 프로그램을 통해 태백의 겨울을 만끽할 수 있는 다채로운 행사들이 마련되어 있다.
          </p>
        </div>
      </div>
      <div className="infoBoxRecommend">
        <div className="infoImgRecommend">
          <img src={festivalPage4} alt="축제이미지" />
        </div>
        <div className="infoTextRecommend">
          <h2 className="infoH2Recommend">2023년 여주 남한강 대보름 달집태우기 축제</h2>
          <p className="infoPRecommend">축제기간 : 2023. 2. 5. / 14:00 - 21:00</p>
          <p className="infoPRecommend">
            축제설명 : 여주 달맞이 광장에서는 정월대보름에 높이 15m 지름 12m인 달집태우기 축제를 연다. 여주 정월대보름 달집태우기 축제는 쥐불놀이용
            깡통 만들기, 연 만들기와 함께 참여한 주민들이 한 해의 계획과 소망을 적은 소원 지를 작성해 달집에 미리 묶어 놓아 축제를 준비한다. 재미있고
            다양한 프로그램과 이벤트로 여러분을 맞을 준비를 하고 있다. 여주 정월대보름 달집태우기 축제에 방문하셔서 즐겁고 재미있는 추억을 만드시기
            바란다. 각종 공연행사, 이벤트 행사, 체험행사 등 한번 오신 방문객님이 다시 여주 정월대보름 달집태우기 축제를 찾을 수 있도록 준비했다.
          </p>
        </div>
      </div>
      <div className="infoBoxRecommend">
        <div className="infoImgRecommend">
          <img src={festivalPage5} alt="축제이미지" />
        </div>
        <div className="infoTextRecommend">
          <h2 className="infoH2Recommend">안동 암산얼음축제</h2>
          <p className="infoPRecommend">축제기간 : 2023. 1. 28. ~ 2. 5. / 10:00 ~ 17:00</p>
          <p className="infoPRecommend">
            축제설명 : 대한(大寒)이와 소한(小寒)이의 신나는 겨울여행 더 즐거운 체험! 더 짜릿한 놀이! 천혜의 자연 절경을 고스란히 간직한 안동
            암산유원지에서 펼쳐지는 영남 최대 겨울축제!로 여러분을 초대한다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
