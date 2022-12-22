import { Layout } from "antd";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../helper/Const";

const ProtectedRoute = () => {
  if (Auth.isAuthorized()) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoute;
