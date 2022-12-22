import React from "react";
import { Button, Popover, Table } from "antd";
import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons";

const dataSource = [
  {
    _id: 1,
    userName: "Bagus",
    email: "alsjnd@mail.com",
    isActive: true,
    createdAt: "2022-12-20T01:40:37.133Z",
  },
  {
    _id: 19,
    userName: "Bagus",
    email: "alsjnd@mail.com",
    isActive: true,
    createdAt: "2022-12-20T01:40:37.133Z",
  },
  {
    _id: 9,
    userName: "Bagus",
    email: "alsjnd@mail.com",
    isActive: true,
    createdAt: "2022-12-20T01:40:37.133Z",
  },
  {
    _id: 13,
    userName: "Bagus",
    email: "alsjnd@mail.com",
    isActive: true,
    createdAt: "2022-12-20T01:40:37.133Z",
  },
  {
    _id: 12,
    userName: "Bagus",
    email: "alsjnd@mail.com",
    isActive: true,
    createdAt: "2022-12-20T01:40:37.133Z",
  },
];

const columns = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "_id",
    width: "5%",
    align: "center",
  },
  {
    title: "Username",
    dataIndex: "userName",
    key: "userName",
    width: "10%",
    align: "center",
  },
  {
    title: "Followers",
    dataIndex: "email",
    key: "email",
    width: "12%",
    align: "center",
  },
  {
    title: "Status",
    dataIndex: "isActive",
    key: "isActive",
    render: (val) => (!val ? "suspend" : "active"),
    width: "10%",
    align: "center",
  },
  {
    title: "Report Amount",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "10%",
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "operation",
    key: "operation",
    width: "10%",
    align: "center",
    render: (text, record) => {
      return (
        <>
          <Popover
            content={
              <div style={{ display: "grid" }}>
                <Button
                  onClick={() => {}}
                  type="text"
                  style={{ marginBottom: "10px", background: "#D1E6E0" }}
                >
                  <InfoCircleOutlined />
                  Details
                </Button>
                <Button type="text" onClick={{}}>
                  <DeleteOutlined />
                  Delete
                </Button>
              </div>
            }
            destroyTooltipOnHide
          >
            <Button type={"text"}>&#x2022; &#x2022; &#x2022;</Button>
          </Popover>
        </>
      );
    },
  },
];

export const MockTable = () => {
  return <Table rowKey="_id" dataSource={dataSource} columns={columns} />;
};
