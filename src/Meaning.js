import React, { useState } from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";
export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="Definition">{definition.definition}</div>

            <div className="Example">
              <Example example={definition.example} />
            </div>

            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
