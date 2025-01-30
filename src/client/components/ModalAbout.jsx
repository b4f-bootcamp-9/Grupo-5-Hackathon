"use client";
import React, { useState } from "react";
import styles from "../styles/ModalAbout.module.css";

export default function ModalAbout({ isOpen, setIsOpen, onEventAdded }) {
  if (!isOpen) return null;

  const [nome, setNome] = useState("");
  const [dia, setDia] = useState("");
  const [ofertas, setOfertas] = useState("");
  const [condicoes, setCondicoes] = useState("");
  const [evento, setEvento] = useState("");
  const [regras, setRegras] = useState("");
  const [imagem, setImagem] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleSend = async () => {
    try {
      const response = await fetch("/api/modalform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          dia,
          ofertas,
          condicoes,
          evento,
          regras,
          imagem,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados1.");
      }

      setMessageSent(true);

      setTimeout(() => {
        setIsOpen(false);
      }, 2000);

      if (onEventAdded) {
        onEventAdded();
      }
    } catch (error) {
      console.error("Erro ao enviar os dados2:", error);
      alert("Erro ao enviar os dados3. Tente novamente.");
    }
  };

  return (
    <div className={styles.container} onClick={() => setIsOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <span onClick={() => setIsOpen(false)}>&times;</span>
        <div className={styles.modalHeader}>
          <h1>Preencha com as informações necessárias</h1>
        </div>
        <div className={styles.textModal}>
          <input
            type="text"
            name="nome"
            placeholder="Nome do Evento:"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            name="dia"
            placeholder="Dia do Evento:"
            required
            value={dia}
            onChange={(e) => setDia(e.target.value)}
          />
          <input
            type="text"
            name="ofertas"
            placeholder="Brindes e/ou Ofertas:"
            required
            value={ofertas}
            onChange={(e) => setOfertas(e.target.value)}
          />
          <input
            type="text"
            name="condicoes"
            placeholder="Condições (Ex. 20 Primeiras pessoas a chegar)"
            required
            value={condicoes}
            onChange={(e) => setCondicoes(e.target.value)}
          />
          <input
            type="text"
            name="evento"
            placeholder="Evento: (Ex. Campeonato de jogos de Tabuleiro)"
            required
            value={evento}
            onChange={(e) => setEvento(e.target.value)}
          />
          <input
            type="text"
            name="imagem"
            placeholder="Imagem Url:"
            required
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
          <textarea
            name="regras"
            placeholder="Insira as Regras do Evento:"
            required
            className={styles.inputField}
            value={regras}
            onChange={(e) => setRegras(e.target.value)}
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
