const stateDefault = {
  mangPhim: [],
  thongTinPhongVe: {},
};
export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_DATA_FILM": {
      console.log("get data phim");
      return { ...state, mangPhim: action.dataFilm };
    }
    case "LAY_THONG_TIN_PHONG_VE": {
      return { ...state, thongTinPhongVe: action.thongTinPhongVe };
    }
  }
  return { ...state };
};
