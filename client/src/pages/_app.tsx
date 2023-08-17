import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainContainer from "@/components/MainContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "@/context/AuthContext";
import { ApiProvider } from "@/context/ApiContext";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<MainContainer>
				<AuthProvider>
					<ApiProvider>
						<Component {...pageProps} />
					</ApiProvider>
				</AuthProvider>
			</MainContainer>
		</ChakraProvider>
	);
}
