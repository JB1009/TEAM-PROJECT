import React, { useEffect, useState } from 'react';
import DetailInquiryAnswer from './DetailInquiryAnswer';
import DetailInquiryHistory from './DetailInquiryHistory';
import axios from 'axios';

const ShowInquiryHistory = () => {
  let [ShowMyAnswerList, ShowMyAnswerListset] = useState('');
  const [data, setData] = useState([]);

  const getMyInquiry = () => {
    axios.get('/myInquiry/' + localStorage.getItem('userId'), {}).then((response) => {
      console.log(response);
      setData(response.data);
    });
  };
  useEffect(getMyInquiry, []);

  return (
    <div>
      <table className="inquiryTable">
        <thead>
          <tr>
            <th className="inquiryNumber">번호</th>
            <th className="inquiryTitle">문의 제목</th>
            <th className="inquiryDate">날짜</th>
            <th className="answerStatus">답변 </th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <>
                <tr
                  key={i}
                  onClick={() => {
                    ShowMyAnswerListset(v.inquiryNumber);
                  }}
                >
                  <td className="inquiryNumber">{v.inquiryNumber}</td>
                  <td className="inquiryTitle">{v.inquiryTitle}</td>
                  <td className="inquiryDate">{v.inquiryDate.split('T')[0]}</td>
                  <td className="answerStatus">{v.answerText == null ? '답변 대기 중' : '답변 완료'}</td>
                </tr>
                <tr>{ShowMyAnswerList == v.inquiryNumber ? <DetailInquiryHistory inquiryIndex={v.inquiryNumber} /> : null}</tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowInquiryHistory;
