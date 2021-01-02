import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinPhongVeAction } from "../../redux/actions/QuanLyPhimAction";
import { USER_LOGIN } from "../../util/setting";
import "./DatVe.css";

export default function DatVe(props) {
  const { thongTinPhongVe } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  console.log("thong tin phong ve", thongTinPhongVe);

  useEffect(() => {
    // lấy mã lịch chiếu từ url
    let { maLichChieu } = props.match.params;
    // call api thông qua redux
    dispatch(layThongTinPhongVeAction(maLichChieu));
  }, []);

  let { thongTinPhim, danhSachGhe } = thongTinPhongVe;

  const renderDanhSachGhe = () => {
    return thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
      // nếu api trả về ghế là gheVip
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      return (
        <>
          <button className={`ghe ${classGheVip} ${classGheDaDat}`}>
            {ghe.daDat ? "X" : ghe.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </>
      );
    });
  };
  if (localStorage.getItem(USER_LOGIN)) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 text-center">
            <div
              style={{ width: "100%", height: 50 }}
              className="pt-2 pb-2 bg-dark text-white"
            >
              Màn hình
            </div>
            <div className="danhSachGhe">{renderDanhSachGhe()}</div>
          </div>
          <div className="col-4">
            <p>
              <img
                src={thongTinPhongVe.thongTinPhim?.hinhAnh}
                alt={thongTinPhongVe.thongTinPhim?.tenPhim}
              />
            </p>
            <p className="display-4">{thongTinPhongVe.thongTinPhim?.tenPhim}</p>
            <p>
              <span className="font-weight-bold">Cụm rạp</span>
              <span>
                {thongTinPhongVe.thongTinPhim?.tenCumRap} -{" "}
                {thongTinPhongVe.thongTinPhim?.tenRap}
              </span>
            </p>
            <p>
              <span className="font-weight-bold">Địa chỉ</span>
              <span>{thongTinPhongVe.thongTinPhim?.diaChi}</span>
            </p>
            <p>
              <span className="font-weight-bold">Ngày chiếu</span>
              <span>{thongTinPhongVe.thongTinPhim?.ngayChieu}</span>
            </p>
            <p>
              <span className="font-weight-bold">Giờ chiếu</span>
              <span>{thongTinPhongVe.thongTinPhim?.gioChieu}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  alert("Ban phai dang nhap truoc khi dat ve");
  return <Redirect to="/dangnhap" />;
}
