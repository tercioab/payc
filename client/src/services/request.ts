import axios, { AxiosResponse } from "axios";
import { parseCookies } from "nookies";

const { "payco.token": token } = parseCookies();

const api = axios.create({
	baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT || "3000"}`,
});

api.interceptors.request.use(config => {
	console.log(config);
	return config;
});

if (token) {
	api.defaults.headers["Authorization"] = `Bearer ${token}`;
	console.log(token)
}

export const requestPost = async (endpoint: string, body: unknown) => {
	try {
	  const response: AxiosResponse = await api.post(endpoint, body);
	  return response.data;
	} catch (error) {
	  console.error("Erro ao fazer a solicitação POST:", error.response.data.message);
	  throw error;
	}
  };
  
  
  export const requestGet = async (endpoint: string) => {
	try {
	  const response: AxiosResponse = await api.get(endpoint);
	  return response.data;
	} catch (error: unknown) {
	  console.error("Erro ao fazer a solicitação GET:",  error.response.data.message);
	  throw error; 
	}
  };
  
 
  export const requestPut = async (endpoint: string, body: unknown) => {
	try {
	  const response: AxiosResponse = await api.put(endpoint, body);
	  return response.data;
	} catch (error) {
	  console.error("Erro ao fazer a solicitação PUT:",  error.response.data.message);
	  throw error;
	}
  };