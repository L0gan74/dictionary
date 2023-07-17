import React from "react";
import { IWord } from "../types/types";
import ReactAudioPlayer from "react-audio-player";

interface WordProps {
  words: IWord[];
}

const HomeCell: React.FC<WordProps> = ({ words }) => {
  return (
    <>
      <h2>Произношение</h2>
      {words.map((word) =>
        word.phonetics?.map((item) => (
          <ReactAudioPlayer src={item.audio} controls />
        ))
      )}
      <h2>Значения</h2>
      {words.map((word) =>
        word.meanings?.map((item) =>
          item.definitions?.map((item, index) => (
            <li key={index}>{item.definition}</li>
          ))
        )
      )}
      <h2>Синонимы</h2>
      {words.map((word) =>
        word.meanings?.map((item) =>
          item.synonyms?.map((item, index) => <li key={index}>{item}</li>)
        )
      )}
    </>
  );
};

export default HomeCell;
