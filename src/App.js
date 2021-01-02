import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import ChiTietPhim from "./pages/ChiTietPhim/ChiTietPhim";
import DangKy from "./pages/DangKy/DangKy";
import DangNhap from "./pages/DangNhap/DangNhap";
import DatVe from "./pages/DatVe/DatVe";
import TrangChu from "./pages/TrangChu/TrangChu";
import HomeTemplate from "./templates/HomeTemplate";
import LoginTemplate from "./templates/LoginTemplate";
// history.js
import { createBrowserHistory } from "history";
import { AdminTemplate } from "./templates/AdminTemplate";
import QuanLyPhim from "./pages/QuanLyPhim/QuanLyPhim";
import QuanLyNguoiDung from "./pages/QuanLyNguoiDung/QuanLyNguoiDung";
import { BookingTemplate } from "./templates/BookingTemplate";

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        {/* <Header /> */}
        <Switch>
          {/* <Route path="/" exact component={TrangChu} /> */}

          <BookingTemplate path="/datve/:maLichChieu" Component={DatVe} />
          <LoginTemplate path="/dangnhap" Component={DangNhap} />
          <LoginTemplate path="/dangky" Component={DangKy} />
          <HomeTemplate path="/chiTietPhim/:maPhim" Component={ChiTietPhim} />
          <AdminTemplate path="/admin/quanlyphim" Component={QuanLyPhim} />
          <AdminTemplate
            path="/admin/quanlynguoidung"
            Component={QuanLyNguoiDung}
          />
          <HomeTemplate path="/" Component={TrangChu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
