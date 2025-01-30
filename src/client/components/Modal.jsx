"use client";
import { useState } from "react";
import styles from "../styles/Modal.module.css";

export default function Modal({ isOpen, onClose, cardData, onSave }) {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState(cardData);

<<<<<<< HEAD:src/client/components/Modal.jsx
  // função para nao rendezrar o mdoal se ele estiver fechado
  if (!isOpen) return null;
=======
  if(!isOpen) return null;

>>>>>>> 3a6e12020405f063667b45a5f595d56138a6230d:src/components/Modal.jsx

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSend = () => {
    setMessageSent(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <span onClick={onClose}>&times;</span>
        <div className={styles.modalHeader}>
          <h1>Peça mais informações</h1>
        </div>
        <div className={styles.textModal}>
          <input type="text" name="nome" placeholder="nome:" required />
          <input type="email" name="email" placeholder="E-mail:" required />
          <input type="tel" name="telefone" placeholder="Telefone:" required />
          <textarea
            type="desc"
            name="descricao"
            placeholder="Descrição:"
            required
            className={styles.inputField}
          ></textarea>
          {messageSent ? (
            <p style={{ color: "green", fontWeight: "bold" }}>
              Enviado com sucesso!
            </p>
          ) : (
            <p>Preencha o formulário e clique em enviar.</p>
          )}
        </div>
        <div className={styles.button}>
          {!messageSent && (
            <button className={styles.enviar} onClick={handleSend}>
              Enviar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
