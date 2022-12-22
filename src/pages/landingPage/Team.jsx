import { Image, Typography } from "antd";
import React from "react";
import { ImageAvatar } from "./img/avatar/Avatar";

const { Title } = Typography;
const Team = () => {
  return (
    <div
      className="team-page"
      id="our-team"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "68px 80px 147px",
        flexDirection: "column",
      }}
    >
      <div className="title-team">
        <Title
          level={1}
          style={{
            fontWeight: "700",
            color: "rgba(23, 128, 102, 1)",
            fontSize: "60px",
          }}
        >
          Our Team
        </Title>
      </div>
      <div
        className="body-team"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Title style={{ fontWeight: "700" }} level={3}>
          UI/UX Designer
        </Title>
        <div
          className="ui-ux"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Image src={ImageAvatar.Shahrani} width={75} preview={false} />
            Shaharani A.C.
          </div>
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Vinka} width={75} preview={false} />
            Vinka Annisa A.R.
          </div>
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Puan} width={75} preview={false} />
            Puan Maharani S.
          </div>
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Farhan} width={75} preview={false} />
            M. Farhan Alfauzan
          </div>
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Bagus} width={75} preview={false} />
            Bagus Satria K.
          </div>
        </div>
        <Title style={{ fontWeight: "700" }} level={3}>
          Front-End React JS
        </Title>
        <div
          className="frontend"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Fadil} width={75} preview={false} />
            M. Fadillah A.A.
          </div>
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Arsyal} width={75} preview={false} />
            M.Arsyal A.E.
          </div>
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Putu} width={75} preview={false} />
            Putu Bagus D.P.
          </div>
        </div>
        <Title style={{ fontWeight: "700" }} level={3}>
          Back-End Golang
        </Title>
        <div
          className="backend"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Razan} width={75} preview={false} />
            M. Razan F.
          </div>
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Timo} width={75} preview={false} />
            Timotius Wirawan
          </div>
        </div>
        <Title style={{ fontWeight: "700" }} level={3}>
          Mobile Flutter
        </Title>
        <div
          className="mobile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Fivo} width={75} preview={false} />
            M. Fivo Arnande
          </div>
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              style={{ borderRadius: "50%" }}
              src={ImageAvatar.Latif}
              width={75}
              preview={false}
            />
            Khaerul Latif
          </div>
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={ImageAvatar.Nur}
              width={75}
              height={75}
              style={{ borderRadius: "50%" }}
              preview={false}
            />
            Nur Muhammad A.
          </div>
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Manda} width={75} preview={false} />
            Maulidya Amanda
          </div>
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Faishal} width={75} preview={false} />
            Faisal Aprianto
          </div>
        </div>
        <Title style={{ fontWeight: "700" }} level={3}>
          Quality Assurance
        </Title>
        <div
          className="qa"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Shidan} width={75} preview={false} />
            M. Shidan Nur A.
          </div>
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={ImageAvatar.Faraz} width={75} preview={false} />
            Faraz Herviansyah
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
