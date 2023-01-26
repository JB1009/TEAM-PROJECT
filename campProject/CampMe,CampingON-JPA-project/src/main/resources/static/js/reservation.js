// 예약 조회
callReservation();

// 캠핑장 옵션
selectProcess()

function callReservation() {
    $.ajax({
        url: '/allReservation',
        type: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        success: function (response) {
            for (var i in response) {
                tr = $('<tr onclick="doGetData(' + response[i].reservationIndex + ')"></tr>');

                var reservationIndex = $('<td>' + response[i].reservationIndex + '</td>');
                var reservationSerialNumber = $('<td>' + response[i].reservationSerialNumber + '</td>');
                var reservationStartDay = $('<td>' + response[i].reservationStartDay + '</td>');
                var reservationEndDay = $('<td>' + response[i].reservationEndDay + '</td>');

                // 스플릿으로 자르기
                var reservationDate = $('<td>' + response[i].reservationDate + '</td>');
                var reservationAdultNumber = $('<td>' + response[i].reservationAdultNumber + '</td>');
                var reservationKidNumber = $('<td>' + response[i].reservationKidNumber + '</td>');
                var reservationCarNumber = $('<td>' + response[i].reservationCarNumber + '</td>');

                // var campsiteIndex = $('<td>' + response[i].campsite.campsiteIndex + '</td>');
                // // var paymentIndex = $('<td>' + response[i].payment.paymentIndex + '</td>');
                // var userNumber = $('<td>' + response[i].user.userNumber + '</td>');

                tr.append(reservationIndex);
                tr.append(reservationSerialNumber);
                tr.append(reservationStartDay);
                tr.append(reservationEndDay);
                tr.append(reservationDate);
                tr.append(reservationAdultNumber);
                tr.append(reservationKidNumber);
                tr.append(reservationCarNumber);
                // tr.append(campsiteIndex);
                // // tr.append(paymentIndex);
                // tr.append(userNumber);

                $("#total").append(tr);
            }
        }
    });
}

// 예약
function doReservation() {
    var reservationSerialNumber = $('#reservationSerialNumber').val();
    var reservationStartDay = $('#reservationStartDay').val();
    var reservationEndDay = $('#reservationEndDay').val();
    var reservationAdultNumber = $('#reservationAdultNumber').val();
    var reservationKidNumber = $('#reservationKidNumber').val();
    var reservationCarNumber = $('#reservationCarNumber').val();
    var campsiteNameOption = $('#campsiteNameOption').val();

    var japData = {
        reservationSerialNumber: reservationSerialNumber,
        reservationStartDay: reservationStartDay,
        reservationEndDay: reservationEndDay,
        reservationAdultNumber: reservationAdultNumber,
        reservationKidNumber: reservationKidNumber,
        reservationCarNumber: reservationCarNumber,
        campsite: {
            campsiteIndex: campsiteNameOption
        }
    };
    $.ajax({
        url: '/reservation/add',
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

// 예약 취소
function doDeleteReservation() {
    var deleteReservationIndex = $("#deleteReservationIndex").val();

    $.ajax({
        url: '/reservation/delete/' + deleteReservationIndex,
        type: 'DELETE',
        dataType: 'json',
        success: function (response) {
            alert("삭제");
            location.reload();
        }
    });
}

// 캠핑장 선택
function selectProcess() {
    $.ajax({
        url: '/reservation/findcamping',
        contentType: 'application/json',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            var campsiteNameOption = '';

            for (var i in response) {
                campsiteNameOption += '<option value = "' + response[i].campsiteIndex + '">' + response[i].campsiteName + '</option>';
            }
            $('#campsiteNameOption').append(campsiteNameOption);
        },
    });
}