import { Breadcrumb, Card, Skeleton } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UserPost } from "../../../components/cardpost/userPost/UserPost";
import { getThread } from "../../../store/thread/ThreadSlicer";

const DetailReportThread = () => {
  const param = useParams();
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const response = useSelector((state) => state.thread);
  const loader = useSelector((state) => state.thread.fecthStatus);

  useEffect(() => {
    dispacth(getThread(param.id));
  }, []);

  return (
    <div className="table">
      <div className="manage-thread-table detail">
        <div className="header-table">
          <div className="header-text">
            <span>Thread Detail</span>
          </div>
          <div className="bread-crumb-table">
            <Breadcrumb style={{ margin: "10px 0" }} separator="&#62;">
              <Breadcrumb.Item
                onClick={() => navigate("/dashboard/thread")}
                className="manageThread"
                style={{ cursor: "pointer" }}
              >
                Thread Report
              </Breadcrumb.Item>
              <Breadcrumb.Item className="manageThread">
                Thread Detail
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="body">
          {loader !== "loading" ? (
            <div className="details-thread">
              <UserPost response={response} />
            </div>
          ) : (
            <Card>
              <Skeleton
                avatar
                active
                className="skeleton"
                paragraph={{ width: 1200 }}
              ></Skeleton>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailReportThread;
