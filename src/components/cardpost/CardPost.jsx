import React from "react";
import { Card, Skeleton } from "antd";
import { UserThread } from "./userPost/UserPost";
import { UserDetails } from "./userDetails/UserDetails";
import { useLocation } from "react-router-dom";

const CardPost = ({ response }) => {
  const getPath = useLocation().pathname;
  return (
    <>
      {!response ? (
        <Card>
          <Skeleton
            avatar
            active
            className="skeleton"
            paragraph={{ width: 1200 }}
          ></Skeleton>
        </Card>
      ) : (
        ""
      )}
      {getPath === "/users/details" ? (
        <UserDetails data={response} />
      ) : (
        <UserThread response={response} />
      )}
    </>
  );
};

export default CardPost;
