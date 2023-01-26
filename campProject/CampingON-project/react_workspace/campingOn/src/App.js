import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Recommend from './components/Recommend/Recommend';
import MyPage from './components/MyPage/MyPage';
import './common/init.css';

import MyReservation from './components/MyReservation/MyReservation';
import CampingHistory from './components/CampingHistory/CampingHistory';
import InquiryHistory from './components/InquiryHistory/InquiryHistory';
import ModifyMyInformation from './components/ModifyMyInformation/ModifyMyInformation';
import MyPoint from './components/MyPoint/MyPoint';
import LikeCamping from './components/LikeCamping/LikeCamping';

import CampingRegistration from './components/CampingRegistration/CampingRegistration';
import Camping from './components/Camping/Camping';
import CheckCampingRegistration from './components/CheckCampingRegistration/CheckCampingRegistration';
import MyPageCompany from './components/MyPage/MyPageCompany';
import CustomerServiceCenter from './components/CustomerServiceCenter/CustomerServiceCenter';
import CustomerQuestion from './components/CustomerCenterQuestion/CustomerCenterQuestion';
import ListMyReservation from './components/MyReservation/ListMyReservation';
import Payment from './components/Payment/Payment';
import Withdrawal from './components/ModifyMyInformation/Withdrawal';
import ViewDetail from './components/ViewDetail/ViewDetail';
import Loading from './components/Loading/Loading';
import Booking from './components/Booking/Booking';
import CheckedBooking from './components/CheckedBooking/CheckedBooking';
import Join from './components/Join/Join';
import Login from './components/Login/Login';
import ReservationManagement from './components/ReservationManagement/ReservationManagement';

//React Main 함수
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Section></Section>
            </div>
          }
        />

        <Route
          path="/join"
          element={
            <div>
              <Join />
            </div>
          }
        />

        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        />
        <Route
          path="/recommend"
          element={
            <div>
              <Recommend></Recommend>
            </div>
          }
        />
        <Route
          path="/mypage"
          element={
            <div>
              <MyPage></MyPage>
            </div>
          }
        />
        <Route
          path="/withdrawal"
          element={
            <div>
              <Withdrawal></Withdrawal>
            </div>
          }
        />
        <Route
          path="/mypagecompany"
          element={
            <div>
              <MyPageCompany></MyPageCompany>
            </div>
          }
        />
        <Route
          path="/customerservicecenter"
          element={
            <div>
              <CustomerServiceCenter></CustomerServiceCenter>
            </div>
          }
        />
        <Route
          path="/customerquestion"
          element={
            <div>
              <CustomerQuestion></CustomerQuestion>
            </div>
          }
        />
        <Route
          path="/viewdetail/:Number"
          element={
            <div>
              <ViewDetail />
            </div>
          }
        />
        <Route
          path="/camping/:type"
          element={
            <div>
              <Camping></Camping>
            </div>
          }
        />
        <Route
          path="/location/:type"
          element={
            <div>
              <Camping></Camping>
            </div>
          }
        />

        <Route
          path="/campingregistration"
          element={
            <div>
              <CampingRegistration></CampingRegistration>
            </div>
          }
        />
        <Route
          path="/checkcampingregistration"
          element={
            <div>
              <CheckCampingRegistration></CheckCampingRegistration>
            </div>
          }
        />
        <Route
          path="/reservationmanagement"
          element={
            <div>
              <ReservationManagement></ReservationManagement>
            </div>
          }
        />
        <Route
          path="/myreservation"
          element={
            <div>
              <MyReservation></MyReservation>
            </div>
          }
        />
        <Route
          path="/campinghistory"
          element={
            <div>
              <CampingHistory></CampingHistory>
            </div>
          }
        />
        <Route
          path="/inquiryhistory"
          element={
            <div>
              <InquiryHistory></InquiryHistory>
            </div>
          }
        />
        <Route
          path="/modifymyinformation"
          element={
            <div>
              <ModifyMyInformation></ModifyMyInformation>
            </div>
          }
        />
        <Route
          path="/mypoint"
          element={
            <div>
              <MyPoint></MyPoint>
            </div>
          }
        />
        <Route
          path="/likecamping"
          element={
            <div>
              <LikeCamping></LikeCamping>
            </div>
          }
        />
        <Route
          path="/listmyreservation"
          element={
            <div>
              <ListMyReservation></ListMyReservation>
            </div>
          }
        />
        <Route
          path="/payment"
          element={
            <div>
              <Payment></Payment>
            </div>
          }
        />
        <Route
          path="/loading"
          element={
            <div>
              <Loading></Loading>
            </div>
          }
        />
        <Route
          path="/booking"
          element={
            <div>
              <Booking></Booking>
            </div>
          }
        />
        <Route
          path="/checkedbooking"
          element={
            <div>
              <CheckedBooking></CheckedBooking>
            </div>
          }
        />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
