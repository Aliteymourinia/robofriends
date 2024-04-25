import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search robots"
        className="p-2 m-2 text-black bg-blue-300 placeholder-gray-600  box-border border-2 focus:outline-none border-green-500 focus:shadow-lg focus:border-blue-500 hover:shadow-lg rounded-sm "
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
