import { findAdminByCredentials } from "@/server/data/auth";

export async function authenticateAdmin(email, senha) {
  try {
    const admin = await findAdminByCredentials(email, senha);
    return {
      success: !!admin,
      authenticated: !!admin,
    };
  } catch (error) {
    console.error("Erro na autenticação:", error);
    throw error;
  }
}
