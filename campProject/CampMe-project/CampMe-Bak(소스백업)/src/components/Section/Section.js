import React from 'react';
import './Section.css';
import { Link } from 'react-router-dom';


const Section = () => {
    

  return (
        <div className='Section'>
            <div className='slider'>
                슬라이더
            </div>
            <div className='menu'>
            <Link to="/login">
                {/* 리뷰 게시판 */}
                <div className='review'>
                    캠핑장 리뷰
                </div>
            </Link>
            {/* 지역별 모임 게시판 */}
            <div className='meeting'>
                지역별 모임
            </div>
            {/* 자유게시판 */}
            <div className='freeBoard'>
                자유 게시판
            </div>
            {/* 문의사항 */}
            <div className='questions'>
                문의사항
            </div>
        </div>
        {/* 이용안내 (회사안내로 바뀔수도있음) */}
        <div className='information'>
            이용안내
        </div>
        <div className='hashTag'>
            테마별
            (해시태그)
        </div>
    </div>
  )
}

export default Section