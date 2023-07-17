"use client";

import axios from "axios";
import styles from "./page.module.css";
import React from "react";
import HomeCell from "./home/index";

export default function Home() {
  const [input, setInput] = React.useState("");
  const [words, setWords] = React.useState([]);

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    event?.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
      .then((response) => {
        setWords(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main className={styles.main}>
      <h1>Английский словарь</h1>
      <div className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Введите слово"
            required
          />
          <button type="submit">Кнопка</button>
        </form>
        {words.length > 0 ? <HomeCell words={words} /> : null}
      </div>
    </main>
  );
}
