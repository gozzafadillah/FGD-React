import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { DeleteOutlined, EditFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteTopic } from "../../../store/topic/TopicSlicer";
import Swal from "sweetalert2";

const CardTopic = (props) => {
  const dispacth = useDispatch();

  const deleted = (id) => {
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
        dispacth(deleteTopic(id));
      }
    });
  };

  const onClickHandler = (id) => {
    props.setGetId(id);
    props.setIsModalOpen(true);
  };

  return (
    <div className="list-body">
      {props.response.data?.map((value) => (
        <div className="card-topic" key={value._id}>
          <Card
            style={{
              width: "250px",
            }}
            cover={<img height={150} alt="example" src={value.imageURL} />}
          >
            <Meta
              title={
                <p
                  style={{
                    padding: "0px",
                    margin: "0px",
                    textAlign: "center",
                  }}
                >
                  {value.topic}
                </p>
              }
              description={value.description}
            />
            <div className="button-group">
              <div
                className="btn-edit"
                onClick={() => onClickHandler(value._id)}
              >
                <EditFilled /> Edit
              </div>
              <Button type="primary" danger onClick={() => deleted(value._id)}>
                <DeleteOutlined />
              </Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardTopic;
