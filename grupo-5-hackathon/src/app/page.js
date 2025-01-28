import fotografo from "../../public/Images/fotografo1.png";
import catering from "../../public/Images/Catering2.jpg";
import espaco from "../../public/Images/espaco1.png";
import quinta from "../../public/Images/Quinta2.jpg";
import styles from "../../src/app/styles/Cards.module.css";
import Cards from "@/components/Cards";
import HomePage from "@/components/HomePage";
import SimpleSlider from "@/components/SimpleSlider";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#EFDFDF" }}>
      <HomePage />
      <h2
        style={{
          fontFamily: "Roboto",
          textAlign: "center",
          fontSize: "2rem",
          margin: "2.5rem",
        }}
      >
        As 4 Empresas Mais Recomendadas do Nosso Site!
      </h2>

      <div className={styles.containerCards}>
        <Cards
          imageSrc={fotografo}
          title="OnClick Fotografia"
          description="Serviços de fotografia profissional"
          stars={4.9}
          reviews={108}
          location="Torres Vedras"
          price="A partir de 350€"
        />
        <Cards
          imageSrc={catering}
          title="Companhia Catering"
          description="Serviços de buffet profissional"
          stars={5.0}
          reviews={305}
          location="Lisboa"
          price="A partir de 100€ por convidado"
        />
        <Cards
          imageSrc={espaco}
          title="Vislumbre Tendas Ltda"
          description="Espaço para o seu evento!"
          stars={4.5}
          reviews={210}
          location="Sintra"
          price="O preço certo para o seu bolso!"
        />
        <Cards
          imageSrc={quinta}
          title="Quinta da Laços e Alma"
          description="Serviços de buffet profissional"
          stars={5.0}
          reviews={182}
          location="Aldeia em Sintra"
          price="A partir de 500€"
        />
      </div>
      <SimpleSlider />
    </div>
  );
}
