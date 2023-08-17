import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";
import { api, requestPost } from "../services/api";
import { SignInData, registerUser } from "./types/types";

export const AuthContext = createContext({});
export function AuthProvider({ children }) {
	const [user, setUser] = useState<User | null>(null);

	const isAuthenticated = !!user;

	useEffect(() => {
		const updateUser = async () => {
			const { "payco.token": token } = parseCookies();
			if (token) {
				const { email, name, cpf, id } = await requestPost("decodeToken", {
					token: token,
				});
				setUser({ email, name, cpf, id });
			}
		};
		updateUser();
	}, []);

	async function signIn(data: SignInData) {
		const { token, user } = await requestPost("login", data);
		setCookie(undefined, "payco.token", token, {
			maxAge: 60 * 60 * 1, // 1 hour
		});

		if (user && token) {
			api.defaults.headers["Authorization"] = `Bearer ${token}`;
			setUser(user);
			Router.push("/dashboard");
		}
	}

	async function signUp(data: registerUser) {
		const response = await requestPost("user", data)
		console.log(response)
		if (response.id) {
			await requestPost('account') 
			Router.push('/login')
		}
	}

	// async function refreshToken() {
	// 	try {
	// 		const cookies = parseCookies();
	// 		const currentRefreshToken = cookies["payco.token"];

	// 		if (!currentRefreshToken) {
	// 			Router.push("/login");
	// 			return;
	// 		}

	// 		const { token } = await requestPut("user/refreshtoken", {
	// 			oldtoken: currentRefreshToken,
	// 		});

	// 		api.defaults.headers["Authorization"] = `Bearer ${token}`;
	// 		setCookie(undefined, "payco.token", token, {
	// 			maxAge: 60 * 60 * 1, // 1 hour
	// 		});
	// 	} catch (error) {
	// 		console.error("Error refreshing token:", error.message);
	// 		destroyCookie(undefined, "payco.token");
	// 		setUser(null);
	// 		Router.push("/login");
	// 	}
	// }

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, signIn, signUp }}>
			{children}
		</AuthContext.Provider>
	);
}
