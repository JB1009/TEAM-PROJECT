const mainPage = '<main id="main-section" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">'
+'<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">'
+'<h1 class="h2">월별 통계</h1><div class="btn-toolbar mb-2 mb-md-0"><div class="btn-group me-2">'
+'<button type="button" class="btn btn-sm btn-outline-secondary">내보내기</button></div>'
+'<buttontype="button" class="btn btn-sm btn-outline-secondary dropdown-toggle"><span data-feather="calendar" class="align-text-bottom"></span>'
+'월</button></div></div><canvas class="my-4 w-100" id="myChart" width="1200" height="200"></canvas></main>';

const campPage = '<main id="main-section" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">'
+'<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">'
+'<h1 class="h2">캠핑장 정보</h1></div><div class="table-responsive">'
+'<table class="table table-striped table-sm"><thead><tr><th scope="col">번호</th><th scope="col">이름</th><th scope="col">주소</th><th scope="col">캠핑유형</th><th scope="col">관리자</th></tr></thead>'
+'<tbody id="user-tbody"></tbody></table></div>'
+'<div class="row g-2 justify-content-between"><div class="col-1"><button class="w-30 mb-2 btn btn-sm rounded-3 btn-primary" type="button" onclick="doPrevPage('+"'campPrev'"+')">이 전</button>'
+'</div><div class="col-1 text-end"><button class="w-30 mb-2 btn btn-sm rounded-3 btn-primary" type="button" onclick="doNextPage('+"'campNext'"+')">다 음</button></div></div></main>';

const userPage = '<main id="main-section" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">'
+'<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">'
+'<h2 class="h2">회원 정보</h2></div><div class="table-responsive">'
+'<table class="table table-striped table-sm"><thead><tr><th scope="col">번호</th><th scope="col">이메일</th><th scope="col">이름</th>'
+'<th scope="col">닉네임</th><th scope="col">등급</th></tr></thead><tbody id="user-tbody"></tbody></table></div>'
+'<div class="row g-2 justify-content-between"><div class="col-1"><button class="w-30 mb-2 btn btn-sm rounded-3 btn-primary" type="button" onclick="doPrevPage('+"'userPrev'"+')">이 전</button>'
+'</div><div class="col-1 text-end"><button class="w-30 mb-2 btn btn-sm rounded-3 btn-primary" type="button" onclick="doNextPage('+"'userNext'"+')">다 음</button></div></div></main>';

const reservationPage = '<main id="main-section" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">'
+'<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">'
+'<h2 class="h2">예약 정보</h2></div><div class="table-responsive">'
+'<table class="table table-striped table-sm"><thead><tr><th scope="col">예약 번호</th><th scope="col">예약일</th><th scope="col">입실날짜</th>'
+'<th scope="col">퇴실날짜</th><th scope="col">캠핑장 이름</th><th scope="col">예약자 이름</th></tr></thead><tbody id="user-tbody"></tbody></table></div>'
+'<div class="row g-2 justify-content-between"><div class="col-1"><button class="w-30 mb-2 btn btn-sm rounded-3 btn-primary" type="button" onclick="doPrevPage('+"'reservationPrev'"+')">이 전</button>'
+'</div><div class="col-1 text-end"><button class="w-30 mb-2 btn btn-sm rounded-3 btn-primary" type="button" onclick="doNextPage('+"'reservationNext'"+')">다 음</button></div></div></main>';

const inquiryPage = '<main id="main-section" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">'
+'<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">'
+'<h2 class="h2">문의사항</h2></div><div class="table-responsive">'
+'<table class="table table-striped table-sm"><thead><tr><th scope="col">문의번호</th><th scope="col">문의일자</th><th scope="col">문의제목</th>'
+'<th scope="col">문의유형</th><th scope="col">회원이름</th><th scope="col">답변여부</th></tr></thead><tbody id="user-tbody"></tbody></table></div>'
+'<div class="row g-2 justify-content-between"><div class="col-1"><button class="w-30 mb-2 btn btn-sm rounded-3 btn-primary" type="button" onclick="doPrevPage('+"'inquiryPrev'"+')">이 전</button>'
+'</div><div class="col-1 text-end"><button class="w-30 mb-2 btn btn-sm rounded-3 btn-primary" type="button" onclick="doNextPage('+"'inquiryNext'"+')">다 음</button></div></div></main>';

