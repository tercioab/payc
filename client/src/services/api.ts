import { AxiosResponse } from "axios";
import { getApiClient } from "./axios";


export const api = getApiClient()

export const requestPost = async (endpoint: string, body: unknown) => {
	try {
	  const response: AxiosResponse = await api.post(endpoint, body);
	  return response.data;
	} catch (error) {
	  console.error("Erro ao fazer a solicitação POST:", error);
	  throw error;
	}
  };
  
  
  export const requestGet = async (endpoint: string) => {
	try {
	  const response: AxiosResponse = await api.get(endpoint);
	  return response.data;
	} catch (error: unknown) {
	  console.error("Erro ao fazer a solicitação GET:",  error);
	  throw error; 
	}
  };
  
 
  export const requestPut = async (endpoint: string, body: unknown) => {
	try {
	  const response: AxiosResponse = await api.put(endpoint, body);
	  return response.data;
	} catch (error) {
	  console.error("Erro ao fazer a solicitação PUT:",  error);
	  throw error;
	}
  };