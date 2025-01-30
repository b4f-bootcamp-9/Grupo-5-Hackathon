"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/BookStorage.module.css"; // Supondo que EventCards.css tenha estilos que você quer reutilizar

export default function BookCards() {
  const [books, setBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books"); // Supondo que a rota de API esteja configurada
        const data = await response.json();
        setBooks(data); 
      } catch (error) {
        console.error("Erro ao buscar os livros:", error);
      }
    };

    fetchBooks();
  }, []);

  const calculateMonthsAgo = (date) => {
    const now = new Date();
    const receivedDate = new Date(date);
    const diffMonths = now.getMonth() - receivedDate.getMonth() + 
      (12 * (now.getFullYear() - receivedDate.getFullYear()));
    return diffMonths;
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    );
  };

  // Ordenar os livros do mais antigo para o mais novo
  const sortedBooks = [...books].sort((a, b) => new Date(a.dataDeRecebimento) - new Date(b.dataDeRecebimento));

  return (
    <div className={styles.cardContainer}>
      <button className={styles.buttonTwo} onClick={prevCard}>
        {"<"}
      </button>
      {sortedBooks.length > 0 && (
        <div className={styles.card} key={sortedBooks[currentIndex]._id}>
          <div className={styles.cardImage}>
            <img
              src={sortedBooks[currentIndex].imagemURL}
              alt={sortedBooks[currentIndex].nome}
            />
          </div>
          <div className={styles.cardContent}>
            <h2>{sortedBooks[currentIndex].nome}</h2>
            <p>
              <strong>Quantidade em stock:</strong> {sortedBooks[currentIndex].quantidadeEmStock}
            </p>
            <p>
              <strong>Data de recebimento:</strong> {new Date(sortedBooks[currentIndex].dataDeRecebimento).toLocaleDateString()}
            </p>
            <p>
              <strong>Recebido há:</strong> {calculateMonthsAgo(sortedBooks[currentIndex].dataDeRecebimento)} meses
            </p>
          </div>
        </div>
      )}
      <button className={styles.buttonTwo} onClick={nextCard}>
        {">"}
      </button>
    </div>
  );
}
