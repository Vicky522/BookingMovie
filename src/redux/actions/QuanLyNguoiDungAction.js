import axios from "axios";
import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from "../../util/setting";
import history from "../../App";

export const dangNhapAction = (nguoiDung, props) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
        method: "POST",
        data: nguoiDung,
      });
      //Đăng nhập thành công
      console.log(result.data);
      //Lấy token lưu vào localstorga
      localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      // props.history.push("/");
      props.history.goBack();
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};
