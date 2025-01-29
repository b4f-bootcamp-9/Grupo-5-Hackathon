import styles from "../../src/app/styles/Cards.module.css";

import Cards from "@/components/Cards";
import SimpleSlider from "@/components/SimpleSlider";

export default function Home() {
  return (
    <div className={styles.containerHome}>
      <SimpleSlider />
      <h1>✨ Participe de Eventos Exclusivos na Mundo GK dos Livros ✨</h1>
      <div className={styles.containerCards}>
        <Cards />
      </div>
    </div>
  );
}
