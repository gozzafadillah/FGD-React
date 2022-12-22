import Typography from "antd/es/typography/Typography";
import Bookmark from "./img/bookmark-feat.png";
import Group from "./img/group-feat.png";
import Thread from "./img/thread-feat.png";
import React from "react";
import { Image } from "antd";
const { Title } = Typography;
const FeaturePage = () => {
  return (
    <div
      id="feature"
      className="feature-page"
      style={{ background: "rgba(23, 128, 102, 1)" }}
    >
      <div className="title-content" style={{ padding: "69px 0" }}>
        <Title
          level={1}
          style={{ color: "white", fontWeight: "700", fontSize: "80px" }}
        >
          Features
        </Title>
      </div>
      <div
        className="body-content"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <div
          className="feature-charum"
          style={{
            display: "flex",
            margin: "0 10px 170px 10px",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          <Image
            className="featured-image"
            width={400}
            src={Thread}
            preview={false}
          />
          <Image
            className="featured-image"
            width={400}
            src={Bookmark}
            preview={false}
          />
          <Image
            className="featured-image"
            width={400}
            src={Group}
            preview={false}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
