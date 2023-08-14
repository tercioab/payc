import { Flex, Box, Stack, useColorModeValue, Text, Link } from "@chakra-ui/react";
import TitleForm from "@/components/titleForm";
import InputBasic from "@/components/InputBasic";
import InputPassword from "@/components/inputPassword";
import ButtonForm from "@/components/ButtonForm";

export default function Login() {
	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<TitleForm title='Sign in to your account' />
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Stack spacing={4}>
						<InputBasic label='email' type='email' />
						<InputPassword />
						<ButtonForm title='sign in' />
					</Stack>
					<Stack pt={6}>
						<Text align={"center"}>
							Not a user?{" "}
							<Link href='/signup' color={"blue.400"}>
								Sign Up
							</Link>
						</Text>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
