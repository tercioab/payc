import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainContainer from '@/components/MainContainer'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
    <MainContainer>
      <Component {...pageProps} />
      </MainContainer>
      </ChakraProvider>
)
}
