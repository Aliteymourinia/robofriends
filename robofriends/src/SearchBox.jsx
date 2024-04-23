import React from "react";

const SearchBox = () => {
  return (
    <div className="p-2 text-center">
      <input
        type="search"
        placeholder="search robots"
        className="p-3 text-black bg-blue-300 placeholder-gray-500  box-border"
      />
    </div>
  );
};

export default SearchBox;
