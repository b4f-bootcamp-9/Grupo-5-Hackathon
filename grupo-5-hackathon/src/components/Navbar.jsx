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
    <nav className={styles.navbar}>
      {/* Logo à esquerda */}
      <div className={styles.logoContainer}>
        <button className={styles.btnLogo} onClick={() => router.push("/")}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </button>
      </div>
      {/* Links de navegação à direita */}
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <Link
            style={{
              color: grupo === "grupo5" ? "white" : "black",
              backgroundColor: grupo === "grupo5" ? "#246a73" : "",
              borderRadius: ".5rem",
              padding: ".5rem",
              border: "none",
            }}
            href="/card-details?localidade=&grupo=grupo5"
            className={styles.navLink}
          >
            Artistas
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            style={{
              color: grupo === "grupo3" ? "white" : "black",
              backgroundColor: grupo === "grupo3" ? "#246a73" : "",
              borderRadius: ".5rem",
              padding: ".5rem",
              border: "none",
            }}
            href="/card-details?localidade=&grupo=grupo3"
            className={styles.navLink}
          >
            Catering
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link
            style={{
              color: grupo === "grupo4" ? "white" : "black",
              backgroundColor: grupo === "grupo4" ? "#246a73" : "",
              borderRadius: ".5rem",
              padding: ".5rem",
              border: "none",
            }}
            href="/card-details?localidade=&grupo=grupo4"
            className={styles.navLink}
          >
            Decorações
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            style={{
              color: grupo === "grupo2" ? "white" : "black",
              backgroundColor: grupo === "grupo2" ? "#246a73" : "",
              borderRadius: ".5rem",
              padding: ".5rem",
              border: "none",
            }}
            href="/card-details?localidade=&grupo=grupo2"
            className={styles.navLink}
          >
            Espaços
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            style={{
              color: grupo === "grupo1" ? "white" : "black",
              backgroundColor: grupo === "grupo1" ? "#246a73" : "",
              borderRadius: ".5rem",
              padding: ".5rem",
              border: "none",
            }}
            href="/card-details?localidade=&grupo=grupo1"
            className={styles.navLink}
          >
            Fotógrafos
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            style={{
              color: grupo === "grupo6" ? "white" : "black",
              backgroundColor: grupo === "grupo6" ? "#246a73" : "",
              borderRadius: ".5rem",
              padding: ".5rem",
              border: "none",
            }}
            href="/card-details?localidade=&grupo=grupo6"
            className={styles.navLink}
          >
            Transportes
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/sobre-nos" className={styles.navLink}>
            Sobre Nós
          </Link>
        </li>
        <li className={styles.navItem}>
          <button
            className={styles.btnLogo}
            onClick={() => router.push("/login")}
          >
            <img src="/Images/perfil.png" alt="" className={styles.perfil} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
