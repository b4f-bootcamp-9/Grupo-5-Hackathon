"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/EventCards.module.css";

export default function EventCards() {
  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    dia: "",
    ofertas: "",
    condicoes: "",
    evento: "",
    regras: "",
    imagem: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleEventAdded = () => {
    setRefreshKey((old) => old + 1);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/modalform");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Erro ao buscar os eventos:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Deseja realmente excluir este evento?")) {
      try {
        const response = await fetch("/api/modalform", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          setEvents(events.filter((event) => event._id !== id));
        } else {
          console.error("Erro ao deletar o evento:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao deletar o evento:", error);
      }
    }
  };

  const handleEdit = (event) => {
    setEditingId(event._id);
    setFormData({
      nome: event.nome,
      dia: event.dia,
      ofertas: event.ofertas,
      condicoes: event.condicoes,
      evento: event.evento,
      regras: event.regras,
      imagem: event.imagem,
    });
  };

  const handleSave = async (id) => {
    try {
      const response = await fetch("/api/modalform", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, ...formData }),
      });

      if (response.ok) {
        setEvents(
          events.map((event) =>
            event._id === id ? { ...event, ...formData } : event
          )
        );
        setEditingId(null);
      } else {
        console.error("Erro ao atualizar o evento:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao atualizar o evento:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className={styles.cardContainer}>
        {events.map((event) => (
          <div className={styles.card} key={event._id}>
            {editingId === event._id ? (
              <>
                <input
                  type="text"
                  name="imagem"
                  value={formData.imagem}
                  onChange={handleInputChange}
                  className={styles.cardImageInput}
                  placeholder="Insira ImagemURL:"
                />
                <div className={styles.cardContent}>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className={styles.cardInput}
                    placeholder="Nome do Evento:"
                  />
                  <input
                    type="text"
                    name="dia"
                    value={formData.dia}
                    onChange={handleInputChange}
                    className={styles.cardInput}
                    placeholder="Dia do Evento:"
                  />
                  <input
                    type="text"
                    name="ofertas"
                    value={formData.ofertas}
                    onChange={handleInputChange}
                    className={styles.cardInput}
                    placeholder="Brindes e/ou Ofertas:"
                  />
                  <input
                    type="text"
                    name="condicoes"
                    value={formData.condicoes}
                    onChange={handleInputChange}
                    className={styles.cardInput}
                    placeholder="Condições: (Ex. 20 Primeiras pessoas a chegar)"
                  />
                  <input
                    type="text"
                    name="evento"
                    value={formData.evento}
                    onChange={handleInputChange}
                    className={styles.cardInput}
                    placeholder="Evento: (Ex. Campeonato de jogos de Tabuleiro)"
                  />
                  <textarea
                    name="regras"
                    value={formData.regras}
                    onChange={handleInputChange}
                    className={styles.cardTextarea}
                    placeholder="Insira as Regras do Evento:"
                  ></textarea>
                  <button onClick={() => handleSave(event._id)}>Salvar</button>
                  <button onClick={() => setEditingId(null)}>Cancelar</button>
                </div>
              </>
            ) : (
              <>
                <img
                  src={event.imagem}
                  alt={event.nome}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h2>{event.nome}</h2>
                  <p>
                    <strong>Dia:</strong> {event.dia}
                  </p>
                  <p>
                    <strong>Ofertas:</strong> {event.ofertas}
                  </p>
                  <p>
                    <strong>Condições:</strong> {event.condicoes}
                  </p>
                  <p>
                    <strong>Evento:</strong> {event.evento}
                  </p>
                  <p>
                    <strong>Regras:</strong> {event.regras}
                  </p>
                  <button onClick={() => handleEdit(event)}>Editar</button>
                  <button onClick={() => handleDelete(event._id)}>
                    Deletar
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ModalAbout
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          onEventAdded={handleEventAdded}
        />
      )}
    </div>
  );
}
