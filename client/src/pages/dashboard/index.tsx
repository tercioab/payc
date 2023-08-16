import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { requestGet } from "@/services/request";

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
