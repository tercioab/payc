import "@/styles/globals.css";
import { AppProps } from "next/app";
import MainContainer from "@/components/MainContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "@/context/AuthContext";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<MainContainer>
				<AuthProvider>
					<Component {...pageProps} />
				</AuthProvider>
			</MainContainer>
		</ChakraProvider>
	);
}
