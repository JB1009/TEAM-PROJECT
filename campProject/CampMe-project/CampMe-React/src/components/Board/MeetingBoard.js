import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../BoardStyle/Board.css';
import swal from 'sweetalert';
import Loading from './../Loading/Loading';

const Meeting = () => {
  const [data, setData] = useState([]);
  const [noticeData, setNoticeData] = useState([]);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getNoticePost = () => {
    axios.get('/board/notice').then((response) => {
      setNoticeData(response.data);
      setIsLoading(false);
    });
  };

  const getPost = () => {
    axios.get('/board/post', {}).then((response) => {
      const dataDictionary = {};
      var dicNum = 0;
      for (var i = response.data.length - 1; i >= 0; i--) {
        if (response.data[i].postKind === 2) {
          dataDictionary[dicNum++] = response.data[i];
          setIsLoading(false);
        }
      }

      var dataArray = Object.values(dataDictionary);
      setData(dataArray);
    });
  };

  const getDetailPost = (e) => {
    navigate('/BoardDetail/' + e);
  };

  useEffect(() => {
    setTimeout(() => {
      getPost();
      getNoticePost();
    }, 700);
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const write = () => {
    if (localStorage.getItem('isLogin', true)) {
      navigate('/BoardWrite');
    } else {
      swal('작성 불가!', '로그인 후 가능한 서비스입니다.', 'error');
      localStorage.clear();
      navigate('/login');
    }
  };

  return (
    <div className="container">
      <div className="boardSection">
        <div className="boardContainer">
          <div className="details">
            {isLoading ? (
              <Loading />
            ) : (
              <div className="recentOrders">
                <div className="cardHeader">
                  <h2>지역별 모임 게시판</h2>
                  <button className="write" onClick={write}>
                    글쓰기
                  </button>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th className="BoardNum">번호</th>
                      <th className="BoardTitle">제목</th>
                      <th className="writer">작성자</th>
                      <th className="writeDate">작성일</th>
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
                          <td className="BoardNum">{noticeData.postNumber}</td>
                          <td className="BoardTitle">{noticeData.postTitle}</td>
                          <td className="writer">{noticeData.user.userNickname}</td>
                          <td className="writeDate">{noticeData.postDate.split('T')[0]}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tbody className="data">
                    {data.slice(items * (page - 1), items * (page - 1) + items).map((v, i) => {
                      return (
                        <tr key={i} value={v.postNumber} onClick={() => getDetailPost(v.postNumber)}>
                          <td className="BoardNum">{v.postNumber}</td>
                          <td className="BoardTitle">{v.postTitle}</td>
                          <td className="writer">{v.user.userNickname}</td>
                          <td className="writeDate">{v.postDate.split('T')[0]}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <PaginationBox>
            <Pagination
              activePage={page}
              itemsCountPerPage={items}
              totalItemsCount={data.length}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            ></Pagination>
          </PaginationBox>
        </div>
      </div>
    </div>
  );
};
const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #85c89a;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #85c89a;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: green;
  }
`;
export default Meeting;
