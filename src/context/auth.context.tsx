import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { UseApi } from "../hooks/api.service";
import { createStore, get, remove, set } from "../hooks/storage";
import { LoginRequest, LoginResponse } from "../types/types";

interface IAuthContext {
  auth: LoginResponse | null;
  login: (auth: LoginRequest) => Promise<{ success: boolean }>;
  logout: () => Promise<void>;
}

const context = createContext<IAuthContext>({
  auth: {} as LoginResponse,
  login: async (request: LoginRequest) => {
    return { success: false };
  },
  logout: async () => {},
});
export const useAuthContext = () => useContext(context);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  createStore("authStore");

  const [auth, setAuth] = useState<LoginResponse | null>(null);
  const { login, logout } = UseApi();

  const memoizedAuth = useMemo(() => {
    return auth;
  }, [auth]);

  useEffect(() => {
    const fetchCachedData = async () => {
      const data = await get("authInfo");
      setAuth(data);
    };

    fetchCachedData().catch((err) => console.error(err));
  }, [auth]);

  const handleLogin = async (auth: LoginRequest) => {
    const response = await login(auth.user, auth.password);
    if (!response) return { success: false };
    set("authInfo", response);
    setAuth(response);
    return { success: true };
  };

  const handleLogout = async () => {
    await logout();
    await remove("authInfo");
  };

  return (
    <context.Provider
      value={{ auth: memoizedAuth, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </context.Provider>
  );
};
