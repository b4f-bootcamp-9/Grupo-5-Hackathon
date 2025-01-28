import styles from "../app/styles/InformationPage.module.css";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
export default function InformationPage() {
  return (
    <div className={styles.container2}>
      <h1>Adicione informação sobre a sua empresa</h1>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Dados de contacto</h2>
          <p className={styles.p}>
            Introduza os seus dados de contacto para que possam comunicar com a
            sua empresa.
            <br />
          </p>
          <div className={styles.form}>
            <input type="text" name="nome" placeholder="Nome:" required />
            <input type="email" name="email" placeholder="E-mail:" required />
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone:"
              required
            />
            <textarea
              type="desc"
              name="descricao"
              placeholder="Descrição:"
              required
            ></textarea>
            <p>
              * Receberá os pedidos de informação de utilizadores no e-mail que
              introduziu.{" "}
            </p>
          </div>
        </div>
        <div className={styles.dados}>
          <div className={styles.empresa}>
            <div className={styles.empresaInfo}>
              <h3>Informação sobre sua empresa</h3>
              <input
                type="text"
                name="NIF/NIPC"
                placeholder="NIF/NIPC:"
                required
              />
            </div>
            <h3>Planos de Inscrição</h3>
            <div className={styles.caixa}>
              <div className={styles.planos}>
                <div className={styles.tipoPlano}>
                  <RiMoneyEuroCircleLine className={styles.icons} />
                  <p>Mensal</p>
                </div>
                <div className={styles.tipoPlano}>
                  <RiMoneyEuroCircleLine className={styles.icons} />
                  <p>Semestral</p>
                </div>
                <div className={styles.tipoPlano}>
                  <RiMoneyEuroCircleLine className={styles.icons} />
                  <p>Anual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
