import React, { useState } from "react";
import { Avatar, Button, Card, Collapse, Image, Skeleton } from "antd";
import { DetailsChart } from "../../chart/DetailsChart";
import total from "../assets/information.svg";
import reached from "../assets/user-square.svg";
import like from "../assets/like-tag.svg";
import massage from "../assets/messages.svg";
import share from "../assets/share.svg";
import receipt from "../assets/receipt-square.svg";
import { DeleteOutlined } from "@ant-design/icons";
import imageDefault from "./default.jpg";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteThread } from "../../../store/thread/ThreadSlicer";

const ReadMore = ({ children }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const text = children;
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text?.slice(0, 250) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide"
        style={{ color: "#989797" }}
      >
        {isReadMore ? " ...Read more" : " Show less"}
      </span>
    </p>
  );
};

export const UserPost = (props) => {
  // props data
  const data = props.response.data.thread;
  const text = data.thread?.description;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onDeleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Topic has been deleted.", "success");
        dispatch(deleteThread(id));
        navigate("/dashboard/thread");
      }
    });
  };

  return (
    <>
      <div className="main-card">
        <Card className="card-details" style={{ height: "auto" }}>
          <div className="card-header">
            <Avatar
              size={{ sm: 38, md: 48, lg: 53, xl: 60, xxl: 63 }}
              src={
                data?.thread?.creator.profilePictureURL === ""
                  ? imageDefault
                  : data?.thread?.creator.profilePictureURL
              }
            />
            <div className="header-title">
              <h3> {data?.thread?.creator.displayName} </h3>
              <p> {data?.createdAt} </p>
            </div>
          </div>
          <div className="card-body">
            <div className="card-title">
              <div
                className="content-class"
                style={{
                  fontFamily: "Roboto",
                  fontSize: "28px",
                  fontWeight: "600",
                  lineHeight: "40px",
                  letterSpacing: "0.0025em",
                  textAlign: "left",
                  textTransform: "uppercase",
                }}
              >
                {data?.thread?.title}
              </div>
            </div>
            <Image
              className="image"
              src="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              preview={false}
              sizes={{ xs: 24, sm: 32, md: 40, lg: 54, xl: 60 }}
            />
            {/* <Collapse expandable>
              <Collapse.Panel header="Read more">{text}</Collapse.Panel>
            </Collapse> */}
            <ReadMore children={text} />
          </div>
        </Card>

        <div className="interaction">
          <Card
            className="thread-interaction card"
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70 }}
            bodyStyle={{
              padding: "0px",
            }}
          >
            <div className="interaction-header">
              <h1
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "600",
                  fontSize: "24px",
                }}
              >
                Thread Interaction
              </h1>
            </div>
            <Card
              className="interaction-body"
              bodyStyle={{
                display: "contents",
              }}
            >
              <Card
                className="card total-reports"
                bodyStyle={{
                  display: "grid",
                  padding: "0px",
                  paddingTop: "10px",
                }}
              >
                <img src={total} alt="total" />
                <h2> Total Reports</h2>
                <h1> 2.477 </h1>
              </Card>
              <Card
                className="card account-reached"
                bodyStyle={{
                  display: "grid",
                  padding: "0px",
                  paddingTop: "10px",
                }}
              >
                <img src={reached} alt="reached" />
                <h2> Account Reached</h2>
                <h1> 2.477</h1>
              </Card>
            </Card>
            <Card
              className="interaction-footer"
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70 }}
              bodyStyle={{
                display: "flex",
                padding: "0px",
              }}
            >
              <Card
                className="card total-likes"
                bodyStyle={{
                  display: "grid",
                  padding: "0px",
                  paddingTop: "10px",
                }}
              >
                <h2>Likes</h2>
                <div className="like">
                  <img src={like} alt="total" />
                  <h1> 2.477 </h1>
                </div>
              </Card>
              <Card
                className="card total-comments"
                bodyStyle={{
                  display: "grid",
                  padding: "0px",
                  paddingTop: "10px",
                }}
              >
                <h2>Comment</h2>
                <div className="comment">
                  <img src={massage} alt="reached" />
                  <h1> 2.477</h1>
                </div>
              </Card>
              <Card
                className="card total-likes shares"
                bodyStyle={{
                  display: "grid",
                  padding: "0px",
                  paddingTop: "10px",
                }}
              >
                <h2>Shares</h2>
                <div className="like">
                  <img src={share} alt="total" />
                  <h1> 2.477 </h1>
                </div>
              </Card>
              <Card
                className="card total-comments bookmark"
                bodyStyle={{
                  display: "grid",
                  padding: "0px",
                  paddingTop: "10px",
                }}
              >
                <h2>Bookmark</h2>
                <div className="comment">
                  <img src={receipt} alt="reached" />
                  <h1> 2.477</h1>
                </div>
              </Card>
            </Card>
          </Card>

          <div className="card-details-report">
            <Card
              className=" card details-report"
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70 }}
              bodyStyle={{
                padding: "0px",
              }}
            >
              <div className="interaction-header">
                <h1
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "600",
                    fontSize: "24px",
                  }}
                >
                  {" "}
                  Details Report
                </h1>
              </div>
              <div className="chart-body">
                <DetailsChart />
              </div>
            </Card>
            <div className="button-delete-user">
              <Button
                className="button-delete-2"
                size="large"
                onClick={() => {
                  onDeleteHandler(data.thread._id);
                }}
                block
              >
                <DeleteOutlined /> Delete Thread
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
