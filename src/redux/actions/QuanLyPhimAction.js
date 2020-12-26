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
