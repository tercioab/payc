import { createContext, useState, useEffect } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import { requestPost, api, requestPut } from "../services/api";
import { SignInData, User } from "./types/types";

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

		api.defaults.headers["Authorization"] = `Bearer ${token}`;
		setUser(user);
		if (user) {
			Router.push("/dashboard");
		}
	}

	async function refreshToken() {
		try {
			const cookies = parseCookies();
			const currentRefreshToken = cookies["payco.token"];

			if (!currentRefreshToken) {
				Router.push("/login");
				return;
			}

			const { token } = await requestPut("user/refreshtoken", {
				oldtoken: currentRefreshToken,
			});

			api.defaults.headers["Authorization"] = `Bearer ${token}`;
			setCookie(undefined, "payco.token", token, {
				maxAge: 60 * 60 * 1, // 1 hour
			});
		} catch (error) {
			console.error("Error refreshing token:", error.message);
			destroyCookie(undefined, "payco.token");
			setUser(null);
			Router.push("/login");
		}
	}

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, signIn, refreshToken }}>
			{children}
		</AuthContext.Provider>
	);
}
