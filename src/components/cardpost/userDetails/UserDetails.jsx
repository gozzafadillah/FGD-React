import React from "react";
import { Avatar, Button, Card, Select, Tag } from "antd";
import people from "../assets/people.svg";
import add from "../assets/user-add.svg";
import minus from "../assets/user-minus.svg";
import remove from "../assets/user-remove.svg";
import {
  ClearOutlined,
  DeleteOutlined,
  StopOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  deleteUser,
  suspendUser,
  unSuspendUser,
} from "../../../store/users/UserSlicer";
import Swal from "sweetalert2";
import { MockTable } from "../../table/MockTable";

export const UserDetails = (props) => {
  // state
  const dispacth = useDispatch();
  const navigation = useNavigate();
  // props data

  const handleDelete = (id) => {
    Swal.fire({
      title: `Are you sure want to delete ${props.response?.userName}?`,
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
          props.response?.userName + " has been deleted.",
          "success"
        );
        dispacth(deleteUser(id));
        navigation("/dashboard/users");
      }
    });
  };

  const handleSuspend = (id) => {
    Swal.fire({
      title: `Are you sure want to suspend or un-suspend ${props.response?.userName}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed && props.response?.isActive) {
        Swal.fire(
          "Suspend!",
          `${props.response?.userName} has been suspend.`,
          "success"
        );
        dispacth(suspendUser(id));
        navigation("/dashboard/users");
      } else if (result.isConfirmed && !props.response?.isActive) {
        Swal.fire(
          "un-Suspend!",
          props.response.userName + " has been un-suspend.",
          "success"
        );
        dispacth(unSuspendUser(id));
        navigation("/dashboard/users");
      }
    });
  };

  return (
    <>
      <div className="main-card">
        <Card className="card-user" style={{ heigh: "fit-content" }}>
          <div className="card-header user-header">
            <Avatar
              size={{ sm: 38, md: 48, lg: 53, xl: 60, xxl: 63 }}
              src={
                !props.response?.profilePictureURL
                  ? "https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                  : props.response?.profilePictureURL
              }
            />
            <div className="header-title">
              <h3>
                {" "}
                {props.response?.displayName}{" "}
                {props.response?.isActive === false ? (
                  <Tag
                    style={{ padding: "0 20px", margin: "0 20px" }}
                    colod="volcano"
                  >
                    Suspend
                  </Tag>
                ) : (
                  <Tag
                    style={{ padding: "0 20px", margin: "0 20px" }}
                    color="geekblue"
                  >
                    Active
                  </Tag>
                )}
              </h3>
              <p> 0 Followers | 100 Following</p>
            </div>
            <div className="button">
              <Button
                className="button-delete"
                size="large"
                onClick={() => handleDelete(props.response?._id)}
              >
                <DeleteOutlined /> Delete User
              </Button>
              {props.response?.isActive ? (
                <Button
                  className="button-suspend"
                  size="large"
                  onClick={() => handleSuspend(props.response?._id)}
                >
                  <StopOutlined /> Suspend
                </Button>
              ) : (
                <Button
                  className="button-suspend"
                  size="large"
                  style={{
                    background: "rgba(209, 230, 224, 1)",
                    color: "black",
                  }}
                  onClick={() => handleSuspend(props.response?._id)}
                >
                  <UnlockOutlined />
                  Un-Suspend
                </Button>
              )}
            </div>
          </div>
          <Card
            className="interaction-footer-user"
            bodyStyle={{
              padding: "0px",
              gap: "45px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              className="card total-likes-user"
              bodyStyle={{
                display: "grid",
                padding: "0px",
                paddingTop: "10px",
              }}
            >
              <h2>Likes</h2>
              <div className="like like-user">
                <img src={people} alt="total" />
                <h1> 2.477 </h1>
              </div>
            </Card>
            <Card
              className="card total-comments-user"
              bodyStyle={{
                display: "grid",
                padding: "0px",
                paddingTop: "10px",
              }}
            >
              <h2>Comment</h2>
              <div className="comment comment-user">
                <img src={add} alt="reached" />
                <h1> 2.477</h1>
              </div>
            </Card>
            <Card
              className="card total-likes-user shares"
              bodyStyle={{
                display: "grid",
                padding: "0px",
                paddingTop: "10px",
              }}
            >
              <h2>Shares</h2>
              <div className="like share-user">
                <img src={minus} alt="total" />
                <h1> 2.477 </h1>
              </div>
            </Card>
            <Card
              className="card total-comments-user bookmark"
              bodyStyle={{
                display: "grid",
                padding: "0px",
                paddingTop: "10px",
              }}
            >
              <h2>Bookmark</h2>
              <div className="comment comment-user">
                <img src={remove} alt="reached" />
                <h1> 2.477</h1>
              </div>
            </Card>
          </Card>
        </Card>
      </div>
      <div className="filter">
        <Select
          style={{ width: "200px" }}
          allowClear={<ClearOutlined />}
        ></Select>
      </div>
      <div className="main-card-table" style={{ height: "fit-content" }}>
        <Card
          className="card-user"
          bodyStyle={{ width: "78vw", height: "fit-content" }}
        >
          <MockTable />
        </Card>
      </div>
    </>
  );
};
