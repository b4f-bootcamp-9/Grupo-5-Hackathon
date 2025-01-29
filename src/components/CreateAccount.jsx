"use client";
import { useState } from "react";
import styles from "../app/styles/CreateAccount.module.css";
import { useRouter } from "next/navigation";

export default function CreateAccount() {

   const router = useRouter();
  // Funções
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    localidade: "",
    email: "",
    telefone: "",
    grupo: "",
    usuario: "",
    senha: "",
    descricao: "",
    termosAceitos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação dos campos

    if (!formData.termosAceitos) {
      alert("Você precisa aceitar os termos para continuar.");
      return;
    }

    if (
      !formData.nomeEmpresa ||
      !formData.localidade ||
      !formData.email ||
      !formData.telefone ||
      // !formData.descricao ||
      !formData.usuario ||
      !formData.senha
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (formData.usuario.length < 5) {
      alert("O nome de usuário deve ter pelo menos 5 caracteres.");
      return;
    }

    if (formData.senha.length < 8 || !/[A-Z]/.test(formData.senha)) {
      alert(
        "A senha deve ter entre 8 e 40 caracteres, incluindo uma letra maiúscula, uma minúscula e um número."
      );
      return;
    }

    // Envio para o backend
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    try {
      const res = await fetch("/api/create-supplier", options);
      if (res.ok) {
        alert("Conta criada com sucesso!");
        setFormData({
          nomeEmpresa: "",
          localidade: "",
          email: "",
          telefone: "",
          grupo: "",
          usuario: "",
          senha: "",
          // descricao: "",
          termosAceitos: false,
        });
        router.push("/login")
      } else {
        alert("Erro ao criar conta.");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Erro ao se comunicar com o servidor.");
    }
  };

  // Formulario
  return (
    <div className={styles.container}>
      <h1>Event Match</h1>

      <div className={styles.containerChildrem}>
        <div className={styles.imagem}>
          <img src="/images/events.jpg" alt="imagem" />
        </div>
        <div className={styles.formulario}>
          {/* Inicio do Formulário */}
          <form onSubmit={() => handleSubmit()}>
            <h2>Crie a sua conta e desfrute de nossos serviços</h2>
            <input
              type="text"
              name="nomeEmpresa"
              value={formData.nomeEmpresa}
              onChange={handleChange}
              placeholder="Nome da empresa:"
              required
            />

            <input
              type="text"
              name="localidade"
              value={formData.localidade}
              onChange={handleChange}
              placeholder="Localidade:"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail:"
              required
            />
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              placeholder="Senha:"
              required
            />
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="Telefone:"
              required
            />
            <label>
              <select
                name="grupo"
                value={formData.grupo}
                onChange={handleChange}
                required
              >
                <option value="" disabled className={styles.containeroption}>
                  Escolha um setor de atividade
                </option>
                <option value="grupo1">Fotográfos</option>
                <option value="grupo2">Espaços</option>
                <option value="grupo3">Catering</option>
                <option value="grupo4">Decoração</option>
                <option value="grupo5">Artistas</option>
                <option value="grupo6">Transporte</option>
              </select>
            </label>

            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              placeholder="Nome de usuário"
              required
            />
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="termosAceitos"
                checked={formData.termosAceitos}
                onChange={handleChange}
                required
              />
              <label>Concordo com os termos de utilização</label>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className={styles.submitButton}
            >
              Registar-se
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
