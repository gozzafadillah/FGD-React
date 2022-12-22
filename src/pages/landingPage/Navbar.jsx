import { Header } from "antd/es/layout/layout";
import "./LandingPage.css";
import React, { useState } from "react";
import NavbarList from "./NavbarList";
import logo from "./img/logo-header.png";
import { Button, Image, Drawer } from "antd";
import { AlignRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };
  return (
    <Header style={{ position: "fixed", zIndex: "1" }}>
      <div
        className="nav-content"
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="nav-logo">
          <Image width={120} src={logo} preview={false} />
        </div>
        <div className="nav-list-menu">
          <NavbarList
            className="ant-menu-horizontal-custom"
            mode="horizontal"
            style={{
              display: "flex",
              gap: "30px",
              background: "rgba(23, 128, 102, 1)",
            }}
          />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <AlignRightOutlined style={{ fontSize: "22px" }} />
        </Button>
        <Drawer
          title="Charum"
          placement="right"
          closable={false}
          visible={visible}
          onClose={closeDrawer}
          width={250}
        >
          <div className="menuMobile">
            <NavbarList className="menuMobile" mode="vertical" />
            <Button
              className="btn-login-mobile"
              style={{ background: "white", color: "black" }}
              onClick={() => navigate("/login")}
              type="primary"
            >
              Login
            </Button>
          </div>
        </Drawer>
        <Button
          className="btn-login"
          style={{ background: "white", color: "black" }}
          onClick={() => navigate("/login")}
          type="primary"
        >
          Login
        </Button>
      </div>
    </Header>
  );
};

export default Navbar;
