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

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        {/* <Header /> */}
        <Switch>
          {/* <Route path="/" exact component={TrangChu} /> */}
          <Route
            path="/datve"
            render={(propsRoute) => {
              return <DatVe {...propsRoute} />;
            }}
          />
          <LoginTemplate path="/dangnhap" Component={DangNhap} />
          <LoginTemplate path="/dangky" Component={DangKy} />
          <HomeTemplate path="/chiTietPhim/:maPhim" Component={ChiTietPhim} />
          <HomeTemplate path="/" Component={TrangChu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
