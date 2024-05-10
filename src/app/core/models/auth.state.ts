export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  id_rol: number | null;
  nombre_usuario: string | null;
  error: any | null;
}
