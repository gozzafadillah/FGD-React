import { Avatar, Layout } from "antd";
import React, { useState } from "react";
import "./Dashboard.css";
import "../dashboard/threads/Thread.css";
import "../dashboard/media/Media.css";

import SiderNav from "../../components/dashboard/SiderNav";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { profile } from "../../store/auth/AuthSlicer";
const { Header, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState({
    status: false,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const responseProfile = useSelector((state) => state.login.profile);
  console.log(responseProfile);

  const clickHandler = (value) => {
    setCollapsed({ ...collapsed, status: value });
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <SiderNav clickHandler={clickHandler} />
      <Layout
        className="site-layout"
        style={{
          marginLeft: !collapsed.status ? "130px" : "75px",
        }}
      >
        <Header className="header-bar site-layout-background">
          <div
            className="user-profile"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Hello, {responseProfile?.displayName}
            <Avatar size={40} src={responseProfile?.profilePictureURL} />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "hidden",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
