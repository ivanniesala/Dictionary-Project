import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary ">
      
        <form class="d-flex" role="search" onSubmit={search}>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleKeywordChange}
          />
          <button class="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
    </div>
  );
}
