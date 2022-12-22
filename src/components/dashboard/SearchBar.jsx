import { Input } from "antd";
import React from "react";
const { Search } = Input;

const SearchBar = () => {
  const onSearch = (value) => console.log(value);

  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
  );
};

export default SearchBar;
