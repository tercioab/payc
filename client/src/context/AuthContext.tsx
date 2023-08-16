import { createContext, useState } from "react";
import { setCookie } from "nookies";
import Router from "next/router";
import requestPost from "../services/request";
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

	async function signIn(data: SignInData) {
		const { token, user } = await requestPost.requestPost('login',  data);

		setCookie(undefined, "nextauth.token", token, {
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
