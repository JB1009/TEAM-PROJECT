
// 결제 조회
callPayment();

// 환불 조회
callRefund();

// 결제 목록 조회
function callPayment() {
    $.ajax({
        url: '/api/v1/payment',
        type: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        success: function (response) {
            console.log(response);
            for (var i in response) {
                tr = $('<tr onclick="doGetData(' + response[i].paymentIndex + ')"></tr>');

                var paymentIndex = $('<td>' + response[i].paymentIndex + '</td>');
                var paymentType = $('<td>' + response[i].paymentType + '</td>');
                var paymentPrice = $('<td>' + response[i].paymentPrice + '</td>');
                var paymentDate = $('<td id="paymentDate">' + response[i].paymentDate + '</td>');
                if (response[i].refund != null) {
                    var refundIndex = $('<td>' + response[i].refund.refundIndex + '</td>');
                }
                else {
                    var refundIndex = $('<td>환불X</td>');
                }

                tr.append(paymentIndex);
                tr.append(paymentType);
                tr.append(paymentPrice);
                tr.append(paymentDate);
                tr.append(refundIndex);

                $("#total").append(tr);
            }
        }
    });
}

//상세조회
function doGetData(paymentIndex) {
    $.ajax({
        url: '/api/v1/payment/' + paymentIndex,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            $('#paymentIndex').val(response.paymentIndex);
        },
    });
}


// 환불 목록 조회
function callRefund() {
    $.ajax({
        url: '/api/v1/refund',
        type: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        success: function (response) {

            for (var i in response) {
                tr = $('<tr></tr>');

                var refundIndex = $('<td id="refundIndex">' + response[i].refundIndex + '</td>');
                var refundDate = $('<td id="refundDate">' + response[i].refundDate + '</td>');
                var refundReason = $('<td>' + response[i].refundReason + '</td>');

                tr.append(refundIndex);
                tr.append(refundDate);
                tr.append(refundReason);

                $("#toototal").append(tr);
            }

        }
    });
}

// 결제
function doAddPayment() {
    var addPaymentType = $('#addPaymentType').val();
    var addPayment = $('#addPayment').val();

    var Data = {
        paymentType: addPaymentType,
        paymentPrice: addPayment,
    };

    $.ajax({
        url: '/api/v1/payment',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(Data),
        dataType: 'json',
        success: function (response) {
            alert('등록 완료');
            location.reload();

        },
    });
}

// 삭제
function doDeletePayment() {
    var deletePayment = $("#deletePayment").val();

    $.ajax({
        url: '/api/v1/payment/' + deletePayment,
        type: 'DELETE',
        dataType: 'json',
        success: function (response) {
            alert("삭제");
            location.reload();
        }
    });
}

// 환불
function doUpdateRefund() {
    var paymentIndex = $('#paymentIndex').val();
    var updateRefundReason = $('#updateRefundReason').val();
    var refundIndex = $("#refundIndex").val()

    var Data = {
        paymentIndex: paymentIndex,
        refundReason: updateRefundReason,
        refund: {
            refundIndex: refundIndex
        }
    };
    console.log(Data)

    $.ajax({
        url: '/api/v1/refund',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(Data),
        dataType: 'json',
        success: function (response) {
            alert('등록 완료');
            location.reload();


        },
    });
}

// 환불 취소
function doRefundCancel() {
    var deRefundIndex = $("#deRefundIndex").val();

    $.ajax({
        url: '/api/v1/refund/' + deRefundIndex,
        type: 'DELETE',
        dataType: 'json',
        success: function (response) {
            alert("삭제");
            location.reload();
        }
    });
}
