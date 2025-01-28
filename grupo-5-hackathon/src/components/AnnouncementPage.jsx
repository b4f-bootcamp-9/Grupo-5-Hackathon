"use client";
import { useState } from "react";
import styles from "../app/styles/Announcement.module.css";
import Modal from "./Modal";
import { PiMountains } from "react-icons/pi";
import { LuTrees } from "react-icons/lu";
import { FaParking } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

//Importação das dependencias do swiper :)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function AnnouncementPage() {
  const [modalValue, setModalValue] = useState(false);
  const [slidePerView, setSlidePerView] = useState(2);

  // Swipe
  const data = [
    { id: "1", image: "/Images/cenas1.png" },
    { id: "2", image: "/Images/cenas2.png" },
    { id: "3", image: "/Images/cenas3.png" },
    { id: "3", image: "/Images/cenas4.png" },
    { id: "3", image: "/Images/cenas5.png" },
  ];

  // Alternar a visibilidade do modal
  const handleModal = () => {
    setModalValue((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1>Quinta do Belo-Monte</h1>
        <div className={styles.rating}>
          ★★★★★ <span className={styles.ratingText}>(479) - Excelente</span>
        </div>
        <p>
          {" "}
          <IoLocationOutline className={styles.icons} />
          Mem Martins-Sintra
        </p>
        <div className={styles.mainContentWrapper}>
          <div className={styles.imageGallery}>
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
          </div>
          <div className={styles.infoSection}>
            <h2>Dados de Interesse</h2>
            <ul>
              <li>
                {" "}
                <PiMountains className={styles.icons} /> Na Montanha
              </li>
              <li>
                <LuTrees className={styles.icons} /> Espaço Verde, sinta a
                Natureza
              </li>
              <li>
                <FaParking className={styles.icons} />
                Parque de Estacionamento
              </li>
              <li>
                <FaRegCalendarCheck className={styles.icons} />
                Apenas um Evento por Dia
              </li>
            </ul>
            <div className={styles.contactSection}>
              {modalValue ? <Modal onClose={handleModal} /> : null}
              <button onClick={handleModal} className={styles.contactButton}>
                Entrar em contacto
              </button>
            </div>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <button className={styles.infoButton}>Informação</button>
          <button className={styles.infoButton}>Opiniões</button>
          <button className={styles.infoButton}>Mapa</button>
        </div>
      </div>

      <div className={styles.pageContainer}></div>

      <div className={styles.detailedInfo}>
        <h2>Informação sobre o Espaço</h2>
        <p>
          Situada na freguesia de Mem Martins-Sintra, no concelho de Sintra, a
          Quinta do Belo-Montel está mais que preparada para receber a grande
          festa do vosso casamento. Com um património histórico invejável e
          espaços maravilhosamente equipados e decorados, esta quinta surpreende
          pela sua beleza e requinte, bem como pela paisagem verdejante entre a
          vinha e a montanha.
        </p>
        <h3>Espaços e capacidade</h3>
        <p>
          Esta maravilhosa quinta tem para vos oferecer salões amplos e
          luxuosos, uma capela quase intacta desde o século XIX, cozinha para
          uso do catering, uma incrível zona ajardinada e estacionamento privado
          para todos os vossos convidados. Se o vosso casamento de sonho pede
          uma harmoniosa mistura entre o rústico e o sofisticado, esta é a opção
          certa para vocês.
        </p>
        <h3>Serviços que oferece</h3>
        <p>
          Da Quinta do Gradil podem esperar um serviço de copo-de-água de
          excelência e atento a cada detalhe. Os profissionais muito experientes
          e dedicados desta quinta também darão o seu melhor para vos oferecer
          fantásticos serviços de cerimónia, fotografia, música e decoração, que
          prometem tornar o vosso dia ainda mais especial e único.
        </p>
      </div>
    </div>
  );
}
