import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

const FilterTable = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 400);
  return (
    <div className="box">
      <input
        type="search"
        className=""
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search..."
      />
    </div>
  );
};

export default FilterTable;
