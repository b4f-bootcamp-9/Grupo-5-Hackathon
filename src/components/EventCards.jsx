"use client"
import React, { useEffect, useState } from 'react';
import styles from '../app/styles/EventCards.module.css';  // Certifique-se de que o caminho está correto

export default function EventCards() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/modalteste');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Erro ao buscar os eventos:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className={styles.cardContainer}>
      {events.map(event => (
        <div className={styles.card} key={event._id}>
          <img src={event.imagem} alt={event.nome} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h2>{event.nome}</h2>
            <p><strong>Dia:</strong> {event.dia}</p>
            <p><strong>Ofertas:</strong> {event.ofertas}</p>
            <p><strong>Condições:</strong> {event.condicoes}</p>
            <p><strong>Evento:</strong> {event.evento}</p>
            <p><strong>Regras:</strong> {event.regras}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
