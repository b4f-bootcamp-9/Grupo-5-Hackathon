"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Cards.module.css";

export default function EventCards() {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/modalform");
        const data = await response.json();
        console.log("kdasjdlas", data);
        setEvents(data);
      } catch (error) {
        console.error("Erro ao buscar os eventos:", error);
      }
    };

    fetchEvents();
  }, []);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className={styles.container}>
        <h1>✨ Participe de Eventos Exclusivos na Mundo GK dos Livros ✨</h1>
      </div>
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
                <strong>
                  <span style={{ color: "#F6A519" }}>Dia:</span>
                </strong>{" "}
                {events[currentIndex].dia}
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
    </>
  );
}
