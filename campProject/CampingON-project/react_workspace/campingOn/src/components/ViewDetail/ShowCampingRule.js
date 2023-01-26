import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ShowCampingRule = (props) => {
  const campsiteIndex = window.location.pathname.split('/')[2];
  const { onClose } = props;
  const [campsiteGuide, setcampsiteGuide] = useState('');
  const getcampsiteInform = () => {
    axios.get('/campsite/' + campsiteIndex, {}).then((response) => {
      console.log(response);
      setcampsiteGuide(response.data.campsiteGuide);
    });
  };
  useEffect(getcampsiteInform, []);
  return (
    <div className="wholeWrapShowCampingRule">
      <div className="wholeShowCampingRule">
        <div className="titleShowCampingRule">
          이용 시 주의사항{' '}
          <button
            onClick={() => {
              onClose(false);
            }}
          >
            X
          </button>
        </div>
        <div className="infoShowCampingRule">
          <div className="textShowCampingRule colorRed">
            <br />
            캠핑장 이용수칙을 읽지 않고 발생하는 불이익에 대해 책임지지 않습니다. <br />
          </div>
          <div className="textShowCampingRule">
            {' '}
            <br />
            [주의사항]
          </div>
          <div className="textShowCampingRule">{campsiteGuide}</div>
          <div className="textShowCampingRule">
            <br />
            1. 입실전날 저녁에 담당자 안내문자 발송됩니다.
            <br />
            2. 애견동반불가
            <br />
            3. 흡연구역외에 흡연불가
            <br />
            <br />
            수영장의 이용시간은 입실~일몰 입니다. (계절에 따라 변경)
            <br />
            미온수로 이용 가능합니다.
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCampingRule;
