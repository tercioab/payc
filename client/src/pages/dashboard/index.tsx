import { useEffect, useState } from "react";
import { requestGet } from "../../services/request";

export default function Dashboard() {
	const [acount, setAcount] = useState("");
	useEffect(() => {
		const data = requestGet("account");
		setAcount(data);
	}, []);
	return <h1>{acount.userId}</h1>;
}
