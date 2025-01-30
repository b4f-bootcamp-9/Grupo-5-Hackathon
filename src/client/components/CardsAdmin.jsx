"use client";
import React, { useEffect, useState } from "react";
import styles from "../app/styles/EventCards.module.css";
import ModalAbout from "./ModalAbout";

export default function EventCards() {
  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    dia: "",
    ofertas: "",
    condicoes: "",
    evento: "",
    regras: "",
    imagem: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className={styles.cardContainer}>
      {events.length > 0 && (
        <div className={styles.card} key={events[currentIndex]._id}>
          {editingId === events[currentIndex]._id ? (
            <>
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
                  placeholder="Brindes:"
                />
                <input
                  type="text"
                  name="condicoes"
                  value={formData.condicoes}
                  onChange={handleInputChange}
                  className={styles.cardInput}
                  placeholder="Condições:"
                />
                <input
                  type="text"
                  name="evento"
                  value={formData.evento}
                  onChange={handleInputChange}
                  className={styles.cardInput}
                  placeholder="Tipo do Evento:"
                />
                <textarea
                  name="regras"
                  value={formData.regras}
                  onChange={handleInputChange}
                  className={styles.cardTextarea}
                  placeholder="Regras do Evento:"
                ></textarea>
                <button onClick={() => handleSave(events[currentIndex]._id)}>
                  Salvar
                </button>
                <button onClick={() => setEditingId(null)}>Cancelar</button>
              </div>
            </>
          ) : (
            <>
              <div className={styles.cardImage}>
                <img
                  src={events[currentIndex].imagem}
                  alt={events[currentIndex].nome}
                />
              </div>
              <div className={styles.cardContent}>
                <h2>{events[currentIndex].nome}</h2>
                <p>
                  <strong>Dia:</strong> {events[currentIndex].dia}
                </p>
                <p>
                  <strong>Ofertas:</strong> {events[currentIndex].ofertas}
                </p>
                <p>
                  <strong>Condições:</strong> {events[currentIndex].condicoes}
                </p>
                <p>
                  <strong>Evento:</strong> {events[currentIndex].evento}
                </p>
                <p>
                  <strong>Regras:</strong> {events[currentIndex].regras}
                </p>
                <button onClick={() => handleEdit(events[currentIndex])}>
                  Editar
                </button>
                <button onClick={() => handleDelete(events[currentIndex]._id)}>
                  Deletar
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
