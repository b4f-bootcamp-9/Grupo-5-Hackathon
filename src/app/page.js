import fotografo from "../../public/Images/img1.jpg";
import catering from "../../public/Images/img2.jpg";
import espaco from "../../public/Images/img3.jpg";
import quinta from "../../public/Images/img6.jpg";
import styles from "../../src/app/styles/Cards.module.css";

import Cards from "@/components/Cards";
import SimpleSlider from "@/components/SimpleSlider";

export default function Home() {
  return (
    <div className={styles.containerHome}>
      <div>
        <h1>Sobre nós</h1>
        <p>
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
      </div>
      <h1>✨ Participe de Eventos Exclusivos na Mundo GK dos Livros ✨</h1>
      <div className={styles.containerCards}>
        <Cards
          imageSrc={fotografo}
          title="Evento Geek na Mundo GK dos Livros"
          descricao="Campeonato de RPG - 31/01/2025 )"
          location="Lisboa - ("
          price="Oferta de 1 livro para os 15 primeiros a chegar"
        />
        <Cards
          imageSrc={catering}
          title="Evento Geek na Mundo GK dos Livros"
          descricao="Tarde de Troca de Livros Geek - 28/02/2025)"
          location="Lisboa - ("
          price="Oferta de 1 livro para os 15 primeiros a chegar"
        />
        <Cards
          imageSrc={espaco}
          title="Evento Geek na Mundo GK dos Livros"
          descricao="Encontro de fãs do Harry Potter - 31/03/2025 )"
          location="Lisboa - ("
          price="Oferta de 1 livro para os 15 primeiros a chegar"
        />
        <Cards
          imageSrc={quinta}
          title="Evento Geek na Mundo GK dos Livros"
          descricao="2º Campeonato de RPG da Mundo GK dos Livros - 31/04/2025 )"
          location="Lisboa - ("
          price="Oferta de 1 livro para os 15 primeiros a chegar"
        />
      </div>
      <div className={styles.btnCards}>
        <button>Saiba mais</button>
      </div>
      <SimpleSlider />
    </div>
  );
}
