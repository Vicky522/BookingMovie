//Đây là file chứa các hàm action
import { GET_DATA_FILM } from "../const/QuanLyPhimConst";
import { DOMAIN } from "../../util/setting";
import axios from "axios";
export const getDataFilmAction = () => {
  return async (dispatch) => {
    const result = await axios({
      url: `${DOMAIN}/api/quanlyphim/laydanhsachphim?manhom=GP01`,
      method: "GET",
    });
    dispatch({
      type: GET_DATA_FILM,
      dataFilm: result.data,
    });
  };
};

export const layThongTinPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: "GET",
      });
      dispatch({
        type: "LAY_THONG_TIN_PHONG_VE",
        thongTinPhongVe: result.data,
      });
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };
};
