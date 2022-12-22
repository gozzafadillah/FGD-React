import { Breadcrumb, Skeleton } from "antd";
import React, { useState } from "react";
import UsersTable from "../../../components/table/UsersTable";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../../store/users/UserSlicer";
import UserFilter from "../../../components/filtertopic/UserFilter";

const ManageUsers = () => {
  const response = useSelector((state) => state.user.data);
  const loader = useSelector((state) => state.user.fecthStatus);

  const page = 1;
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState("");

  const navigate = useNavigate();
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getAllUsers(page));
  }, [dispacth]);

  const catchData = (search, filtered) => {
    const newSearch = search;
    const newFilter = filtered;

    if (newSearch !== "") {
      setSearchData(newSearch);
      setFilteredData(newFilter);
    } else {
      setSearchData("");
      setFilteredData("");
    }
  };

  return (
    <div className="table">
      <div className="content-main manage-thread-table">
        <div className="header-table">
          <div className="header-text">
            <span>Users Report</span>
          </div>
          <div className="bread-crumb-table">
            <Breadcrumb style={{ margin: "10px 0" }} separator="&#62;">
              <Breadcrumb.Item
                className="breadcrumb-text"
                onClick={() => navigate("/dashboard")}
                style={{ cursor: "pointer" }}
              >
                Users Report
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="filter-thread-table">
              <div className="sort-topic">
                <UserFilter response={response.users} catchData={catchData} />
              </div>
            </div>
          </div>
          {loader !== "loading" ? (
            <div className="table-thread">
              <UsersTable
                response={filteredData !== "" ? filteredData : response.users}
                searchData={searchData}
              />
            </div>
          ) : (
            <Skeleton active style={{ width: "80vw" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
