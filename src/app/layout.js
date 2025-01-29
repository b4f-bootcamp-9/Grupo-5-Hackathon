"use client";
import Navbar from "../client/components/Navbar"; // Importa a Navbar
import Footer from "../client/components/Footer"; // Importa o Footer
import { usePathname } from "next/navigation"; // Hook para verificar a rota atual

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Obtém o caminho atual
  // Define as páginas onde Navbar, Footer e BackButton não devem aparecer
  const hideNavbarAndFooterRoutes = ["/login", "/create-supplier"];
  const hideBackButtonRoutes = [
    "/",
    "/login",
    "/create-supplier",
    "/card-details",
    "/home-supplier",
    "/information-page",
    "/download-page",
    "/register-page",
  ]; // Escondendo BackButton na Home e outras páginas

  // Verifica se Navbar e Footer devem ser exibidos
  const shouldShowNavbarAndFooter =
    !hideNavbarAndFooterRoutes.includes(pathname);

  // Verifica se BackButton deve ser exibido
  const shouldShowBackButton = !hideBackButtonRoutes.includes(pathname);

  const grupo = pathname.endsWith("grupo1");
  return (
    <html lang="pt-br">
      <body>
        {shouldShowNavbarAndFooter && <Navbar />}
        {children}
        {shouldShowNavbarAndFooter && <Footer />}
      </body>
    </html>
  );
}
