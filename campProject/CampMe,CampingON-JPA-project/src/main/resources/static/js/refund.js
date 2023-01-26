callRefund();
// 환불 사유 조회
function callRefund() {
    $.ajax({
        url: '/api/v1/refund',
        type: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        success: function (response) {
            for (var i in response) {
                tr = $('<tr></tr>');

                var refundIndex = $('<td>' + response[i].refundIndex + '</td>');
                var refundDate = $('<td id="refundDate">' + response[i].refundDate + '</td>');
                var refundReason = $('<td>' + response[i].refundReason + '</td>');

                tr.append(refundIndex);
                tr.append(refundDate);
                tr.append(refundReason);

                $("#total").append(tr);
            }
        }
    });
}

// 환불 사유 추가
function doAddressRefundReason() {
    var refundReason = $('#refundReason').val();

    var japData = {
        refundReason: refundReason,

    };
    console.log(japData)
    $.ajax({
        url: '/api/v1/refund',
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

// 환불 사유 수정
function doUpdateRefund() {

    var updateRefundIndex = $('#updateRefundIndex').val();
    var updateRefundReason = $('#updateRefundReason').val();
    var refundDate = $('#refundDate').val();

    var data = {
        refundIndex: updateRefundIndex,
        refundReason: updateRefundReason,
        refundDate: refundDate,
    };

    $.ajax({
        url: '/api/v1/refund',
        type: 'PATCH',
        contentType: 'application/json',
        data: JSON.stringify(data),
        dataType: 'json',
        success: function (response) {
            alert('수정');
            location.reload();
            console.log(refundIndex)
        },
    });
}


// 환불 사유 삭제
function doAeleteRefund() {
    var deletereFundIndex = $("#deletereFundIndex").val();

    $.ajax({
        url: '/api/v1/refund/' + deletereFundIndex,
        type: 'DELETE',
        dataType: 'json',
        success: function (response) {
            alert("삭제");
            location.reload();
        }
    });
}