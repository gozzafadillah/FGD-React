import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages";
import Dashboard from "../pages/dashboard";
import DetailReportThread from "../pages/dashboard/detailreport/DetailReportThread";
import DetailReportUser from "../pages/dashboard/detailreport/DetailReportUser";
import MainDashboard from "../pages/dashboard/main/MainDashboard";
import ManageThread from "../pages/dashboard/threads/ManageThread";
import TopicMain from "../pages/dashboard/topic/TopicMain";
import ManageUsers from "../pages/dashboard/users/ManageUsers";
import ErrorPage from "../pages/errPage/ErrorPage";
import MainLandingPage from "../pages/landingPage/MainLandingPage";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

const RouteConfiguration = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLandingPage />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<MainDashboard />} />
            <Route path="topic" element={<TopicMain />} />
            <Route path="thread" element={<ManageThread />} />
            <Route path="thread/details/:id" element={<DetailReportThread />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="users/details/:id" element={<DetailReportUser />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfiguration;
