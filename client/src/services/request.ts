import axios from "axios";
import { parseCookies } from "nookies";

const { "nextauth.token": token } = parseCookies();

const api = axios.create({
	baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT || "3000"}`,
});

if (token) {
	api.defaults.headers["Authorization"] = `Bearer ${token}`;
}

api.interceptors.request.use(config => {
	return config
});

export const requestPost = async (endpoint: string, body: unknown) => {
	const { data } = await api.post(endpoint, body);
	return data;
};

export const requestGet = async (endpoint: string) => {
	const { data } = await api.get(endpoint);
	return data;
}

export const requestPut = async (endpoint: string, body: unknown) => {
	const { data } = await api.put(endpoint, body);
	return data;
};


