// 유저 전체 조회
function getAllUsers(page) {
  $.ajax({
    url: '/allUsers?page='+page,
    type: 'GET',
    contentType: 'application/json',
    dataType: 'json',
    success: function (response) {
      var data = response.content;
      $("#user-tbody").empty();
      for (var i in data) {
        tr = $('<tr onclick="doGetUserDetail(' + data[i].userNumber + ')"></tr>');

        var userNumber = $('<td>' + data[i].userNumber + '</td>');
        var userEmail = $('<td>' + data[i].userEmail + '</td>');
        var userName = $('<td>' + data[i].userName + '</td>');
        var grade = '';
        if (data[i].userGrade == 0){
          grade = '일반사용자';
        }
        if (data[i].userGrade == 1){
          grade = '캠핑장관리자';
        }
        if (data[i].userGrade == 2){
          grade = '최고관리자';
        }
        var userGrade = $('<td>' + grade + '</td>');
        var userNickname = $('<td>' + data[i].userNickname + '</td>');

        tr.append(userNumber);
        tr.append(userEmail);
        tr.append(userName);
        tr.append(userNickname);
        tr.append(userGrade);

        $("#user-tbody").append(tr);
      }
    }
  });
}



// 유저 상세조회
function doGetUserDetail(userNumber) {
  $.ajax({
    url: '/user/' + userNumber,
    type: 'GET',
    dataType: 'json',
    success: function (response) {
      console.log(response);
      $('#userNumber').val(response.userNumber);
      $('#userEmail').val(response.userEmail);
      $('#userName').val(response.userName);
      $('#userNickname').val(response.userNickname);
      $('#userPoint').val(response.userPoint);
      $('#userGrade').val(response.userGrade);
      openUserModal();
    },
  });
}

// 유저 회원가입
function doJoin() {
  var userPassword = $('#userPassword').val();
  var userName = $('#userName').val();
  var userEmail = $('#userEmail').val();
  var userTel = $('#userTel').val();
  var userBirth = $('#userBirth').val();
  var userGrade = $('#userGrade').val();
  var userNickname = $('#userNickname').val();

  var japData = {
    userPassword: userPassword,
    userName: userName,
    userEmail: userEmail,
    userTel: userTel,
    userBirth: userBirth,
    userGrade: userGrade,
    userNickname: userNickname
  };

  $.ajax({
    url: '/api/v1/join',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(japData),
    dataType: 'json',
    success: function (response) {
      alert('등록 완료');
      location.reload();
    },
  });
}

// 유저 탈퇴
function doDeleteUser() {
  var userNumber = $("#userNumber").val();

  $.ajax({
    url: '/user/' + userNumber,
    type: 'DELETE',
    dataType: 'json',
    success: function (response) {
      alert("회원정보가 삭제되었습니다.");
      closeUserModal();
    }
  });
}

// 유저 수정
function doModifyUser() {

  var userNumber = $('#userNumber').val();
  var userEmail = $('#userEmail').val();
  var userName = $('#userName').val();
  var userNickname = $('#userNickname').val();
  var userPoint = $('#userPoint').val();
  var userGrade = $('#userGrade').val();


  var data = {
    userNumber: userNumber,
    userEmail: userEmail,
    userName: userName,
    userNickname: userNickname,
    userPoint: userPoint,
    userGrade: userGrade,
  };

  $.ajax({
    url: '/user',
    type: 'PATCH',
    contentType: 'application/json',
    data: JSON.stringify(data),
    dataType: 'json',
    success: function (response) {
      alert('회원정보가 수정되었습니다.');
      closeUserModal();
    },
  });
}

