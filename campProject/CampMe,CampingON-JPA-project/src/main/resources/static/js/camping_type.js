callAPI();
// 조회
function callAPI() {

  $.ajax({
    url: '/allcampingtype',
    type: 'GET',
    contentType: 'application/json',
    dataType: 'json',
    success: function (response) {
      for (var i in response) {
        tr = $('<tr onclick="doGetData(' + response[i].typeIndex + ')"></tr>');

        var typeIndex = $('<td>' + response[i].typeIndex + '</td>');
        var typeName = $('<td>' + response[i].typeName + '</td>');

        tr.append(typeIndex);
        tr.append(typeName);

        $("#toototal").append(tr);
      }
    }
  });
}

// 삭제
function doDeleteType() {
  var deleteType = $("#deleteType").val();

  $.ajax({
    url: '/camping/delete/' + deleteType,
    type: 'DELETE',
    dataType: 'json',
    success: function (response) {
      alert("삭제");
      location.reload();
    }
  });
}


