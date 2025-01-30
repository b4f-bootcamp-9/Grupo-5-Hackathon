"use client";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredEventos, setIsHoveredEventos] = useState(false);

  const router = useRouter();
  const params = useSearchParams();
  const grupo = params.get("grupo");

  const handleHomeClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleEventsClick = (e) => {
    e.preventDefault();
    router.push("/events");
  };

  return (
    <div className={styles.navbar}>
      {/* Logo à esquerda */}
      <img src="/logo1.png" alt="Logo" className={styles.logo} />

      <input type="text" placeholder="Pesquisar" />

      {/* Links de navegação à direita */}
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <a
            href="/"
            onClick={handleHomeClick}
            style={{
              color: grupo === "grupo5" ? "#000" : "#fff",
              backgroundColor: grupo === "grupo5" ? "#fff" : "",
              borderRadius: ".5rem",
              padding: ".5rem",
              border: "none",
              transition: "all 0.3s ease",
              ...(isHoveredHome
                ? {
                    color: "#f6a418",
                    backgroundColor: "#333",
                  }
                : {}),
            }}
            className={styles.navLink}
            onMouseEnter={() => setIsHoveredHome(true)}
            onMouseLeave={() => setIsHoveredHome(false)}
          >
            Home
          </a>
        </li>

        <li className={styles.navItem}>
          <a
            onClick={handleEventsClick}
            href="/card-details?localidade=&grupo=grupo1"
            style={{
              color: grupo === "grupo1" ? "#000" : "#fff",
              backgroundColor: grupo === "grupo1" ? "#246a73" : "",
              borderRadius: ".5rem",
              padding: ".5rem",
              border: "none",
              transition: "all 0.3s ease",
              ...(isHoveredEventos
                ? {
                    color: "#f6a418",
                    backgroundColor: "#444",
                  }
                : {}),
            }}
            className={styles.navLink}
            onMouseEnter={() => setIsHoveredEventos(true)}
            onMouseLeave={() => setIsHoveredEventos(false)}
          >
            Eventos Geek
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
