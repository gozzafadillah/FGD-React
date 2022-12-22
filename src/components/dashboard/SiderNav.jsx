import { Image, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Items } from "./ListNavigate";
import "./navbar.css";

import LogoCharum from "./logo-charum.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const SiderNav = (props) => {
  const [page, setPage] = useState("");
  const path = useLocation();
  useEffect(() => {
    if (path.pathname === "/dashboard") setPage("1");
    else if (path.pathname.match("/dashboard/topic")) setPage("2");
    else if (path.pathname.match("/dashboard/thread")) setPage("3");
    else if (path.pathname.match("/dashboard/users")) setPage("4");
  }, [path]);
  return (
    <Sider
      collapsible
      onCollapse={(value) => props.clickHandler(value)}
      style={{
        overflow: "auto",
        position: "fixed",
        height: "100vh",
        left: 0,
        top: 0,
        bottom: 0,
        background: "rgba(255, 255, 255, 1)",
      }}
    >
      <Image src={LogoCharum} preview={false} />
      <Menu theme="light" selectedKeys={[page]} mode="inline" items={Items} />
    </Sider>
  );
};

export default SiderNav;