const boardPage = '<main id="main-section" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">'
+'<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">'
+'<h2 class="h2">게시판 정보</h2></div><div class="table-responsive">'
+'<table class="table table-striped table-sm"><thead><tr><th scope="col">번호</th><th scope="col">제목</th><th scope="col">공지여부</th>'
+'<th scope="col">유형</th><th scope="col">작성자</th><th scope="col">작성시간</th></tr></thead><tbody id="user-tbody"></tbody></table></div>'
+'<div class="row g-2 justify-content-between"><div class="col-1"><button class="w-30 mb-2 btn btn-sm rounded-3 btn-primary" type="button" onclick="doPrevPage('+"'boardPrev'"+')">이 전</button>'
+'</div><div class="col-1 text-end"><button class="w-30 mb-2 btn btn-sm rounded-3 btn-primary" type="button" onclick="doNextPage('+"'boardNext'"+')">다 음</button></div></div></main>';


var userIdx = 0;
var campIdx = 0;
var reservationIdx = 0;
var boardIdx = 0;
var inquiryIdx = 0;


function eventSet(){
    $('#sidebarMenu').removeClass('show');
    $('.nav-link').removeClass('active');
    $('main').remove('#main-section');
    userIdx = 0;
    campIdx = 0;
    reservationIdx = 0;
    boardIdx = 0;
    inquiryIdx = 0;
}


function getMainPage(e){
    eventSet();
    $(e).addClass('active');
    $('#section').append(mainPage);
    getAllUsers(0);
    getChart();
}

function getCampPage(e){
    eventSet();
    $(e).addClass('active');
    $('#section').append(campPage);
    getAllCampsite(campIdx);
}

function getUserPage(e){
    eventSet();
    $(e).addClass('active');
    $('#section').append(userPage);
    getAllUsers(userIdx);
}

function getReservationPage(e){
    eventSet();
    $(e).addClass('active');
    $('#section').append(reservationPage);
    getAllReservation(reservationIdx);
}

function getInquiryPage(e){
    eventSet();
    $(e).addClass('active');
    $('#section').append(inquiryPage);
    getAllInquiry(inquiryIdx);
}

function getBoardPage(e){
    eventSet();
    $(e).addClass('active');
    $('#section').append(boardPage);
    getAllBoard(boardIdx);
}

function closeUserModal(){
    $('#userModal').removeClass('d-block');
    $('#userModal').addClass('d-none');
}

function openUserModal(){
    $('#userModal').removeClass('d-none');
    $('#userModal').addClass('d-block');
}

function closeCampModal(){
    $('#campModal').removeClass('d-block');
    $('#campModal').addClass('d-none');
}

function openCampModal(){
    $('#campModal').removeClass('d-none');
    $('#campModal').addClass('d-block');
}

function closeInquiryModal(){
    $('#inquiryModal').removeClass('d-block');
    $('#inquiryModal').addClass('d-none');
}

function openInquiryModal(){
    $('#inquiryModal').removeClass('d-none');
    $('#inquiryModal').addClass('d-block');
}

function closeBoardModal(){
    $('#boardModal').removeClass('d-block');
    $('#boardModal').addClass('d-none');
}

function openBoardModal(){
    $('#boardModal').removeClass('d-none');
    $('#boardModal').addClass('d-block');
}


function doPrevPage(type){
    if(userIdx == 0 && campIdx == 0 && reservationIdx == 0 && inquiryIdx == 0 && boardIdx == 0){
        return;
    }
    switch(type){
        case "userPrev":
            userIdx--;
            getAllUsers(userIdx);
            break;
        case "campPrev":
            campIdx--;
            getAllCampsite(campIdx);
            break;
        case "reservationPrev":    
            reservationIdx--;
            getAllReservation(reservationIdx);
            break;
        case "inquiryPrev":
            inquiryIdx--;
            getAllInquiry(inquiryIdx);
            break;
        case "boardPrev":
            boardIdx--;
            getAllBoard(boardIdx);
            break;
    }
}

function doNextPage(type){
    switch(type){
        case "userNext":
            userIdx++;
            getAllUsers(userIdx);
            break;
        case "campNext":
            campIdx++;
            getAllCampsite(campIdx);
            break;
        case "reservationNext":    
            reservationIdx++;
            getAllReservation(reservationIdx);
            break;
        case "inquiryNext":
            inquiryIdx++;
            getAllInquiry(inquiryIdx);
            break;
        case "boardNext":
            boardIdx++;
            getAllBoard(boardIdx);
            break;
    }
}