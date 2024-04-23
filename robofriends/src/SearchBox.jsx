import React from "react";

const SearchBox = () => {
  return (
    <div className="p-2 text-center">
      <input
        type="search"
        placeholder="Search robots"
        className="p-3 text-black bg-blue-300 placeholder-gray-600  box-border border-2 border-green-500 focus:outline-none focus:shadow-lg shadow-blue-500 focus:border-blue-500 rounded-sm "
      />
    </div>
  );
};

export default SearchBox;
