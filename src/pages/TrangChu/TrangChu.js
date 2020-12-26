import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getDataFilmAction } from "../../redux/actions/QuanLyPhimAction";

export default function TrangChu(props) {
  //useSelector là hook reactređux cung cấp dùng để lấy state từ store về
  const mangPhim = useSelector((state) => state.QuanLyPhimReducer.mangPhim);
  //UseDispatch là hook thay thế cho props.dispatch khu dùng redux connect
  const dispatch = useDispatch();
  console.log("mangPhim", mangPhim);
  const loadDataPhim = async () => {
    dispatch(getDataFilmAction());
  };

  //useEffect thay thế cho các lifecycle (disMount,didUpdate,willUnmount)
  useEffect(() => {
    //Chạy 1 lần duy nhâtsau khi giao diện render(ứng với componentDidMount)
    dispatch(getDataFilmAction()); //Vừa vào trang sẽ load
  }, []);
  const rederFilm = () => {
    return mangPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img className="card-img-top" src={phim.hinhAnh} />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text">{phim.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          loadDataPhim();
        }}
      >
        Load Danh Sách Phim
      </button>
      <div className="row">{rederFilm()}</div>
    </div>
  );
}

//Kết nối đến reducer lấy dữ liệu mảng phim về => props.mangPhim
// const mapStateToProps = (state) => {
//     return {
//         mangPhim: state.QuanLyPhimReducer.mangPhim
//     }
// }

// export default connect(mapStateToProps)(TrangChu)
