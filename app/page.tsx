"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    "Let's GOGO": "basic-chat"
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        Starty Marty Super Mathe Nachhilfeapp, dass es sogar Leona versteht
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/examples/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
