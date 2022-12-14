import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css"
//  meaning.definitions[0].definition;
export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>Word: {props.results.word}</h2>
        {props.results.phonetics.slice(1, 2).map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
