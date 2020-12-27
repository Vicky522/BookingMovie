import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { dangNhapAction } from "../redux/actions/QuanLyNguoiDungAction";

export default function LoginTemplate(props) {
  const { Component, path } = props;

  //   lấy chiều dài vài chiều rộng của browse window

  const [obWindow, setObWindow] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });
  useEffect(() => {
    window.onresize = () => {
      //   lay width, height moi sau khi resize
      let newWidth = window.innerWidth;
      let newHeight = window.innerHeight;
      setObWindow({
        innerWidth: newWidth,
        innerHeight: newHeight,
      });
    };
  }, []);

  const { innerWidth, innerHeight } = obWindow;

  return (
    <Route
      path={path}
      exact
      render={(propsRoute) => {
        return (
          <>
            <div className="d-flex">
              <div style={{ width: innerWidth / 2, height: innerHeight / 2 }}>
                <img
                  src="https://picsum.photos/2000"
                  alt="123"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div style={{ width: innerWidth / 2, height: innerHeight / 2 }}>
                <Component {...propsRoute} />
              </div>
            </div>
          </>
        );
      }}
    />
  );
}
