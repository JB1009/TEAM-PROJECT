import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 성공시 띄울 토스트
const successAlert = (msg) => {
  toast.success(msg, {
    autoClose: 1000,
    position: toast.POSITION.TOP_CENTER,
  });
};

// 에러
const errorAlert = (msg) => {
  toast.error(msg, {
    autoClose: 1000,
    position: toast.POSITION.TOP_CENTER,
  });
};

// 경고창
const warnAlert = (msg) => {
  toast.warning(msg, {
    autoClose: 1000,
    position: toast.POSITION.TOP_CENTER,
  });
};

export { successAlert, errorAlert, warnAlert };

// 이 부분 생긴게 넘 킹받아 아 저거 해놓는다는게...ㅎ휴
// 일케 하셈 이렇게쓰면 헐... 그러면
// 그니까 넘 여러개 만들필요업속
// 지금 저게 초록색에 체크 표시니까 누가봐도 성공 알림 같은거자나
// 에러 알림도 하나만 만들고 메시지는 그때 그때 바꿔 쓰면대
// 안그러면 함수를 존내 많이 만들어야 하자나
// 이거 문서 어디있지
// 존멋 와...내일 찬양받아야겟다
// 얼럿 또 쓰면
// 꿀밤 제가 학원에서 누군가가 저말고도 얼럿 쓰면 바로 이 큰손으로 꿀밤 치겠습니다. ㅋㅋㅋㅋㅋㅋ
// 여럿 살리는거다...
