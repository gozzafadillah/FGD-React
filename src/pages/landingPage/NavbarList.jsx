import React from "react";
import { Menu } from "antd";
import "./LandingPage.css";
// import '../LandingPage/styling/navbar.css';

const NavbarList = (props) => {
  return (
    <Menu mode={props.mode} className="ant-menu-horizontal-custom">
      <Menu.Item key="home">
        <a href="#home">Home</a>
      </Menu.Item>
      <Menu.Item key="features">
        <a href="#feature">Features</a>
      </Menu.Item>
      <Menu.Item key="about">
        <a href="#about">About</a>
      </Menu.Item>
      <Menu.Item key="download">
        <a href="#download">Download</a>
      </Menu.Item>
      <Menu.Item key="our-team">
        <a href="#our-team">Our Team</a>
      </Menu.Item>
    </Menu>
  );
};

export default NavbarList;
