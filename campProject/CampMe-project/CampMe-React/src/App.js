import './App.css';
import Section from './components/Section/Section';
import Join from './components/Join/Join';
import Login from './components/Login/Login';
import MyPage from './components/MyPage/MyPage';
import PwFind from './components/Find/PwFind';
import BoardWrite from './components/BoardWrite/BoardWrite';
import BoardDetail from './components/BoardDetail/BoardDetail';
import Writelist from './components/Board/WriteList';
import Reviewboard from './components/Board/ReviewBoard';
import MeetingBoard from './components/Board/MeetingBoard';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Main() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container">
                <Section></Section>
              </div>
            </>
          }
        />
        <Route
          path="/BoardWrite"
          element={
            <>
              <BoardWrite></BoardWrite>
            </>
          }
        />
        <Route
          path="/BoardWrite/:id"
          element={
            <>
              <BoardWrite></BoardWrite>
            </>
          }
        />
        <Route
          path="/Join"
          element={
            <>
              <Join></Join>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login></Login>
            </>
          }
        />
        <Route
          path="/BoardDetail/:id"
          element={
            <>
              <BoardDetail></BoardDetail>
            </>
          }
        />
        <Route
          path="/mypage"
          element={
            <>
              <MyPage></MyPage>
            </>
          }
        />
        <Route
          path="/findPw"
          element={
            <>
              <PwFind></PwFind>
            </>
          }
        />
        <Route
          path="/WriteList"
          element={
            <>
              <Writelist></Writelist>
            </>
          }
        />
        <Route
          path="/reviewboard"
          element={
            <>
              <Reviewboard></Reviewboard>
            </>
          }
        />
        <Route
          path="/meetingboard"
          element={
            <>
              <MeetingBoard></MeetingBoard>
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
