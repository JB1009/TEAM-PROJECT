window.onload = function () {
  var bt = document.getElementById("bt").addEventListener("click", order);
};

var arr = [];
var arr1 = [];
var arr2 = [];
var arr3 = [];
var count = 0;
var tmp = 0;
var swit = false;
var spt = '';
function order() {
  // var cellPhone = document.getElementById('cellPhone');
  // i_tag.attributes("class",'bi bi-exclamation-triangle');
  // res_div.appendChild(i_tag)
  var name = document.getElementById("name");
  var mail = document.getElementById("mail");
  var order = document.getElementById("order");
  var res = document.getElementById("res");
  var res_div = document.getElementById("res_div");
  var i_tag = document.getElementById("i");

  if (name.value == "") {
    res.innerHTML = "이름을 입력해주세요";
    name.focus();
    i_tag.classList.remove("i_class");
    return;
  } else if (cellPhone.value == "") {
    res.innerHTML = "연락처를 입력해주세요";
    cellPhone.focus();
    i_tag.classList.remove("i_class");
    return;
  } else if (mail.value == "") {
    res.innerHTML = "이메일을 입력해주세요";
    mail.focus();
    i_tag.classList.remove("i_class");
    return;
  } else if (order.value == "") {
    res.innerHTML = "문의사항을 입력해주세요";
    order.focus();
    i_tag.classList.remove("i_class");
    return;
  }
  tmp = mail.value;
  spt = tmp.split("");
  spt = spt.sort();
  if(spt[0] != "."){
    alert("이메일형식에맞춰입력해주세요");
    spt = '';
  }else{
    spt = '';
  }
  if (arr.indexOf(cellPhone) == -1) {
    arr.push(name.value);
    arr.push(cellPhone.value);
    arr.push(mail.value);
    arr.push(order.value);
    name.value = "";
    cellPhone.value = "";
    order.value = "";
    mail.value = "";
  }
  arr1.push(arr);
  arr2 = arr;
  arr = [];
  arr3.push(tmp);
  for (i = 0; i < arr3.length; i++) {
    for (var j = 1; j < 10; j++) {
      if (i != j) {
        if (arr1[i][2] === arr3[j] && arr3.length > 1) {
          arr3.pop();
          arr1.pop();
          if (!confirm("접수이력이 있습니다 재접수하시겠습니까?")) {
            return;
          } else {
            arr1[i][0] = arr2[0];
            arr1[i][1] = arr2[1];
            arr1[i][2] = arr2[2];
            arr1[i][3] = arr2[3];
            // arr1.length = arr1.length-1;
          }
        }
      }
    }
  }
  console.log(arr1);
}
