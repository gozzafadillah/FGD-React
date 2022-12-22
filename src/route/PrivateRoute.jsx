import { Layout } from "antd";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../helper/Const";

const PrivateRoute = () => {
  if (!Auth.isAuthorized()) {
    return <Navigate to="/login" replace />;
  }
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default PrivateRoute;
