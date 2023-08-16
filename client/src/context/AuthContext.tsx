import { createContext, useState, useEffect } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { requestPut, requestPost } from "../services/request";
import childrenProps from "@/interface/childrenProps";

type User = {
	id: number;
	name: string;
	subName: string;
	cpf: string;
	email: string;
};
type AuthContextType = {
	isAuthenticated: boolean;
	user: User | null;
	signIn: (data: SignInData) => Promise<void>;
};

type SignInData = {
	email: string;
	password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: childrenProps) {
	const [user, setUser] = useState<User | null>(null);

	const isAuthenticated = !!user;

	// useEffect(() => {
	// 	const inputUser = async () => {
	// 		const { "nextauth.token": token } = parseCookies();
	// 		if (token) {
	// 			const data = await requestPut("user/refreshtoken", { refreshtoken: token });
	// 			setUser(data?.user);
	// 		}
	// 		console.log(token);
	// 	};
	// 	inputUser();
	// }, []);

	async function signIn(data: SignInData) {
		const { token, user } = await requestPost("login", data);

		console.log(token, user);
		setCookie(undefined, "nextauth.token", token, {
			maxAge: 60 * 60 * 1, // 1 hour
		});

		console.log(user)
		setUser(user);

		Router.push("/dashboard");
	}

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
			{children}
		</AuthContext.Provider>
	);
}
