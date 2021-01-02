import { USER_LOGIN } from "../util/setting";
import { Redirect, Route } from "react-router-dom";

export const BookingTemplate = (props) => {
  if (localStorage.getItem(USER_LOGIN)) {
    return (
      <Route
        path={props.path}
        exact
        render={(propsRoute) => {
          return <props.Component {...propsRoute} />;
        }}
      />
    );
  }
  alert("Ban can phai dang nhap truoc khi vao trang nay");
  return <Redirect to="/dangNhap" />;
};
