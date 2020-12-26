import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ChiTietPhim(props) {
  // tạo 1 state chứa thông tin chi tiết phim, giá trị ban đầu là object rỗng
  const [chiTietPhim, setChiTietPhim] = useState({});

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
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src={chiTietPhim.hinhAnh}
            alt={chiTietPhim.hinhAnh}
            style={{ width: "300px", height: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}
