import { Image, Typography } from "antd";
import React from "react";
import OrangDuduk from "./img/orang-duduk.png";
const { Title } = Typography;
const AboutPage = () => {
  return (
    <div
      className="about-page"
      id="about"
      style={{
        display: "flex",
        padding: "140px 0 225px 0",
        gap: "50px",
        flexWrap: "wrap-reverse",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="side-img">
        <Image
          className="about-img"
          src={OrangDuduk}
          width={400}
          preview={false}
        />
      </div>
      <div className="body-content">
        <Title
          level={1}
          style={{
            fontWeight: "700",
            fontSize: "60px",
            display: "flex",
            flexWrap: "wrap",
            inlineSize: "300px",
            overflowWrap: "break-word",
            color: "rgba(23, 128, 102, 1)",
            textAlign: "start",
          }}
        >
          About Charum
        </Title>
        <div
          className="text-body"
          style={{
            fontSize: "24px",
            fontWeight: "400",
            textAlign: "justify",
            inlineSize: "500px",
            overflowWrap: "break-word",
          }}
        >
          <p>
            Charum is a forum group discussion application that supports its
            users to ask questions and answer about certain topics.{" "}
          </p>
          <p>
            {" "}
            Charum will improve your knowledge and educate yourself with threads
            that are shared by users. We prioritize our users comfortability
            because we have a princip which we should be kind and polite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
