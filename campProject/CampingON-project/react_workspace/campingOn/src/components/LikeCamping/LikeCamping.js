import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./LikeCamping.css";
import heartOn from "../../images/heart.png";
import { useNavigate } from 'react-router-dom';


const LikeCamping = () => {

  const [data, setData] = useState([]);
  const [pick, setPick] = useState(true);
  const [heart, setHeart] = useState(heartOn);
  

  const navigate = useNavigate();

  const getUserPick = () => {
    axios.get('/pick/' + localStorage.getItem('userId'), {

    }).then((response) => {
      setData(response.data);
    })
  }

  useEffect(getUserPick, []);

  const doClick = (campIdx) => {
    if (pick) {
      console.log("찜 취소")
      axios.delete('/pick/' + campIdx + '&' + localStorage.getItem('userId'), {
      }).then((response) => {
        window.location.reload();
      })
    }
  }

  return (
    <div className="wholeWrapLikeCamping">
      <h1 className="titleFontLikeCamping">찜한 캠핑장</h1>
      {data.map((d, i) => {
        return (
          <div className="contentsLikeCamping" key={i}>
            <div className="contentsImgLikeCamping">
            </div>
            <div className="contentsTextLikeCamping">
              <div className="contentsRowFlexLikeCamping">
                <img
                  onClick={() => doClick(d.campsite.campsiteIndex)}
                  src={heart}
                  alt="찜아이콘"
                  className="contentsHeartLikeCamping"
                ></img>
                <h2 className="contentsNameLikeCamping">{d.campsite.campsiteName}</h2>
              </div>
              <p className="contentsInfoLikeCamping">{d.campsite.campsiteIntroduction}</p>
              <p className="contentsInfoLikeCamping">
                대표옵션 :
                {d.campsite.barbecue ? "바베큐 장, " : null}
                {d.campsite.store ? "편의점, " : null}
                {d.campsite.parking ? "주차장, " : null}
                {d.campsite.pet ? "반려동물, " : null}
                {d.campsite.bathroom ? "화장실, " : null}
                {d.campsite.wifi ? "WI-FI, " : null}
                {d.campsite.shower ? "샤워 시설, " : null}
                {d.campsite.pool ? "수영장" : null}

              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LikeCamping;
