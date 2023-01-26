import React, { useState, useEffect } from 'react';
import '../BoardDetail/BoardDetail.css';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import Loading from './../Loading/Loading';
import { successAlert } from '../../libs/alert';

const BoardDetail = () => {
  const [postDate, setPostDate] = useState('');
  const [postKind, setPostKind] = useState('');
  const [postNumber, setPostNumber] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);

  const navigate = useNavigate();

  const [commentText, setCommentText] = useState('');

  let postIndex = window.location.pathname.split('/')[2];

  // 게시글 가져오기
  const getPost = () => {
    axios.get('/post/' + postIndex, {}).then((response) => {
      setPostDate(response.data.postDate.split('T')[0]);
      setPostKind(response.data.postKind);
      setPostNumber(response.data.postNumber);
      setPostText(response.data.postText);
      setUserNumber(response.data.user.userNumber);
      setUserNickname(response.data.user.userNickname);
      setPostTitle(response.data.postTitle);
    });
  };

  //게시글 삭제하기
  const deletePost = () => {
    axios.delete('/post/' + postNumber, {}).then((response) => {
      if (response.data) {
        swal('게시글삭제!', '게시글이 삭제되었습니다.😎', 'success');

        postKind === 1 ? navigate('/reviewboard') : navigate('/meetingboard');
      }
    });
  };

  // 게시글에 맞는 댓글 가져오기
  const getComment = () => {
    axios.get('/post/comment/' + postIndex, {}).then((response) => {
      const dataDictionary = {};
      var dicNum = 0;
      for (var i = response.data.length - 1; i >= 0; i--) {
        dataDictionary[dicNum++] = response.data[i];
      }
      var dataArray = Object.values(dataDictionary);
      setData(dataArray);
      setIsLoading(false);
    });
  };

  // 댓글 작성
  const writeComment = () => {
    if (commentText === '') {
      swal('실패!', '댓글을 작성해주세요.😥', 'error');
      return false;
    }
    if (!localStorage.getItem('isLogin', true)) {
      swal('실패!', '로그인 후 가능한 서비스입니다..😥', 'error');
      setCommentText('');
      return false;
    }

    axios
      .post('/comment', {
        commentText: commentText,
        post: {
          postNumber: postNumber,
        },
        user: {
          userNumber: localStorage.getItem('userId'),
        },
      })
      .then((response) => {
        if (localStorage.getItem('isLogin', true)) {
          getComment();
          successAlert('댓글이 등록되었습니다.😎');
          setCommentText('');
        }
      })
      .catch((error) => {});
  };

  //댓글삭제
  const deleteComment = (commentNumber) => {
    axios.delete('/comment/' + commentNumber, {}).then((response) => {
      if (response.data) {
        successAlert('댓글이 삭제되었습니다.😥');
        getComment();
      }
    });
  };

  const update = () => {
    navigate('/boardwrite/' + postIndex);
  };

  // 페이징
  const handlePageChange = (page) => {
    setPage(page);
  };

  const onCommentHandler = (event) => {
    setCommentText(event.currentTarget.value);
  };

  const Comment = userNumber == localStorage.getItem('userId');

  useEffect(() => {
    getPost();
    setTimeout(() => {
      getComment();
      deleteComment();
    }, 500);
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="boardDetailBox">
          <div className="boardDetailSection">
            <div className="boardDetailInfomation">
              <div className="boardDetailTitle boardDetailOption" value={postNumber}>
                {postTitle}
              </div>
              <div className="boardDetailDate boardDetailOption">
                <div>
                  {Comment ? (
                    <>
                      <button onClick={update}>수정</button>
                      <button type="button" onClick={deletePost}>
                        삭제
                      </button>
                    </>
                  ) : null}
                </div>
                <div>{postDate}</div>
              </div>
            </div>
            <div className="boardDetailInfomation">
              <div className="boardDetailKind ">
                {postKind === 1 ? <Link to={'/reviewboard'}>◀후기 게시판</Link> : <Link to={'/meetingboard'}>◀지역 별 모임 게시판</Link>}
              </div>
              <div className="boardDetailNickname" value={userNumber}>
                {userNickname}
              </div>
            </div>
            <div className="boardDetailText" dangerouslySetInnerHTML={{ __html: postText }}></div>
          </div>
          <div className="boardDetailFooter">
            <div className="boardDetailCommentBox">
              <textarea
                maxLength={200}
                type="text"
                className="comment"
                value={commentText}
                onChange={onCommentHandler}
                placeholder="댓글을 달아주세요!(200자이내)"
              ></textarea>
              <button className="commentsubmit" onClick={() => writeComment()}>
                등록
              </button>
            </div>
            <div className="commentArea">
              <table className="commentTable">
                <thead>
                  <tr>
                    <th className="tableComment">댓글</th>
                    <th className="tableNickname">작성자</th>
                    <th className="tableDate">작성 날짜</th>
                  </tr>
                </thead>
                <tbody>
                  {data.slice(items * (page - 1), items * (page - 1) + items).map((v, i) => {
                    return (
                      <tr key={i}>
                        <td value={v.commentNumber} className="commentText">
                          {v.commentText}
                        </td>
                        <td value={v.user.userNumber} className="commentWriter">
                          {v.user.userNickname}
                        </td>
                        <td className="commentDate">{v.commentDate.split('T')[0]}</td>
                        <td className="commentDelete">
                          {v.user.userNumber == localStorage.getItem('userId') ? (
                            <button type="button" onClick={() => deleteComment(v.commentNumber)}>
                              삭제
                            </button>
                          ) : null}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
      )}
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
export default BoardDetail;
