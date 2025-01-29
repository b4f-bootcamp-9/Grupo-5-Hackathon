"use client";
import React, { useEffect, useState } from "react";
import styles from "../app/styles/EventCards.module.css";

export default function EventCards() {
  const [events, setEvents] = useState([]);
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
    if (window.confirm('Deseja realmente excluir este evento?')) {
      try {
        const response = await fetch('/api/modalform', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          setEvents(events.filter(event => event._id !== id));
        } else {
          console.error('Erro ao deletar o evento:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao deletar o evento:', error);
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
      const response = await fetch('/api/modalform', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, ...formData }),
      });

      if (response.ok) {
        setEvents(events.map(event => (event._id === id ? { ...event, ...formData } : event)));
        setEditingId(null);
      } else {
        console.error('Erro ao atualizar o evento:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao atualizar o evento:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.cardContainer}>
      <button className={styles.sliderButton} onClick={prevCard}>
        {"<"}
      </button>
      {events.length > 0 && (
        <div className={styles.card} key={events[currentIndex]._id}>
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
            <p style={{ textAlign: "center", padding: "1rem" }}>
              Garanta ja sua Vaga !!!
            </p>
          </div>
        </div>
      )}
      <button className={styles.sliderButton} onClick={nextCard}>
        {">"}
      </button>
    </div>
  );
}
