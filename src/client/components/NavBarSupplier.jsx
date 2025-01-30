"use client"; //utilizar para usar os states, pois é no client-side
import { FaRegStar } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { BsShopWindow } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import styles from "../../src/app/styles/NavBarSupplier.module.css"
export default function NavBarSupplier() {
  

    return (
        <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li >
          <BsShopWindow className={styles.icons} />
          A minha montra
          </li>
          <li >
          <SlEnvolopeLetter className={styles.icons} />
          Os meus pedidos
            </li>
          <li >
            <FaRegStar className={styles.icons}/>
            Opniões
            </li>
          <li >
          <CiMoneyCheck1 className={styles.icons}/>
          Faturação
          </li>
          <li >
          <IoSettingsOutline className={styles.icons}/>
          A minha conta
          </li>
        </ul>
      </nav>
    );
  };

