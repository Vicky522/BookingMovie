import { NavLink, Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from "../util/setting";
import React, { useState } from "react";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../../node_modules/antd/dist/antd.min.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  };

  // phải là quantri mới dược vào
  if (localStorage.getItem(USER_LOGIN)) {
    let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
    if (userLogin.maLoaiNguoiDung == "QuanTri") {
      return (
        <Route
          path={props.path}
          exact
          render={(propsRoute) => {
            //   nội dung render khi user gõ đúng route admin

            // return <props.Component {...propsRoute} />;
            return (
              <Layout style={{ minHeight: "100vh" }}>
                <Sider
                  collapsible
                  collapsed={collapsed}
                  onCollapse={onCollapse}
                >
                  <div className="logo" />
                  <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                    <Menu.Item key="3">
                      <NavLink to="/admin/quanlyphim">Quản lý phim</NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <NavLink to="/admin/quanlynguoidung">
                        Quản lý người dùng
                      </NavLink>
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout className="site-layout">
                  <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                  />
                  <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                      <Breadcrumb.Item>User</Breadcrumb.Item>
                      <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                      className="site-layout-background"
                      style={{ padding: 24, minHeight: 360 }}
                    >
                      <props.Component {...propsRoute} />
                    </div>
                  </Content>
                  <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2018 Created by Ant UED
                  </Footer>
                </Layout>
              </Layout>
            );
          }}
        />
      );
    }
    alert("Ban khong phai admin");
    return <Redirect to="/dangNhap" />;
  }
  alert("Ban khong phai admin");
  return <Redirect to="/dangNhap" />;
};
