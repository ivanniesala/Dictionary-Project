import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

//pexelsAPI:563492ad6f917000010000016a368d60e5284a19b003b0c1e2456089

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);

    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    //documentation:https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000016a368d60e5284a19b003b0c1e2456089";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary ">
      <form className="d-flex" role="search" onSubmit={search}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search a word to find its meaning"
          aria-label="Search"
          onChange={handleKeywordChange}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Explore
        </button>
      </form>
      <p>Suggested words: Sunset, wine, yoga, etc..</p>
      <Photos photos={photos} />
      <Results results={results} />
    
    </div>
  );
}
