import React from "react";
import styles from "../app/styles/DownloadPhoto.module.css";
import { FiDownload } from "react-icons/fi";
import { Sabermais } from "./Sabermais";
import { useRouter } from "next/navigation";


const DownloadPhoto = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Adicione informação sobre a sua empresa</h1>
      <div className={styles.section}>
        <h2>Adicione 8 fotografias de boa qualidade</h2>
      </div>
      <div className={styles.section}>
        <label className={styles.label} htmlFor="description">
        </label>
        <p className={styles.description}>
        Publique um mínimo de 8 fotos da sua empresa e escolha uma foto horizontal como foto principal para uma boa visualização em todos os dispositivos. <br/>
        <br/>As fotos verticais podem sofrer cortes na pré-visualização. Fotos com dados de contato, logos/ marcas de água invasivas, texto, colagens, molduras e ilustrações não serão aceites.<br/>
        <br/>Quantas mais fotos publicar, mais fácil será para os usuários entrarem em contacto consigo e contratarem os seus serviços.
        </p>
        <div className={styles.section2}>
        <h2>Adicionar Fotografias</h2>
      </div>
       <div className={styles.foto}> <FiDownload className={styles.icon} />
       <p>Formato GIF, JPEG, ou PNG no peso máximo 20 MB </p>
       <Sabermais title={"Carregar"}/>
       </div> 
      </div>
      <div className={styles.final}>
      <Sabermais onClick={() => router.push("/home-supplier")} title={"Finalizar Cadastro"}/>
      </div>
    </div>
  );
};

export default DownloadPhoto;