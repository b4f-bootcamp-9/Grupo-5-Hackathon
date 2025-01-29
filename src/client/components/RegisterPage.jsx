import React from "react";
import styles from "../styles/RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Adicione informação sobre a sua empresa</h1>
      <div className={styles.section}>
        <h2>Dados de Acesso</h2>
        <label className={styles.label} htmlFor="username">
          Utilizador *<br />
        </label>
        <br />
        <input
          className={styles.input}
          id="username"
          type="text"
          placeholder="Nome do utilizador:"
        />
        <br />
        <a className={styles.link} href="#">
          Desejo mudar a password
        </a>
      </div>
      <div className={styles.section}>
        <label className={styles.label} htmlFor="description">
          Descreva a sua empresa (na terceira pessoa) *
        </label>
        <p className={styles.description}>
          Quer conquistar a atenção dos clientes?
          <br />
          <br />
          Este é o sítio certo para se dar a conhecer! <br />
          <br />
          Explique porque é que a sua empresa faz a diferença na realização de
          um evento. A nossa equipa de editores utilizará todas as informações
          que nos fornecer para criar um anúncio atrativo.
        </p>
        <textarea
          className={styles.textarea}
          id="description"
          placeholder="Descreva a sua empresa aqui..."
        ></textarea>
      </div>
    </div>
  );
};

export default RegisterPage;