// 캠핑장 전체 조회
function getAllCampsite(page) {
  $.ajax({
    url: '/paging/campsite?page='+page,
    type: 'GET',
    contentType: 'application/json',
    dataType: 'json',
    success: function (response) {
      var data = response.content;
      $("#user-tbody").empty();
      for (var i in data) {
        tr = $('<tr onclick="doGetCampingDetail(' + data[i].campsiteIndex + ')"></tr>');

        var campsiteIndex = $('<td>' + data[i].campsiteIndex + '</td>');
        var campsiteName = $('<td>' + data[i].campsiteName + '</td>');
        var campsiteAddress = $('<td>' + data[i].campsiteAddress + '</td>');
        var campingTypeName = '';
        if(data[i].campingType.typeIndex == 1){
          campingTypeName = '캠핑장';
        }
        if(data[i].campingType.typeIndex == 2){
          campingTypeName = '카라반';
        }
        if(data[i].campingType.typeIndex == 3){
          campingTypeName = '글램핑';
        }
        if(data[i].campingType.typeIndex == 4){
          campingTypeName = '차박';
        }
        var campingType = $('<td>' + campingTypeName + '</td>');
        var campingAdmin = $('<td>' + data[i].user.userName + '</td>');

        tr.append(campsiteIndex);
        tr.append(campsiteName);
        tr.append(campsiteAddress);
        tr.append(campingType);
        tr.append(campingAdmin);

        $("#user-tbody").append(tr);
      }
    }
  });
}


// 캠핑장 상세 조회
function doGetCampingDetail(campNumber) {
  $.ajax({
    url: '/campsite/' + campNumber,
    type: 'GET',
    dataType: 'json',
    success: function (response) {
      $('#campsiteIndex').val(response.campsiteIndex);
      $('#campsiteName').val(response.campsiteName);
      $('#campsiteAddress').val(response.campsiteAddress);
      $('#campsiteLocal').val(response.campsiteLocal);
      $('#campsiteIntroduction').val(response.campsiteIntroduction);
      $('#campsiteGuide').val(response.campsiteGuide);
      $('#campsiteUserNumber').val(response.user.userNumber);
      $('#campingType').val(response.campingType.typeIndex);
      let optionValues =[response.store,response.barbecue,response.parking,response.wifi,response.shower,response.pool,response.pet,response.bathroom];
      let options = $('.btn-check');
      for (i in optionValues){
        $(options[i]).prop('checked',false);
        if(optionValues[i]){
          $(options[i]).prop('checked',true);
        }
      }
      openCampModal();
    },
  });
}

// 캠핑장 수정
function doModifyCampsite() {
  var campsiteName = $('#campsiteName').val();
  var campsiteAddress = $('#campsiteAddress').val();
  var campsiteLocal = $('#campsiteLocal').val();
  var campsiteIntroduction = $('#campsiteIntroduction').val();
  var campsiteGuide = $('#campsiteGuide').val();
  let optionValues =[$('#store').is(':checked'),$('#barbecue').is(':checked'),$('#parking').is(':checked'),$('#wifi').is(':checked'),$('#shower').is(':checked'),$('#pool').is(':checked'),$('#pet').is(':checked'),$('#bathroom').is(':checked')];
  var campsiteIndex = $('#campsiteIndex').val();
  var campingType = $('#campingType').val();
  var userNumber = $('#campsiteUserNumber').val();

  var data = {
    campsiteName: campsiteName,
    campsiteAddress: campsiteAddress,
    campsiteLocal: campsiteLocal,
    campsiteIntroduction: campsiteIntroduction,
    campsiteGuide: campsiteGuide,
    campsiteIndex: campsiteIndex,
    store: optionValues[0],
    barbecue: optionValues[1],
    parking: optionValues[2],
    wifi: optionValues[3],
    shower: optionValues[4],
    pool: optionValues[5],
    pet: optionValues[6],
    bathroom: optionValues[7],
    campingType:{
      typeIndex: campingType
    },
    user:{
      userNumber: userNumber
    }
  };

  $.ajax({
    url: '/campsite',
    type: 'PATCH',
    contentType: 'application/json',
    data: JSON.stringify(data),
    dataType: 'json',
    success: function (response) {
      alert("캠핑장 수정이 완료되었습니다.");
      closeCampModal();
    },
  });
}

// 캠핑장 삭제
function doDeleteCampsite() {
  var campsiteIndex = $('#campsiteIndex').val();

  $.ajax({
    url: '/campsite/' + campsiteIndex,
    type: 'DELETE',
    dataType: 'json',
    success: function (response) {
      alert("캠핑장이 삭제되었습니다.");
      closeCampModal();
    }
  });
}


