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
    { id: "1", image: "/Images/img1.jpg" },
    { id: "2", image: "/Images/img2.jpg" },
    { id: "3", image: "/Images/img3.jpg" },
    { id: "4", image: "/Images/img7.jpg" },
    { id: "5", image: "/Images/img5.jpg" },
    { id: "6", image: "/Images/img6.jpg" },
  ];

  return (
    <div className={styles.containerInitial}>
      <h1 className={styles.title}>
        🚨 Super Descontos de{" "}
        <span style={{ color: "blue", fontSize: "3rem" }}>70%</span> da Mundo GK
        dos Livros! Garanta Já Seus Livros Favoritos Com Preços Incríveis! 🚨
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

      {/* <div className={styles.modalContent}>
        {openModal ? <ModalAbout onClose={handleModal} /> : null}
        <button onClick={handleModal}>Saiba mais</button>{" "}
      </div> */}
    </div>
  );
}

export default SimpleSlider;
