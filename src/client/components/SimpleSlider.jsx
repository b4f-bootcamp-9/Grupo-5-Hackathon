"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useState } from "react";

//Importação das dependencias do swiper :)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "../styles/SimpleSlider.module.css";

function SimpleSlider() {
  const [slidePerView, setSlidePerView] = useState(3);

  const data = [
    { id: "1", image: "https://m.media-amazon.com/images/I/712vJIziMgL._AC_UF1000,1000_QL80_.jpg" },
    { id: "2", image: "https://m.media-amazon.com/images/I/7158aW38zxL.jpg" },
    { id: "3", image: "https://m.media-amazon.com/images/I/91XCwEX5fiL._AC_UF1000,1000_QL80_.jpg" },
    { id: "4", image: "https://m.media-amazon.com/images/I/91+1SUO3vUL._AC_UF1000,1000_QL80_.jpg" },
    { id: "5", image: "https://m.media-amazon.com/images/I/91NAJgaUlKL._AC_UF1000,1000_QL80_.jpg" },
    { id: "6", image: "/Images/img6.jpg" },
  ];

  return (
    <div className={styles.containerInitial}>
      <h1 className={styles.title}>
        🚨 Super Descontos de{" "}
        <span style={{ color: "blue", fontSize: "3rem" }}>70%</span> da Mundo GK
        dos Livros!🚨
      </h1>

      <Swiper
        className={styles.containerSw}
        slidesPerView={slidePerView}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Scrollbar, A11y]}
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
    </div>
  );
}

export default SimpleSlider;
