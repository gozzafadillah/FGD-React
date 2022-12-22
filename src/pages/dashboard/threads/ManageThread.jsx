import { Breadcrumb, Skeleton } from "antd";
import React, { useState } from "react";
import ThreadTable from "../../../components/table/ThreadTable";
import Filter from "../../../components/filtertopic/Filter";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllThread } from "../../../store/thread/ThreadSlicer";

const ManageThread = () => {
  const response = useSelector((state) => state.thread);

  // state
  const [page, setPage] = useState(1);
  const [data, setData] = useState(response.data.threads);

  // navigate
  const navigate = useNavigate();

  // data
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getAllThread(page));
  }, [dispacth, page]);

  return (
    <div className="table">
      <div className="content-main manage-thread-table">
        <div className="header-table">
          <div className="header-text">
            <span>Thread Report</span>
          </div>
          <div className="bread-crumb-table">
            <Breadcrumb style={{ margin: "10px 0" }} separator="&#62;">
              <Breadcrumb.Item
                className="manageThread"
                onClick={() => navigate("/dashboard/thread")}
                style={{ cursor: "pointer" }}
              >
                Thread Report
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="filter-thread-table">
              <div className="sort-topic">
                <Filter
                  response={response.data.threads}
                  setData={setData}
                  data={data}
                />
              </div>
            </div>
          </div>
          <div className="table-thread">
            {response.fecthStatus !== "loading" ? (
              <ThreadTable
                data={data}
                response={response.data.threads}
                page={page}
                setPage={setPage}
              />
            ) : (
              <Skeleton active style={{ width: "80vw" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageThread;
