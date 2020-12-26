import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-dark text-light">
      <nav class="nav justify-content-center">
        <p className="display-4">CYBERSOFT</p>
        <Link class="nav-link" to="/">
          Trang chủ
        </Link>
        <Link class="nav-link" to="/dangky">
          Đăng kí
        </Link>
        <Link class="nav-link" to="/dangnhap">
          Đăng Nhập
        </Link>
        <Link class="nav-link " to="/chitietphim">
          Chi tiết phim
        </Link>
      </nav>
    </div>
  );
}
