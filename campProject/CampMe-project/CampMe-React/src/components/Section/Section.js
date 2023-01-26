import React, { useState, useEffect } from 'react';
import './Section.css';
import SimpleSlide from './../SimpleSlide/SimpleSlide';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Section = ({ email }) => {
  const [noticeData, setNoticeData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [meetingData, setMeetingData] = useState([]);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getNoticePost = () => {
    axios.get('/board/notice').then((response) => {
      setNoticeData(response.data);
    });
  };

  const getReviewBorad = () => {
    axios.get('/board/top5/1', {}).then((response) => {
      setReviewData(response.data);
    });
  };

  const getMeetingBorad = () => {
    axios.get('/board/top5/2', {}).then((response) => {
      setMeetingData(response.data);
    });
  };

  const getDetailPost = (e) => {
    navigate('/BoardDetail/' + e);
  };

  const reviewboard = () => {
    navigate('/reviewboard');
  };

  const meetingboard = () => {
    navigate('/meetingboard');
  };

  useEffect(() => {
    getNoticePost();
    getReviewBorad();
    getMeetingBorad();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="Section">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="MainSection">
          <div className="slider">
            <SimpleSlide></SimpleSlide>
          </div>

          <div className="menu">
            {/* 리뷰 게시판 */}
            <div className="review">
              <div className="reviewHeader">
                <h4>후기게시판</h4>
                <button onClick={reviewboard}>더보기</button>
              </div>
              <table className="top5Board">
                <thead>
                  <tr>
                    <th className="top5BoardTitle">제목</th>
                    <th className="top5Writer">작성자</th>
                    <th className="top5WriteDate">작성날짜</th>
                  </tr>
                </thead>
                <tbody className="data">
                  {noticeData.map((noticeData) => {
                    return (
                      <tr
                        key={noticeData.postNumber}
                        value={noticeData.postNumber}
                        onClick={() => getDetailPost(noticeData.postNumber)}
                        className="notice"
                      >
                        <td className="top5BoardTitle">{noticeData.postTitle}</td>
                        <td className="top5Writer">{noticeData.user.userNickname}</td>
                        <td className="top5WriteDate">{noticeData.postDate.split('T')[0]}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tbody>
                  {reviewData.map((reviewData) => {
                    return (
                      <tr key={reviewData.postNumber} value={reviewData.postNumber} onClick={() => getDetailPost(reviewData.postNumber)}>
                        <td className="top5BoardTitle">{reviewData.postTitle}</td>
                        <td className="top5Writer">{reviewData.user.userNickname}</td>
                        <td className="top5WriteDate">{reviewData.postDate.split('T')[0]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* 지역별 모임 게시판 */}
            <div className="meeting">
              <div className="meetingHeader">
                <h4>지역별모임게시판</h4>
                <button onClick={meetingboard}>더보기</button>
              </div>
              <table className="top5Board">
                <thead>
                  <tr>
                    <th className="top5BoardTitle">제목</th>
                    <th className="top5Writer">작성자</th>
                    <th className="top5WriteDate">작성날짜</th>
                  </tr>
                </thead>
                <tbody className="data">
                  {noticeData.map((noticeData) => {
                    return (
                      <tr
                        key={noticeData.postNumber}
                        value={noticeData.postNumber}
                        onClick={() => getDetailPost(noticeData.postNumber)}
                        className="notice"
                      >
                        <td className="top5BoardTitle">{noticeData.postTitle}</td>
                        <td className="top5Writer">{noticeData.user.userNickname}</td>
                        <td className="top5WriteDate">{noticeData.postDate.split('T')[0]}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tbody>
                  {meetingData.map((meetingData) => {
                    return (
                      <tr key={meetingData.postNumber} value={meetingData.postNumber} onClick={() => getDetailPost(meetingData.postNumber)}>
                        <td className="top5BoardTitle" style={{ width: '50%' }}>
                          {meetingData.postTitle}
                        </td>
                        <td className="top5Writer">{meetingData.user.userNickname}</td>
                        <td className="top5WriteDate">{meetingData.postDate.split('T')[0]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* 이용안내 (회사안내로 바뀔수도있음) */}
          {/* <div className="information">
            <p>캠핑온 이용안내 바로가기💨💨</p>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Section;
