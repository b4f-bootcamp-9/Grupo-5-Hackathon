import React from "react";
import styles from "../styles/Footer.module.css";
// import styles from "./s; // Importa o arquivo CSS
import Link from "next/link"; // Para links internos e externos
import Image from "next/image"; // Para o logo e ícones
import facebook from "../../../public/Images/fe--facebook.svg"
import pintrest from "../../../public/Images/fa--pinterest-square.svg"
import x from "../../../public/Images/line-md--twitter-x.svg"
import insta from "../../../public/Images/gg--instagram.svg"

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* Coluna 1 */}
      <div className={styles.column1}>
        {/* Esquerda */}
        <Link href="/informacoes">Informações</Link>
        <Link href="/termos-de-uso">Termos de Uso</Link>
        <Link href="/aviso-privacidade">Aviso de Privacidade</Link>
      </div>
      <div className={styles.column2}>
        <p className={styles.footerText}>
          2025 Mundo GK dos Livros. Todos os direitos reservados.
        </p>
      </div>
      {/* Coluna 2 */}
      <div className={styles.column3}>
        <p>Siga-nos em</p>
        <div className={styles.socialIcons}>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={pintrest} alt="Pinterest" width="35" height="42" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={facebook} alt="Facebook" width="42" height="42" />
          </a>
          <a
            href="https://X.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={x} alt="X (Twitter)" width="42" height="42" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={insta} alt="Instagram" width="42" height="42" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
