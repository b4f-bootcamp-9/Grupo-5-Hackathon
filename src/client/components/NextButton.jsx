import React from "react";
import styles from "../styles/NextButton.module.css";
import { useRouter } from "next/navigation"; // Para navegação em páginas do Next.js

export const NextButton = ({ onClick, redirectTo }) => {
  const router = useRouter();

  const handleNext = () => {
    if (redirectTo) {
      router.push(redirectTo); // Redireciona para o URL especificado
    } else if (onClick) {
      onClick(); // Executa a função passada como `onClick`, se fornecida
    } else {
      router.back(); // Volta para a página anterior por padrão
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.NextButton} // Classe CSS para estilo
        onClick={handleNext} // Adiciona a lógica de redirecionamento
      >
        <span className={styles.icon}>&#x276F;</span> {/* Ícone da seta */}
        <span className={styles.text}>Próximo</span> {/* Texto do botão */}
      </button>
    </div>
  );
};

export default NextButton;
