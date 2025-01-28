"use client"
import BackButton from "@/components/BackButton";
import InformationPage from "@/components/InformationPage";
import NextButton from "@/components/NextButton";
import { useRouter } from "next/navigation";
import styles from "../styles/InformationPage.module.css"

export default function Page(){
    const router = useRouter();
    return(
        <div>
            <BackButton onClick={() => router.push("/register-page")} />
            <InformationPage/>
            <NextButton onClick={() => router.push("/download-page")}/>
        </div>
    )
}