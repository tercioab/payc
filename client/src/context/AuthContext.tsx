import { createContext } from "react";
import { requestPost } from "@/services/request";
import { setCookie } from "nookies";

type AuthContextType = {
	isAuthenticated: boolean;
};

type SignInData = {
	email: string;
	password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
	const isAuthenticated = false;

	async function signIn({ email, password }: SignInData) {
        const { token } = await requestPost(email, password);
        
        setCookie(undefined, 'paycoauth.token', token, {
            maxAges: 60 * 60 * 1, // 1 hour
        })
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
	);
}
