import React from "react";
import styles from "../styles/Sabermais.module.css";

export const Sabermais = ({ onClick, title }) => {
  return (
    <button
      className={styles.buttonSabermais} // Use a classe correta do CSS
      onClick={onClick} // Adicione onClick para interação, se necessário
    >
      {title}
    </button>
  );
};
