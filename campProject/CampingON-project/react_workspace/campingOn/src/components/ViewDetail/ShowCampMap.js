import React from 'react';
import { useEffect } from 'react';
const { kakao } = window;
const ShowCampMap = ({ campAddress }) => {
  useEffect(() => {
    // 지도를 생성
    const campdata = campAddress;
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);
    // 주소-좌표 변환 객체를 생성
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색
    geocoder.addressSearch(campdata.campsiteAddress, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시
        var infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;border :none;text-align:center;padding:6px 0;">' + campdata.campsiteName + '</div>',
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동
        map.setCenter(coords);
      }
    });
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: '100%',
        height: '250px',
      }}
    ></div>
  );
};

export default ShowCampMap;
