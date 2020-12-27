import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

export default function ChiTietPhim(props) {
  // tạo 1 state chứa thông tin chi tiết phim, giá trị ban đầu là object rỗng
  const [chiTietPhim, setChiTietPhim] = useState({});
  console.log(45);
  //dùng useEffect để tự động gọi api khi trang chi tiết phim load import React from 'react'
  useEffect(async () => {
    //props.match.param.:props này là props của thẻ route truyền cho component
    //b1: lấy mã phim từ url
    const maPhim = props.match.params.maPhim;

    //b2: dựa vào mã gửi lên api backend lấy dữ phim về và gán vào state chiTietPhim
    const result = await axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    });

    console.log("data", result);
    setChiTietPhim(result.data);

    // set title
    document.title = result.data.tenPhim;
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <img
            src={chiTietPhim.hinhAnh}
            alt={chiTietPhim.hinhAnh}
            style={{ width: "300px", height: "400px" }}
          />
        </div>

        <div className="col-6">
          <table class="table">
            <tbody>
              <tr>
                <td>Tên phim:</td>
                <td>{chiTietPhim.tenPhim}</td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>{chiTietPhim.moTa}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h3>Thông tin lịch chiếu</h3>
        </div>
      </div>

      <div className="row">
        <div
          className="nav nav-pills col-4 flex-column"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
            const activeClass = index === 0 ? "active" : "";

            return (
              <a
                className={`nav-link ${activeClass}`}
                id={`v-pills-${heThongRap.tenHeThongRap}-tab`}
                href={`#${heThongRap.tenHeThongRap}`}
                data-toggle="pill"
                role="tab"
                aria-controls={`${heThongRap.maHeThongRap}`}
                key={index}
              >
                <img
                  src={heThongRap.logo}
                  width="30"
                  height="30"
                  className="mr-2"
                />
                {heThongRap.tenHeThongRap}
              </a>
            );
          })}
        </div>
        <div className="tab-content col-8" id="v-pills-tabContent">
          {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
            const activeClass = index === 0 ? "active" : "";
            return (
              <div
                className={`tab-pane fade show ${activeClass}`}
                key={index}
                id={`${heThongRap.maHeThongRap}`}
                role="tabpanel"
                aria-labelledby={`v-pills${heThongRap.maHeThongRap}-tab`}
              >
                {/* {heThongRap.tenHeThongRap} */}

                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                  return (
                    <div key={index}>
                      <h3>{cumRap.tenCumRap}</h3>
                      <div className="row">
                        {cumRap.lichChieuPhim
                          ?.slice(0, 12)
                          .map((lichChieu, index) => {
                            return (
                              <div className="col-3" key={index}>
                                {moment(lichChieu.ngayChieuGioChieu).format(
                                  "LT"
                                )}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
