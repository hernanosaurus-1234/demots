import React from "react";

function SearchBox(props: {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { onSearchChange } = props;
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="Search Movie Title"
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBox;
