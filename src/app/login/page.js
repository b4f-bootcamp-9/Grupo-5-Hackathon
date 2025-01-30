"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../client/styles/Login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (data.authenticated) {
        router.push("/events"); // Redireciona para /events
      } else {
        setError("Credenciais inválidas. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Erro ao fazer login. Tente novamente.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {error && <p className={styles.error}>{error}</p>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
