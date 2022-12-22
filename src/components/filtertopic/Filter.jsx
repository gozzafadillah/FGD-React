import { Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const useDounce = (data, ms) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(data);
    }, ms);
    return () => {
      clearTimeout(handler);
    };
  }, [data, ms]);
  return value;
};

const Filter = (props) => {
  const [_text, setTopic] = useState("");
  const text = useDounce(_text, 1000);

  useEffect(() => {
    if (text !== "") {
      props.setData(
        props.response.filter(
          (val) =>
            val.topic.topic.toLowerCase() === text.toLowerCase() ||
            val.topic.topic.toLowerCase().match(text.toLowerCase()) ||
            val.title.toLowerCase() === text.toLowerCase() ||
            val.title.toLowerCase().match(text.toLowerCase()) ||
            val.creator.userName.toLowerCase() === text.toLowerCase() ||
            val.creator.userName.toLowerCase().match(text.toLowerCase())
        )
      );
    } else {
      props.setData(props.response);
    }
  }, [text, props]);

  const onChangeHandler = (e) => {
    setTopic(e.target.value);
  };
  return (
    <Input
      placeholder="Search"
      onChange={onChangeHandler}
      prefix={<SearchOutlined />}
    />
  );
};
export default Filter;
