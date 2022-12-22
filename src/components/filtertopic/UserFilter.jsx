import { ClearOutlined } from "@ant-design/icons";
import { Select } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import Highlighter from "react-highlight-words";

// set interval

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

const UserFilter = (props) => {
  // data props
  const data = props.response;
  const catchData = props.catchData;

  // data search
  const [filteredData, setFilteredData] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectData, setSelectData] = useState("");

  // interval Value
  const text = useDounce(searchText, 1000);

  const convertToString = (value) => {
    const newValue = value;
    return newValue ? "active" : "suspend";
  };

  useEffect(() => {
    if (searchText !== "") {
      const lowerCaseSearchText = searchText.toLowerCase();

      const newFilteredData = data.filter((item) => {
        return (
          item._id.toLowerCase().includes(lowerCaseSearchText) ||
          item.userName.toLowerCase().includes(lowerCaseSearchText) ||
          item.email.toLowerCase().includes(lowerCaseSearchText) ||
          convertToString(item.isActive)
            .toLowerCase()
            .includes(lowerCaseSearchText) ||
          moment(item.createdAt)
            .format("ll")
            .toLowerCase()
            .includes(lowerCaseSearchText)
        );
      });
      catchData(searchText, newFilteredData);
    } else {
      catchData("");
    }
  }, [text]);

  const handleSearch = (event) => {
    const newEvent = event;
    setSearchText(newEvent);
  };

  const onClear = () => {
    setSelectData("");
    setSearchText("");
    setFilteredData("");
  };

  return (
    <Select
      mode="tags"
      placeholder={"Search Data"}
      onSearch={handleSearch}
      style={{ width: 200 }}
      allowClear={<ClearOutlined />}
      onClear={onClear}
    >
      {data?.map((item) => (
        <Select.Option key={item._id} value={item.userName}>
          {
            <Highlighter
              highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
              searchWords={[searchText ? searchText : selectData]}
              autoEscape
              textToHighlight={item.userName.toString()}
            />
          }
        </Select.Option>
      ))}
    </Select>
  );
};
export default UserFilter;
