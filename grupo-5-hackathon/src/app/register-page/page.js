"use client"

import BackButton from "@/components/BackButton";
import NextButton from "@/components/NextButton";
import RegisterPage from "@/components/RegisterPage";
import { useRouter } from "next/navigation";



export default function Page() {
  const router = useRouter();
  return (
    <div >
      <BackButton onClick={() => router.push("/home-supplier")} />
      <RegisterPage />
      <NextButton onClick={() => router.push("/information-page")}/>
    </div>
  );
}