//예약 전체 조회
function getAllReservation(page) {
  $.ajax({
    url: '/allReservation?page='+page,
    type: 'GET',
    contentType: 'application/json',
    dataType: 'json',
    success: function (response) {
      var data = response.content;
      $("#user-tbody").empty();
      for (var i in data) {
        tr = $('<tr onclick="doGetReservationDetail(' + data[i].reservationIndex + ')"></tr>');

        var reservationIndex = $('<td>' + data[i].reservationIndex + '</td>');
        var reservationDate = $('<td>' + data[i].reservationDate + '</td>');
        var reservationStartDay = $('<td>' + data[i].reservationStartDay + '</td>');
        var reservationEndDay = $('<td>' + data[i].reservationEndDay + '</td>');
        var campingName = $('<td>' + data[i].campsite.campsiteName + '</td>');
        var reservationName = $('<td>' + data[i].user.userName + '</td>');

        tr.append(reservationIndex);
        tr.append(reservationDate);
        tr.append(reservationStartDay);
        tr.append(reservationEndDay);
        tr.append(campingName);
        tr.append(reservationName);

        $("#user-tbody").append(tr);
      }
    }
  });
}

// 예약 상세 조회
function doGetReservationDetail(reservationIndex) {
  $.ajax({
    url: '/reservation/' + reservationIndex,
    type: 'GET',
    dataType: 'json',
    success: function (response) {
      console.log(response);
      openModal();
    },
  });
}

// 문의 전체 조회
function getAllInquiry(page) {
  $.ajax({
    url: '/allInquiry?page='+page,
    type: 'GET',
    contentType: 'application/json',
    dataType: 'json',
    success: function (response) {
      var data = response.content;
      $("#user-tbody").empty();
      for (var i in data) {
        tr = $('<tr onclick="doGetInquiryDetail(' + data[i].inquiryNumber + ')"></tr>');

        var inquiryNumber = $('<td>' + data[i].inquiryNumber + '</td>');
        var inquiryDate = $('<td>' + data[i].inquiryDate.split('T')[0] + '</td>');
        var inquiryTitle = $('<td>' + data[i].inquiryTitle + '</td>');
        var inquiryType = $('<td>' + data[i].inquiryType + '</td>');
        var inquiryUserName = $('<td>' + data[i].user.userName + '</td>');
        var status = '';
        if(data[i].answerDate == null){
          status = '답변대기 중';
        }
        else{
          status = '답변완료';
        }
        var inquiryStatus = $('<td>' + status + '</td>');

        tr.append(inquiryNumber);
        tr.append(inquiryDate);
        tr.append(inquiryTitle);
        tr.append(inquiryType);
        tr.append(inquiryUserName);
        tr.append(inquiryStatus);

        $("#user-tbody").append(tr);
      }
    }
  });
}

// 문의 상세 조회
function doGetInquiryDetail(inquiryNumber) {
  $.ajax({
    url: '/inquiry/' + inquiryNumber,
    type: 'GET',
    dataType: 'json',
    success: function (response) {
      $('#inquiryNumber').val(inquiryNumber);
      $('#inquiryUserNumber').val(response.user.userNumber);
      $('#inquiryTitle').val(response.inquiryTitle);
      $('#inquiryUserName').val(response.user.userName);
      $('#inquiryDate').val(response.inquiryDate.split('T')[0]);
      $('#inquiryType').val(response.inquiryType);
      $('#inquiryText').val(response.inquiryText);
      $('#answerText').val(response.answerText);
      openInquiryModal();
    },
  });
}

