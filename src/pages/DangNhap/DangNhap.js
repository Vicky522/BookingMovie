import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function DangNhap() {
  //useDispatch là hook do react redux cung cập tương tự props.dispatch khi sử dụng connect
  const dispatch = useDispatch();
  //useState là thư viện thay thế this.state trong RE class component
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  }); //useState nhận giá trị đầu vào là stateDefault
  console.log("state", state);

  //ứng với classComponent state={}
  const handleChangeInput = (event) => {
    //Lấy ra value từ thẻ input đang nhập
    const { name, value } = event.target;
    console.log(name, value);
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //cản sự kiện submit của browser (reload page)
    //Gọi api để xác thực đăng nhập
    dispatch(dangNhapAction(state));
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3 className="display-4 text-center">Đăng Nhập</h3>
      <div className="form-group">
        <p>Tài khoản</p>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleChangeInput}
        />
      </div>
      <div className="form-group">
        <p>Mật khẩu</p>
        <input
          className="form-control"
          name="matKhau"
          type="password"
          onChange={handleChangeInput}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Đăng nhập
        </button>
      </div>
    </form>
  );
}
