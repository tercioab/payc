import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import { BsCashCoin, BsBank } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import StatsCard from "@/components/comons/StatsCard";
import { getApiClient } from "@/services/axios";
// import { useContext } from "react";
// import { AuthContext } from "@/context/AuthContext";
// import { User } from "@/context/types/types";

type AccountInfo = {
	number: number;
	acount: number;
	agency: number;
	balance: number;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
	const { ["payco.token"]: token } = parseCookies(ctx);


	if (!token) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}

	try {
		const responseAccountInfo = await getApiClient(ctx).get("account");
		return {
			props: {
				account: responseAccountInfo.data,
			},
		};
	} catch (error) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}
};


export default function BasicStatistics({ account }: { account: AccountInfo}) {

	

	return (
		<Box maxW='7xl' mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
			<chakra.h1 textAlign={"center"} fontSize={"4xl"} py={10} fontWeight={"bold"}>
			 {`Olá seja bem vindo a Sua conta`} 
			</chakra.h1>
			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
				<StatsCard
					title={"Saldo"}
					stat={account?.balance.toString()}
					icon={<BsCashCoin size={"3em"} />}
				/>
				<StatsCard
					title={"acount"}
					stat={account?.acount.toString()}
					icon={<BsBank size={"3em"} />}
				/>
				<StatsCard
					title={"Agencia"}
					stat={account?.agency.toString()}
					icon={<GoLocation size={"3em"} />}
				/>
			</SimpleGrid>
		</Box>
	);
}

