import React, { useState } from "react";
import styles from "../app/styles/ModalAbout.module.css";

export default function ModalAbout({ onClose }) {
  // Estado para armazenar os valores do formulário
  const [nome, setNome] = useState("");
  const [dia, setDia] = useState("");
  const [ofertas, setOfertas] = useState("");
  const [condicoes, setCondicoes] = useState("");
  const [evento, setEvento] = useState("");
  const [regras, setRegras] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleSend = async () => {
    try {
      // Envia os dados para a API
      const response = await fetch("/api/modalteste", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, dia, ofertas, condicoes, evento, regras }),
      });

      // Verifica se a resposta da API foi bem-sucedida
      if (!response.ok) {
        throw new Error("Erro ao enviar os dados1.");
      }

      // Exibe a mensagem de sucesso
      setMessageSent(true);

      // Fecha o modal após 2 segundos
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Erro ao enviar os dados2:", error);
      alert("Erro ao enviar os dados3. Tente novamente.");
    }
  };

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <span onClick={onClose}>&times;</span>
        <div className={styles.modalHeader}>
          <h1>Preencha com as informações necessárias</h1>
        </div>
        <div className={styles.textModal}>
          <input
            type="text"
            name="nome"
            placeholder="Nome do Evento"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            name="dia"
            placeholder="Dia do Evento"
            required
            value={dia}
            onChange={(e) => setDia(e.target.value)}
          />
          <input
            type="text"
            name="ofertas"
            placeholder="Brindes e/ou Ofertas"
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
          <textarea
            name="regras"
            placeholder="Regras do Evento"
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

