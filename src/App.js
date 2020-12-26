import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ChiTietPhim from "./pages/ChiTietPhim/ChiTietPhim";
import DangKy from "./pages/DangKy/DangKy";
import DangNhap from "./pages/DangNhap/DangNhap";
import TrangChu from "./pages/TrangChu/TrangChu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={TrangChu} />
          <Route path="/dangky" component={DangKy} />
          <Route path="/dangnhap" component={DangNhap} />
          <Route path="/chitietphim/:maPhim" component={ChiTietPhim} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
