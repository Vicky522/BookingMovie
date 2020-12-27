import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header/Header";

export default function HomeTemplate(props) {
  const { Component, path } = props;
  console.log(Component);
  return (
    <Route
      path={path}
      exact
      render={(propsRoute) => {
        return (
          <div>
            <Header />
            <Component {...propsRoute} />
          </div>
        );
      }}
    />
  );
}
