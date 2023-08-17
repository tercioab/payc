import React, { createContext, useState } from "react";
import { requestGet } from "../services/api";
import Router from "next/router";
import { destroyCookie } from "nookies";

export const ApiContext = createContext({});

export function ApiProvider({ children }) {
	const [account, setAccount] = useState(null); 
	
		const fetchAccount = async () => {
			try {
				const accountData = await requestGet("account"); 
				setAccount(accountData);
			} catch (error) {
				if (error.response?.status === 401) {
					destroyCookie(undefined, "payco.token");
					Router.push("/login")
				} else {
					console.error("Erro ao obter dados da conta:", error);
				}
			}
		};
	
	const contextValue = {
		fetchAccount,
		account,
	};

	return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
}
