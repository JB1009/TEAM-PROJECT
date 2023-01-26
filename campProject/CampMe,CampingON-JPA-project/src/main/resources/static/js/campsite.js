
callAPI();
// 조회
function callAPI() {

  $.ajax({
    url: '/allcampsite',
    type: 'GET',
    contentType: 'application/json',
    dataType: 'json',
    success: function (response) {
      for (var i in response) {
        tr = $('<tr onclick="doGetData(' + response[i].campsiteIndex + ')"></tr>');

        var campsiteIndex = $('<td>' + response[i].campsiteIndex + '</td>');
        var campsiteName = $('<td>' + response[i].campsiteName + '</td>');
        var campsiteAddress = $('<td>' + response[i].campsiteAddress + '</td>');
        var campsiteIntroduction = $('<td>' + response[i].campsiteIntroduction + '</td>');
        var campsiteGuide = $('<td>' + response[i].campsiteGuide + '</td>');
        if(userNumber != null){
          var userNumber = $('<td>' + response[i].user.userNumber + '</td>');
        }
        else(userNumber = $('<td>' + "없음" + '</td>'))
        

        tr.append(campsiteIndex);
        tr.append(campsiteName);
        tr.append(campsiteAddress);
        tr.append(campsiteIntroduction);
        tr.append(campsiteGuide);
        tr.append(userNumber);

        $("#total").append(tr);
      }
    }
  });
}

// 캠핑장 추가
function doCampsiteAddress() {
    var campsiteName = $('#campsiteName').val();
    var campsiteLocation = $('#campsiteLocation').val();
    var campsiteIntroduction = $('#campsiteIntroduction').val();
    var campsiteAnnouncement = $('#campsiteAnnouncement').val();

    var japData = {
        campsiteName: campsiteName,
        campsiteAddress: campsiteLocation,
        campsiteIntroduction: campsiteIntroduction,
        campsiteGuide: campsiteAnnouncement,

    };

    $.ajax({
        url: '/campsite/add',
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

// 삭제
function doCampsiteDelete() {
    var deleteCampsiteNumber = $("#deleteCampsiteNumber").val();

    $.ajax({
        url: '/campsite/delete/' + deleteCampsiteNumber,
        type: 'DELETE',
        dataType: 'json',
        success: function (response) {
            alert("삭제");
            location.reload();
        }
    });
}