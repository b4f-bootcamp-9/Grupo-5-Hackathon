"use client";

import { BackButton } from "@/components/BackButton";
import CardBack from "@/components/CardBack";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "../styles/CardDetailsPage.module.css"

export default function Page() {
  const params = useSearchParams();
  const localidade = params.get("localidade");
  const grupo = params.get("grupo");
  const [fornecedores, setFornecedores] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch(
          `/api/find-supplier?grupo=${grupo}&localidade=${localidade.toLocaleLowerCase()}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        let filtrado = data.response;

        if (!localidade) {
          filtrado = filtrado.filter((e) => e.grupo === grupo);
        } else {
          filtrado = filtrado.filter(
            (e) =>
              e.localidade.toLocaleLowerCase() ===
                localidade.toLocaleLowerCase() && e.grupo === grupo
          );
        }

        if (filtrado.length === 0) {
          setErro("Nenhum fornecedor encontrado para a localidade informada.");
        } else {
          setErro(null);
        }
        setFornecedores(filtrado);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [grupo]);
  console.log(fornecedores);
  // console.log(fornecedores)

  // Dados do fornecedor
  const router = useRouter();

  return (
    <div className={styles.background}>
    <div className={styles.container} style={{ height: "100vh" }}>
      <BackButton onClick={() => router.push("/")} />
      <div>
        {/* Renderiza mensagem de erro se existir */}
        {erro && (
          <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
            {erro}
          </p>
        )}
        {/* Renderiza a lista de fornecedores */}
        <ul>
          {fornecedores.map((fornecedor, index) => (
            <ul key={index}>
              <CardBack
                nomeEmpresa={fornecedor.nomeEmpresa}
                localidade={fornecedor.localidade}
                imageSrc={fornecedor.imageSrc} // Supondo que você tenha uma URL de imagem ou um caminho
                descricao={fornecedor.descricao}
                stars={4}
              />
              {/*ESSA LINHA DE COD FAZ UMA LISTA ALEM DO CARD <strong>Nome:</strong> {fornecedor.nomeEmpresa} | <strong>Localidade:</strong>{" "}
                {fornecedor.localidade} | <strong>Grupo:</strong> {fornecedor.grupo} */}
            </ul>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}
