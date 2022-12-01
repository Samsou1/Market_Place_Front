import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/apartments?search=${search}`);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-container-form">
      <div className="input-container">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          id="search"
          placeholder="Search"
        />
      </div>
    </form>
  );
};

export default SearchBar;
