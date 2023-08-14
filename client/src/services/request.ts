import axios from "axios";

const api = axios.create({
	baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT || "3001"}`,
});

export const requestPost = async (endpoint: string, body: unknown) => {
    const { data } = await api.post(endpoint, body);
    return data;
  };
