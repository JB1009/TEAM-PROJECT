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
