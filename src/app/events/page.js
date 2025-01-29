"use client";
import React, { useState } from "react";
import EventCards from "@/components/EventCards";
import ModalAbout from "@/components/ModalAbout";
import styles from "../styles/ModalAbout.module.css";

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleEventAdded = () => {
    setRefreshKey((old) => old + 1);
  };

  return (
    <div>
      <h1>Eventos Recentes</h1>
      <button className={styles.button} onClick={handleOpenModal}>
        Adicionar Evento
      </button>
      <EventCards key={refreshKey} />
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
