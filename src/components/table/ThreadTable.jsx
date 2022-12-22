import React, { useEffect, useState } from "react";
import { Button, Popover, Table } from "antd";
import { InfoCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteThread, getThread } from "../../store/thread/ThreadSlicer";
import moment from "moment";
import "moment/locale/id";
import Swal from "sweetalert2";

const ThreadTable = (props) => {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.data.length === 0) {
      setData(props.response);
    } else {
      setData(props.data);
    }
  }, [props.data, props.response]);

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
        dispacth(deleteThread(id));
      }
    });
  };
  //
  const columns = [
    {
      title: "#",
      dataIndex: "_id",
      render: (item, record, index) => <>{index + 1}</>,
      key: "_id",
      width: "2%",
    },
    {
      title: "Username",
      dataIndex: "creator",
      render: (val) => val.userName,
      width: "12%",
    },
    {
      title: "Thread Title",
      dataIndex: "title",
      width: "15%",
    },
    {
      title: "Topic",
      dataIndex: "topic",
      render: (val) => val.topic,
      width: "10%",
    },
    {
      title: "Report",
      dataIndex: "totalReported",
      width: "10%",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (val) => {
        moment.locale("id");
        return moment(val).format("ll");
      },
      width: "10%",
    },
    {
      title: "Action",
      dataIndex: "operation",
      width: "10%",
      editable: true,
      render: (_, record) => {
        return (
          <>
            <Popover
              content={
                <div style={{ display: "grid" }}>
                  <Button
                    type="text"
                    style={{ marginBottom: "10px", background: "#D1E6E0" }}
                    onClick={() => {
                      dispacth(getThread(record._id));
                      navigate("/dashboard/thread/details/" + record._id);
                    }}
                  >
                    <InfoCircleOutlined />
                    Details
                  </Button>
                  <Button
                    type="text"
                    onClick={() => onDeleteHandler(record._id)}
                  >
                    <DeleteOutlined />
                    Delete
                  </Button>
                </div>
              }
              destroyTooltipOnHide
            >
              <Button type={"text"}>&#x2022; &#x2022; &#x2022;</Button>
            </Popover>
          </>
        );
      },
    },
  ];
  //
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        title: col.title,
      }),
    };
  });
  //
  return (
    <Table
      bordered
      dataSource={data}
      columns={mergedColumns}
      rowClassName="editable-row"
      rowKey={(val) => val._id}
      pagination={{
        position: ["bottomCenter"],
      }}
    />
  );
};
export default ThreadTable;
