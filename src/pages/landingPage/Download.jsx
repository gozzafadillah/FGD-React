import { Image, Typography } from "antd";
import React from "react";
import DownloadPhone from "./img/download.png";
import GoogleStore from "./img/google-app.png";
import AppStore from "./img/appstore.png";

const { Title } = Typography;
const Download = () => {
  return (
    <div
      className="download-page"
      id="download"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "100px",
        background: "rgba(23, 128, 102, 1)",
        padding: "126px 200px",
        color: "white",
        flexWrap: "wrap",
      }}
    >
      <div className="download-content">
        <div className="download-title">
          <Title
            style={{ color: "white", fontWeight: "800", fontSize: "55px" }}
            level={1}
          >
            Download Us
          </Title>
          <p
            className="download-text"
            style={{
              fontSize: "20px",
              fontWeight: "400",
              inlineSize: "300px",
              textAlign: "start",
            }}
          >
            Download Charum application to bring you more educated and full of
            knowledge
          </p>
          <div
            className="download-btn"
            style={{ display: "flex", gap: "15px" }}
          >
            <div className="google-play">
              <Image src={GoogleStore} preview={false} width={155} />
            </div>
            <div className="app-store">
              <Image src={AppStore} preview={false} width={140} />
            </div>
          </div>
        </div>
      </div>
      <div className="download-img">
        <Image
          className="download-phone"
          src={DownloadPhone}
          preview={false}
          width={400}
        />
      </div>
    </div>
  );
};

export default Download;
