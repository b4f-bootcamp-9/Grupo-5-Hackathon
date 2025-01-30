"use client";
import React, { useState } from "react";
import EventCards from "../../client/components/EventCards";
import ModalAbout from "../../client/components/ModalAbout";
import styles from "../../client/styles/ModalAbout.module.css";
import { useRouter } from "next/navigation";
import BookCards from "@/client/components/BookCards";

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const router = useRouter();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleEventAdded = () => {
    setRefreshKey((old) => old + 1);
  };

  const handleGraficosClick = () => {
    router.push("/graficos");
  };

  return (
    <div className={styles.containerContent}>
      <h1 style={{ textAlign: "center" }}>Eventos Recentes</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={handleOpenModal} className={styles.button}>
          Adicionar Evento
        </button>
        <button onClick={handleGraficosClick} className={styles.button}
        >
          Gráficos
        </button>
      </div>
      <EventCards key={refreshKey} />
      {isModalOpen && (
        <ModalAbout
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          onEventAdded={handleEventAdded}
        />
      )}
      <BookCards/>
    </div>
  );
}
