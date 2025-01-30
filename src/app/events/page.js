"use client";
import React, { useState } from "react";
import EventCards from "../../client/components/EventCards";
import ModalAbout from "../../client/components/ModalAbout";
import styles from "../../client/styles/ModalAbout.module.css";

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
