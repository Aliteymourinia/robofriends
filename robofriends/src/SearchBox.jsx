import React from "react";

const SearchBox = () => {
  return (
    <div className="p-2 text-center">
      <input
        type="search"
        placeholder="Search robots"
        className="p-3 text-black bg-blue-300 placeholder-gray-600  box-border border-2 focus:outline-none border-green-500 focus:shadow-lg focus:border-blue-500 hover:shadow-lg rounded-sm "
      />
    </div>
  );
};

export default SearchBox;
