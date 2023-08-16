import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { requestGet } from "@/services/request";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export default function Dashboard() {
	const { user } = useContext(AuthContext);
	useEffect(() => {
		const teste = async () => {
			const data = await requestGet("account");
			console.log(data);
		};
		teste();
	}, []);

	return <h1>{user?.name}</h1>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { ['payco.token']: token } = parseCookies(ctx)
	if (!token) {
		return {
			redirect: {
				destination: '/login',
				permanent: false, 
			}
		}
	}

	return {
		props: {}
	}
}