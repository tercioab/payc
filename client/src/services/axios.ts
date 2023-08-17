import axios from "axios";
import { parseCookies } from "nookies";

export function getApiClient(ctx?: any) {
	const { "payco.token": token } = parseCookies(ctx);

	const api = axios.create({
		baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT || "3000"}`,
	});

	if (token) {
		api.defaults.headers["Authorization"] = `Bearer ${token}`;
	}
	return api;
}
