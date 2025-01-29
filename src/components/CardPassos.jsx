
import React from 'react';
import styles from "../app/styles/CardPassos.module.css"

const CardPassos = ({ title, description,icons, onClick}) => {
  return (
    <div className={styles.card} onClick={onClick} >
      <div className={styles.content}>
      <div className={styles.icons}>{icons}
      </div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.infoRow}>{description}
        </div>
      </div>
      </div>
  );
};

export default CardPassos;