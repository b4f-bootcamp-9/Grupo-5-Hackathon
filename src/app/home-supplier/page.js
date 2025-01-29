"use client";
import CardPassos from "@/components/CardPassos";
import { HomeSupplierPage } from "@/components/HomesupplierPage";
import NavBarSupplier from "@/components/NavBarSupplier";
import styles from "../styles/HomeSupplier.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";
import { LuImageUp } from "react-icons/lu";
import { useRouter } from "next/navigation";


export default function Page() {
  const router = useRouter();

  return (
    <div>
      <NavBarSupplier />
      <HomeSupplierPage />
      <div className={styles.container}>
        <CardPassos
          onClick={() => router.push("/register-page")}
          icons=<IoPersonOutline className={styles.icons} />
          title="Passo 1"
          description="Adicione informação sobre a sua empresa"
        />
        <CardPassos
        onClick={() => router.push("/information-page")}
          icons=<CiMoneyCheck1 className={styles.icons} />
          title="Passo 2"
          description="Adicione dados de contacto 
                       e escolha o pacote"
        />
        <CardPassos
        onClick={() => router.push("/download-page")}
          icons=<LuImageUp className={styles.icons} />
          title="Passo 3"
          description="Adicione fotografias com alta resolução"
        />
      </div>
    </div>
  );
}
