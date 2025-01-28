"use client"

import BackButton from "@/components/BackButton";
// import NextButton from "@/components/NextButton" Precisa fazer botao Finalizar cadastro;
import DownloadPhoto from "@/components/DownloadPhoto";
import { useRouter } from "next/navigation";



export default function Page() {
  const router = useRouter();
  return (
    <div >
      <BackButton onClick={() => router.push("/information-page")} />
      <DownloadPhoto />
      {/* <NextButton/> BOTAO FINALIZAR CADASTRO */}
    </div>
  );
}