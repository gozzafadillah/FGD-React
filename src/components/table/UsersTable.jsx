import React from "react";
import { Button, Popover, Table, Tag } from "antd";
import { InfoCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser, getUser } from "../../store/users/UserSlicer";
import Swal from "sweetalert2";
import Highlighter from "react-highlight-words";

const UsersTable = (props) => {
  const data = props.response;
  const searchText = props.searchData;

  const navigate = useNavigate();
  const dispacth = useDispatch();
  //
  const handleDelete = (record) => {
    Swal.fire({
      title: `Are you sure want to delete ${record.userName}?`,
      text: " You can’t restore this user in other time.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          record.userName + " has been deleted.",
          "success"
        );
        dispacth(deleteUser(record._id));
      }
    });
  };
  //
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      width: "5%",
      align: "center",
      render: (val) => (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={val.toString()}
        />
      ),
    },
    {
      title: "Username",
      dataIndex: "userName",
      width: "10%",
      align: "center",
      render: (val) => (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={val.toString()}
        />
      ),
    },
    {
      title: "Followers",
      dataIndex: "followers",
      width: "12%",
      align: "center",
      render: () => 10,
    },
    {
      title: "Report",
      dataIndex: "report",
      width: "12%",
      align: "center",
      render: () => 20,
    },
    {
      title: "Status",
      dataIndex: "isActive",
      width: "10%",
      align: "center",
      render: (val) =>
        val === false ? (
          <Tag color="volcano">Suspend</Tag>
        ) : (
          <Tag color="geekblue">Active</Tag>
        ),
    },
    {
      title: "Action",
      dataIndex: "operation",
      width: "10%",
      align: "center",
      render: (text, record) => {
        return (
          <>
            <Popover
              content={
                <div style={{ display: "grid" }}>
                  <Button
                    onClick={() => {
                      dispacth(getUser(record._id));
                      navigate("/dashboard/users/details/" + record._id);
                    }}
                    type="text"
                    style={{ marginBottom: "10px", background: "#D1E6E0" }}
                  >
                    <InfoCircleOutlined />
                    Details
                  </Button>
                  <Button type="text" onClick={() => handleDelete(record)}>
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
  //
  return (
    <Table
      bordered
      dataSource={data}
      columns={columns}
      rowClassName="editable-row"
      rowKey="_id"
      pagination={{
        position: ["bottomCenter"],
      }}
    />
  );
};
export default UsersTable;
