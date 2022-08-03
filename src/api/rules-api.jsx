import axios from "axios";
//import { config } from "process";

const API = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request
  .use
  /*(config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }*/
  ();

API.interceptors.response
  .use
  /*(response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 405 && !originalRequest._retry) {
      return Promise.reject("La sesión ha expirado");
    }
    if (error.response.status === 403 && !originalRequest._retry) {
      return Promise.reject(
        "No tiene el permiso necesario para realizar esta operación"
      );
    }
    if (error.response.status === 400 && !originalRequest._retry) {
      return Promise.reject(
        "Ha ocurrido un error. Espere unos minutos e intente de nuevo."
      );
    }
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return axios
        .get("http://127.0.0.1:4000/api/auth/refresh", {
          headers: { Authorization: localStorage.getItem("refreshToken") },
        })
        .then((res) => {
          if (res.status === 200) {
            originalRequest._retry = false;
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            const { token, refreshToken } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshToken);
            API.defaults.headers.common["Authorization"] = token;
            return API(originalRequest);
          } else {
            return API(originalRequest);
          }
        });
    }
  }*/
  ();

export default API;
