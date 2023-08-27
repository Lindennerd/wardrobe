import { CapacitorHttp as http } from "@capacitor/core";
import { Cloth, LoginResponse } from "../types/types";
import { get } from "./storage";

export const UseApi = () => {
  const baseUrl: string = "http://localhost:5234";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "",
  };

  async function authenticate() {
    const authData: LoginResponse = await get("authInfo");
    if (authData) headers.Authorization = `Bearer ${authData.token}`;
  }

  async function login(
    userName: string,
    password: string
  ): Promise<LoginResponse | null> {
    const body = {
      user: userName,
      password: password,
    };

    const response = await http.post({
      url: `${baseUrl}/api/security/login`,
      data: body,
      headers: headers,
    });
    if (!response.data || response.status > 299) return null;

    return response.data satisfies LoginResponse;
  }

  async function register(email: string, password: string) {
    const body = {
      email,
      password,
    };

    var response = await http.post({
      url: `${baseUrl}/api/security/register`,
      data: body,
      headers: headers,
    });

    if (response.status < 299) return response.data;
    else throw new Error(response.data);
  }

  async function logout() {
    const response = await http.post({
      url: `${baseUrl}/api/security/logout`,
      headers: headers,
    });

    if (response.status < 299) return response.data;
    else throw new Error(response.data);
  }

  async function getUserWardrobe(): Promise<Cloth[]> {
    await authenticate();
    const response = await http.get({
      url: `${baseUrl}/api/Cloth/GetUsersClothes`,
      headers: headers,
    });

    return response.data;
  }

  return { login, register, logout, getUserWardrobe };
};
