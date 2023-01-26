import React from 'react';
import './CheckCampingRegistration.css';
const CheckRegistrationList = ({ registrationList }) => {
  console.log(registrationList);
  return (
    <div>
      {registrationList.map((registrationList) => {
        return (
          <div key={registrationList.campsiteIndex} value={registrationList.campsiteIndex}>
            <table className="registrationList">
              <tr>
                <td colSpan="2">
                  {registrationList.campsiteName}
                  <button className="crudButton">수정</button>
                  <button className="crudButton">삭제</button>
                </td>
              </tr>
              <tr>
                <td rowSpan="2">
                  <div className="registrationImgBox"></div>
                </td>

                <td>
                  <div className="campsiteIntroduction">
                    상세정보
                    <br />
                    {registrationList.campsiteIntroduction}
                  </div>
                </td>
              </tr>
              <tr>
                <td>☆☆☆☆☆</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default CheckRegistrationList;
