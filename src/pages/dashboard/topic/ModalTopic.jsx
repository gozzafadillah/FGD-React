import { Button, Form, Input, Modal, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { UploadOutlined, SendOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { createTopic, updateTopic } from "../../../store/topic/TopicSlicer";
import Swal from "sweetalert2";
import { useEffect } from "react";

const regexName = /^[A-Za-z ]*$/;

const ModalTopic = (props) => {
  // state
  const [data, setData] = useState({
    topic: "",
    description: "",
  });
  const [image, setImage] = useState({});

  const dispacth = useDispatch();
  const stateData = useSelector((state) => state.topic);

  useEffect(() => {
    if (props.getId) {
      const index = stateData?.data.findIndex((val) => val._id === props.getId);
      setData(stateData.data[index]);
    }
  }, [props.getId, stateData]);

  const [form] = Form.useForm();

  const [errorMessages, setErrorMessages] = useState({
    topic: false,
    description: false,
    image: false,
  });

  const onChangeUpload = ({ fileList }) => {
    setImage(fileList[0]);
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [e.target.name]: e.target.value });

    if (name === "topic") {
      if (regexName.test(value) && value !== "") {
        setErrorMessages({
          ...errorMessages,
          topic: false,
        });
      } else {
        setErrorMessages({
          ...errorMessages,
          topic: true,
        });
      }
    }

    if (name === "description") {
      if (value !== "") {
        setErrorMessages({
          ...errorMessages,
          description: false,
        });
      } else {
        setErrorMessages({
          ...errorMessages,
          description: true,
        });
      }
    }
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("topic", data.topic);
    formData.append("description", data.description);
    formData.append("image", image.originFileObj);

    if (
      errorMessages.topic === false &&
      errorMessages.description === false &&
      errorMessages.image === false
    ) {
      if (!props.getId) {
        dispacth(createTopic(formData));
      } else {
        dispacth(
          updateTopic({
            id: props.getId,
            form: formData,
          })
        );
      }
      setData({
        topic: "",
        description: "",
      });
      setImage({});
      props.setGetId("");
      props.handleOk();
    } else {
      Swal.fire({
        title: "Please Input again!!",
        icon: "error",
      });
      setData({
        topic: "",
        description: "",
      });
      setImage({});
      setErrorMessages({
        topic: false,
        description: false,
        image: false,
      });
    }
  };

  const onCancel = () => {
    props.handleCancel();
    setData("");
    setErrorMessages({
      topic: false,
      description: false,
    });
    setImage({});
  };

  return (
    <Modal open={props.isModalOpen} footer={null} onCancel={onCancel}>
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          layout: "vertical",
        }}
      >
        <Form.Item
          label="Topic Title"
          validateStatus={!errorMessages.topic ? "" : "error"}
          help={
            !errorMessages.topic
              ? ""
              : "Should be combination alphabets and required"
          }
          style={{ fontWeight: "600" }}
        >
          <Input
            placeholder="Write the topic here.."
            value={data.topic}
            name="topic"
            onChange={onChangeHandler}
            required
          />
        </Form.Item>
        <Form.Item
          style={{ fontWeight: "600" }}
          label="Description Topic"
          validateStatus={!errorMessages.description ? "" : "error"}
          help={!errorMessages.description ? "" : "required deskripsi"}
          hasFeedback
        >
          <TextArea
            rows={4}
            name="description"
            placeholder="Write the descriptions.."
            value={data.description}
            onChange={onChangeHandler}
            allowClear
            required
          />
        </Form.Item>
        <Form.Item
          style={{ fontWeight: "600" }}
          label="Upload Picture"
          validateStatus={!errorMessages.image ? "" : "error"}
          help={!errorMessages.image ? "" : "format image png/jpg"}
        >
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            accept=".jpg,.png"
            name="image"
            onChange={onChangeUpload}
            beforeUpload={(file) => {
              file.type === "image/png" || file.type === "image/jpeg"
                ? setErrorMessages({ ...errorMessages, image: false })
                : setErrorMessages({ ...errorMessages, image: true });
              return false;
            }}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <div
          className="btn-group"
          style={{ display: "flex", justifyContent: "end", gap: "10px" }}
        >
          <button
            style={{
              background: "rgba(23, 128, 102, 1)",
              padding: "7px 12px 7px 12px",
              color: "white",
              width: "150px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={(e) => onClickHandler(e)}
            className="btn-submit"
            type="submit"
          >
            <SendOutlined /> Submit
          </button>
          <button
            style={{
              background: "red",
              padding: "7px 6px 7px 6px",
              color: "white",
              width: "70px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
            className="btn-submit"
            type="cancel"
            onClick={() => onCancel()}
          >
            Cancel
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalTopic;