// 답변 등록
function doModifyInquiry() {
  var inquiryNumber = $('#inquiryUserNumber').val();
  var inquiryTitle = $('#inquiryTitle').val();
  var inquiryDate = $('#inquiryDate').val();
  var inquiryType = $('#inquiryType').val();
  var inquiryText = $('#inquiryText').val();
  var answerText = $('#answerText').val();
  var userNumber = $('#userNumber').val();

  var data = {
    inquiryNumber: inquiryNumber,
    inquiryTitle: inquiryTitle,
    inquiryDate: inquiryDate,
    inquiryType: inquiryType,
    inquiryText: inquiryText,
    answerText: answerText,
    user:{
      userNumber: userNumber
    }
  };

  $.ajax({
    url: '/inquiry',
    type: 'PATCH',
    contentType: 'application/json',
    data: JSON.stringify(data),
    dataType: 'json',
    success: function (response) {
      alert("답변이 완료되었습니다.");
      closeInquiryModal();
    },
  });
}

// 답변 삭제
function doDeleteInquiry() {
  var inquiryNumber = $('#inquiryNumber').val();

  $.ajax({
    url: '/inquiry/' + inquiryNumber,
    type: 'DELETE',
    dataType: 'json',
    success: function (response) {
      alert("문의글이 삭제되었습니다.");
      closeInquiryModal();
    }
  });
}

//게시판 전체 조회
function getAllBoard(page) {
  $.ajax({
    url: '/paging/board?page='+page,
    type: 'GET',
    contentType: 'application/json',
    dataType: 'json',
    success: function (response) {
      var data = response.content;
      $("#user-tbody").empty();
      for (var i in data) {
        tr = $('<tr onclick="doGetBoardDetail(' + data[i].postNumber + ')"></tr>');

        var postNumber = $('<td>' + data[i].postNumber + '</td>');
        var postTitle = $('<td>' + data[i].postTitle + '</td>');
        var status = '';
        if(data[i].postType == 1){
          status = '공지사항';
        }
        else{
          status = '일반 게시글';
        }
        var postType = $('<td>' + status + '</td>');
        if(data[i].postKind == 1){
          status = '후기';
        }
        else{
          status = '지역별모임';
        }
        var postKind = $('<td>' + status + '</td>');
        var postUser = $('<td>' + data[i].user.userName + '</td>');
        var postDate = $('<td>' + data[i].postDate.split("T")[0] + '</td>');

        tr.append(postNumber);
        tr.append(postTitle);
        tr.append(postType);
        tr.append(postKind);
        tr.append(postUser);
        tr.append(postDate);

        $("#user-tbody").append(tr);
      }
    }
  });
}

// 게시판 상세조회
function doGetBoardDetail(postNumber) {
  $.ajax({
    url: '/post/' + postNumber,
    type: 'GET',
    dataType: 'json',
    success: function (response) {
      $('#postNumber').val(postNumber);
      $('#postUserNumber').val(response.user.userNumber);
      $('#postTitle').val(response.postTitle);
      $('#postUserName').val(response.user.userName);
      $('#postDate').val(response.postDate.split('T')[0]);
      $('#postType').val(response.postType);
      $('#postKind').val(response.postKind);
      $('#postText').val(response.postText);
      openBoardModal();
    },
  });
}

// 게시판 수정
function doModifyBoard() {
  var postNumber = $('#postNumber').val();
  var postUserNumber = $('#postUserNumber').val();
  var postTitle = $('#postTitle').val();
  var postDate = $('#postDate').val();
  var postType = $('#postType').val();
  var postKind = $('#postKind').val();
  var postText = $('#postText').val();

  var data = {
    postNumber: postNumber,
    postTitle: postTitle,
    postType: postType,
    postDate: postDate,
    postKind: postKind,
    postText: postText,
    user:{
      userNumber: postUserNumber
    }
  };

  $.ajax({
    url: '/post',
    type: 'PATCH',
    contentType: 'application/json',
    data: JSON.stringify(data),
    dataType: 'json',
    success: function (response) {
      alert("게시글 수정이 완료되었습니다.");
      closeBoardModal();
    },
  });
}

// 게시글 삭제
function doDeleteInquiry() {
  var postNumber = $('#postNumber').val();

  $.ajax({
    url: '/post/' + postNumber,
    type: 'DELETE',
    dataType: 'json',
    success: function (response) {
      alert("이 삭제되었습니다.");
      closeBoardModal();
    }
  });
}