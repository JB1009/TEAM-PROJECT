
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Login from './components/Login/Login';
import { Routes, Route, Link } from 'react-router-dom';
import Join from './components/Join/Join';


// React에서는 App() 함수가 Main함수
// React는 명령어를 이용해서 실행한다.
function Main() {
  return (
      <div className='App'>
        
        
        <Routes>
          <Route path='/' element={
          <>
          <div className="container">
            <Header></Header>
            <Section></Section>
            <Footer></Footer>
          </div>
          </>
          }
           />
           <Route path='/login' element={
          <>
          <Login></Login>
           </>
          }
          />
           <Route path='/Join' element={
          <>
          <Join></Join>
           </>
          }
          
           />
        </Routes>
      </div>
  );
}

export default Main;
