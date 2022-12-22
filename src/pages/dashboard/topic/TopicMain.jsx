import { Breadcrumb, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./Topic.css";
import Search from "antd/es/transfer/search";
import ModalTopic from "./ModalTopic";
import { useDispatch, useSelector } from "react-redux";
import { getAllTopic } from "../../../store/topic/TopicSlicer";
import CardTopic from "../../../components/dashboard/topic/CardTopic";

const { Title } = Typography;
const TopicMain = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const response = useSelector((state) => state.topic);
  const [getId, setGetId] = useState("");

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setGetId("");
  };
  const onSearch = (value) => console.log(value);

  useEffect(() => {
    dispacth(getAllTopic());
  }, [dispacth]);

  return (
    <div className="site-layout-background">
      <div
        className="content-main"
        style={{
          margin: "0 15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Breadcrumb
          style={{
            margin: "11px 0",
          }}
        >
          <Breadcrumb.Item
            onClick={() => navigate("/dashboard")}
            style={{ cursor: "pointer" }}
          >
            Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item>Topic</Breadcrumb.Item>
        </Breadcrumb>
        <div className="add-topic" onClick={() => setIsModalOpen(true)}>
          <PlusCircleOutlined />
          <Title level={3}>New Topic</Title>
          <Title level={5}>Create new topic</Title>
        </div>

        <div className="list-topic">
          <Title level={2} style={{ marginTop: "20px" }}>
            All Topic
          </Title>
          <div
            className="search-bar"
            style={{ width: "336px", margin: "10px 0" }}
          >
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
            />
          </div>
          <CardTopic
            response={response}
            setIsModalOpen={setIsModalOpen}
            setGetId={setGetId}
          />
        </div>
        <ModalTopic
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          handleOk={handleOk}
          setGetId={setGetId}
          getId={getId}
        />
      </div>
    </div>
  );
};

export default TopicMain;
