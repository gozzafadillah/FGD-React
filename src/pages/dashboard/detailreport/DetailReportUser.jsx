import { Breadcrumb, Card, Skeleton } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UserDetails } from "../../../components/cardpost/userDetails/UserDetails";
import { getUser } from "../../../store/users/UserSlicer";

const DetailReportUser = () => {
  const param = useParams();
  const dispacth = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispacth(getUser(param.id));
  }, [dispacth, param.id]);

  const response = useSelector((state) => state.user.data.user);
  const loader = useSelector((state) => state.user.fecthStatus);

  return (
    <div className="table">
      <div className="content-main manage-thread-table">
        <div className="header-table">
          <div className="header-text">
            <span>User Detail</span>
          </div>
          <div className="bread-crumb-table">
            <Breadcrumb style={{ margin: "10px 0" }} separator="&#62;">
              <Breadcrumb.Item
                className="manageThread"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/dashboard/users")}
              >
                Users Report
              </Breadcrumb.Item>
              <Breadcrumb.Item className="manageThread">
                User Detail
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="body">
          {loader !== "loading" ? (
            <div className="details-thread">
              <UserDetails response={response} />
            </div>
          ) : (
            <Card>
              <Skeleton
                avatar
                active
                className="skeleton"
                paragraph={{ width: "750px" }}
              ></Skeleton>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailReportUser;
