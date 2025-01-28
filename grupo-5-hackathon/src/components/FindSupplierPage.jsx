"use client";
import { useState } from "react";
import styles from "../app/styles/FindSupplier.module.css";
import { useRouter } from "next/navigation";

export default function FindSupplier() {
  const [grupo, setGrupo] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [carregando, setCarregando] = useState(false);

  const router = useRouter();

  return (
    <div className={styles.containerInicial}>
      <div className={styles.container}>
        <h2 style={{ fontFamily: "Roboto, serif" }}>
          Encontre tudo o que precisa para o seu evento
        </h2>

        <label className={styles.label}>
          <div className={styles.containerInput}>
            <select
              value={grupo}
              onChange={(e) => setGrupo(e.target.value)}
              required
            >
              <option value="" disabled>
                Buscar por grupo
              </option>
              <option value="grupo5">Artistas</option>
              <option value="grupo3">Catering</option>
              <option value="grupo4">Decoração</option>
              <option value="grupo2">Espaços</option>
              <option value="grupo1">Fotógrafos</option>
              <option value="grupo6">Transporte</option>
            </select>
          </div>
          <div className={styles.containerInput}>
            <input
              type="text"
              value={localidade}
              onChange={(e) => setLocalidade(e.target.value)}
              placeholder="Digite a localidade"
              required
            />
          </div>
          <div className={styles.Search}>
            <button
              onClick={() =>
                router.push(
                  `/card-details?localidade=${localidade}&grupo=${grupo}`
                )
              }
              disabled={carregando}
            >
              {carregando ? "Buscando..." : "Buscar"}
            </button>
          </div>
        </label>
      </div>

      <div className={styles.image}></div>
    </div>
  );
}
