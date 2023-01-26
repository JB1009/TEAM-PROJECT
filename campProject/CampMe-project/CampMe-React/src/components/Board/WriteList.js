import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../BoardStyle/Board.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from './../Loading/Loading';

const WriteList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getPost = () => {
    axios.get('/user/post/' + localStorage.getItem('userId'), {}).then((response) => {
      setData(response.data);
      setIsLoading(false);
    });
  };

  const getDetailPost = (e) => {
    navigate('/BoardDetail/' + e);
  };

  useEffect(() => {
    setTimeout(() => {
      getPost();
    }, 500);
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <div className="App">
      <div className="container">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="boardSection">
            <div className="boardContainer">
              <div className="details">
                <div className="recentOrders">
                  <div className="cardHeader">
                    <h2>내가 쓴 게시판</h2>
                    <Link to="/BoardWrite">
                      <button className="write">글쓰기</button>
                    </Link>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th className="BoardNum">번호</th>
                        <th className="BoardTitle" style={{ width: '50%' }}>
                          제목
                        </th>
                        <th className="writer">작성자</th>
                        <th className="writeDate">작성일</th>
                      </tr>
                    </thead>
                    <tbody id="Data">
                      {data.slice(items * (page - 1), items * (page - 1) + items).map((v, i) => {
                        return (
                          <tr key={i} value={v.postNumber} onClick={() => getDetailPost(v.postNumber)}>
                            <td className="BoardNum">{v.postNumber}</td>
                            <td className="BoardTitle" style={{ width: '50%' }}>
                              {v.postTitle}
                            </td>
                            <td className="writer">{v.user.userNickname}</td>
                            <td className="writeDate">{v.postDate.split('T')[0]}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <PaginationBox>
                <Pagination
                  activePage={page}
                  itemsCountPerPage={items}
                  totalItemsCount={data.length - 1}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange}
                ></Pagination>
              </PaginationBox>
            </div>
          </div>
        )}
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

export default WriteList;
