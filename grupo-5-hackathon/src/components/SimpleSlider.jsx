"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useState } from "react";

//Importação das dependencias do swiper :)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "../app/styles/SimpleSlider.module.css";
import ModalAbout from "./ModalAbout";

function SimpleSlider() {
  const [slidePerView, setSlidePerView] = useState(3);
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };
  const data = [
    { id: "1", image: "/Images/anuncio1.jpg" },
    { id: "2", image: "/Images/foto7.jpg" },
    { id: "3", image: "/Images/anuncio3.jpg" },
    { id: "4", image: "/Images/foto6.jpg" },
    { id: "5", image: "/Images/foto7.jpg" },
    { id: "6", image: "/Images/foto8.jpg" },
  ];

  return (
    <div className={styles.containerInitial}>
      <h1 className={styles.title}>
        Fique por dentro dos eventos que acontecem durante a semana
      </h1>
      <Swiper
        className={styles.containerSw}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={slidePerView}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map((item) => (
          <SwiperSlide className={styles.SwiperImagem} key={item.id}>
            <img
              onClick={() => setOpenModal(true)}
              src={item.image}
              alt={`Slide ${item.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.modalAbout}>
        <div className={styles.modalContent}>
          <h2>Destaque o seu evento e alcance o público certo!</h2>
          <h3>
            Tem um evento incrível para divulgar? Nosso site é a montra
            perfeita! Conectamos seu evento a uma audiência engajada, oferecendo
            mais visibilidade, participantes e sucesso.{" "}
          </h3>
          <ul>
            <li>✔ Alcance certeiro: divulgue para quem realmente importa.</li>{" "}
            <li>✔ Simplicidade: anuncie de forma rápida e fácil.</li>
            <li>✔ Resultados reais: mais público, mais impacto!</li>
          </ul>
          <p>
            Não deixe seu evento passar despercebido. Anuncie conosco e faça
            dele um sucesso! Entre em contacto agora mesmo!
          </p>
          {openModal ? <ModalAbout onClose={handleModal} /> : null}
          <button onClick={handleModal}>Saiba mais</button>{" "}
        </div>
      </div>
    </div>
  );
}

export default SimpleSlider;
