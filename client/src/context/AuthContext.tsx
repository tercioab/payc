import { createContext, useState, useEffect } from "react";
import { parseCookies, setCookie } from "nookies";
import Router from "next/router";
import { requestPost, requestPut } from "../services/request";
import childrenProps from "@/interface/childrenProps";
import { AuthContextType, childrenProps, SignInData, User } from "./types/types";
export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: childrenProps) {
	const [user, setUser] = useState<User | null>(null);

	const isAuthenticated = !!user;




	
	async function signIn(data: SignInData) {
		const { token, user } = await requestPost("login", data);
		setCookie(undefined, "payco.token", token, {
			maxAge: 60 * 60 * 1, // 1 hour
		});
		setUser(user);
		Router.push("/dashboard");
	}

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
			{children}
		</AuthContext.Provider>
	);
}
