"use client"; // Marca o componente como cliente
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "../app/styles/Navbar.module.css"; // Importa os estilos da Navbar
import { useRouter } from "next/navigation";

function Navbar() {
  // ModalAbout

  const router = useRouter();
  const params = useSearchParams();
  const grupo = params.get("grupo");

  return (
    <div className={styles.navbar}>
      {/* Logo à esquerda */}

      <img src="/mdgk.png" alt="Logo" className={styles.logo} />

      <input type="text" placeholder="Pesquisar" />

      {/* Links de navegação à direita */}
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <Link
            style={{
              color: grupo === "grupo5" ? "#000" : "#fff",
              backgroundColor: grupo === "grupo5" ? "#fff" : "",
              borderRadius: ".5rem",
              padding: ".5rem",
              border: "none",
            }}
            href="/card-details?localidade=&grupo=grupo5"
            className={styles.navLink}
          >
            Home
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link
            style={{
              color: grupo === "grupo1" ? "#000" : "#fff",
              backgroundColor: grupo === "grupo1" ? "#246a73" : "",
              borderRadius: ".5rem",
              padding: ".5rem",
              border: "none",
            }}
            href="/card-details?localidade=&grupo=grupo1"
            className={styles.navLink}
          >
            Eventos Geek
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
