callAPI();
    // 조회
    function callAPI() {

        $.ajax({
            url: '/api/v1/comment',
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                for (var i in response) {
                    tr = $('<tr></tr>');

                    var commentNumber = $('<td>' + response[i].commentNumber + '</td>');
                    var commentDate = $('<td id="commentDate">' + response[i].commentDate + '</td>');
                    var commentText = $('<td>' + response[i].commentText + '</td>');
                    var postNumber = $('<td id="postNumbers">' + response[i].post.postNumber + '</td>');
                    var userNumber = $('<td id="userNumbers">' + response[i].user.userNumber + '</td>');

                    tr.append(commentNumber);
                    tr.append(commentDate);
                    tr.append(commentText);
                    tr.append(postNumber);
                    tr.append(userNumber);

                    $("#total").append(tr);
                }
            }
        });
    }

    // 댓글 추가
    function addressComment() {
        var addressComment = $('#addressComment').val();

        var japData = {
            commentText: addressComment,

        };
        console.log(japData)
        $.ajax({
            url: '/api/v1/comment',
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
    function doDeleteComment() {
        var deleteCommentNumber = $("#deleteCommentNumber").val();

        $.ajax({
            url: '/api/v1/comment/' + deleteCommentNumber,
            type: 'DELETE',
            dataType: 'json',
            success: function (response) {
                alert("삭제");
                location.reload();
            }
        });
    }

    // 수정
    function doUpdateComment() {

        var UpdateCommentNumber = $('#UpdateCommentNumber').val();
        var UpdateCommentText = $('#UpdateCommentText').val();
        var updateCommentDate = $("#commentDate").text();
        var updatepostNumbers = $("#postNumbers").text();
        var updateuserNumbers = $("#userNumbers").text();

        var data = {
            commentNumber: UpdateCommentNumber,
            commentText: UpdateCommentText,
            commentDate: updateCommentDate,
            post : {
                postNumber : updatepostNumbers
            },
            user : {
                userNumber : updateuserNumbers
            }
            
        };

        $.ajax({
            url: '/api/v1/comment',
            type: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function (response) {
                console.log(response)
                alert('수정');
                location.reload();
            },
        });
    }