import React, { useState, useEffect } from 'react';
import '../BoardWrite/BoardWrite.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const API_URL = 'http://localhost:8080'; //API주소
const UPLOAD_ENDPOINT = 'api/v1/image'; //업로드 URL 주소

const BoardWrite = () => {
  const [editor, setEditor] = useState(null); //게시물 내용 담기
  const [isFile, setFile] = useState(null); //게시물 사진 담기

  const [postTitle, setPostTitle] = useState('');
  const [postKind, setPostKind] = useState('');
  const [postDate, setPostDate] = useState('');
  const [postText, setPostText] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const navigate = useNavigate();

  let postIndex = window.location.pathname.split('/')[2];
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise(() => {
          loader.file.then((file) => {
            setFile(file);
          });
        });
      },
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  // 게시글 가져오기
  const getPost = () => {
    axios.get('/post/' + postIndex, {}).then((response) => {
      console.log(response);
      setPostDate(response.data.postDate.split('T')[0]);
      setPostKind(response.data.postKind);
      setPostText(response.data.postText);
      setUserNumber(response.data.user.userNumber);
      setPostTitle(response.data.postTitle);
    });
  };
  useEffect(getPost, []);

  //게시글 수정하기
  const updatePost = () => {
    axios
      .patch('/post', {
        postNumber: postIndex,
        postType: 1,
        postTitle: postTitle,
        postDate: postDate,
        postKind: postKind,
        postText: BoardContent.content,
        user: {
          userNumber: userNumber,
        },
      })
      .then((response) => {
        swal('등록성공!', '수정되었습니다.😎', 'success');
        postKind == 1 ? navigate('/reviewboard') : navigate('/meetingboard');
      });
  };

  const [BoardContent, setBoardContent] = useState({
    title: '',
    content: '',
  });
  //게시글 작성하기
  const doPost = () => {
    if (isFile !== null) {
      const body = new FormData();
      body.append('image', isFile);
      body.append('contents', editor);
      body.append('numbers', localStorage.getItem('userId'));
      new Promise((resolve, reject) => {
        //API 전송
        fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
          method: 'post',
          body: body,
        })
          .then((res) => res.json())
          .catch((err) => {
            reject(err);
          });
      });
    }

    if (postIndex > 0) {
      updatePost();
      return;
    }
    if (BoardContent.content === '' || postTitle === '') {
      swal('실패!', '제목 또는 게시글을 작성해주세요.😥', 'error');
      return false;
    }
    if (postKind == 1 || postKind == 2) {
      axios
        .post('/post', {
          postType: 1,
          postKind: postKind,
          postTitle: postTitle,
          postText: BoardContent.content,
          user: {
            userNumber: localStorage.getItem('userId'),
          },
        })
        .then((response) => {
          // 성공
          if (response.data) {
            swal('등록성공!', '후기가 등록되었습니다.😎', 'success');
            postKind == 1 ? navigate('/reviewboard') : navigate('/meetingboard');
          }
        })
        .catch((error) => {
          swal('실패!', '정보를 다시확인해주세요.😥', 'error');
        });
    } else {
      swal('실패!', '게시판을 선택해주세요.😥', 'error');
    }
  };

  const onPostTitleHandler = (event) => {
    setPostTitle(event.currentTarget.value);
  };

  const onPostKindHandler = (event) => {
    setPostKind(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className="conainer">
        <div className="boardWriteSection">
          <div className="boardWriteContainer">
            <div className="form-wrapper" onSubmit={onSubmitHandler}>
              <h3>게시글 작성</h3>
              <div className="title">
                <input
                  onChange={onPostTitleHandler}
                  className="title-input"
                  maxLength={20}
                  type="text"
                  name="title"
                  value={postTitle}
                  placeholder="제목을 입력해주세요.(20자이내)"
                />
                <select className="title-option" value={postKind} onChange={onPostKindHandler}>
                  <option>게시판 선택</option>
                  <option value="1">후기 게시판</option>
                  <option value="2">지역별 모임</option>
                </select>
              </div>
              <div className="class">
                <CKEditor
                  editor={ClassicEditor}
                  data={postText}
                  config={{
                    extraPlugins: [uploadPlugin],
                    placeholder: '내용을 입력 해주세요.(255자이내)',
                  }}
                  onReady={(editor) => {}}
                  onBlur={(event, editor) => {}}
                  onFocus={(event, editor) => {}}
                  onChange={(event, editor) => {
                    editor.getData();

                    setBoardContent({
                      ...BoardContent,
                      content: editor.getData(),
                    });
                  }}
                />
              </div>
              <button className="submit-button" onClick={doPost}>
                등록하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
