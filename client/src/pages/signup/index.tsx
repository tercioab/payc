"use client";

import {
	Flex,
	Box,
	HStack,
	Stack,
	Text,
	useColorModeValue,
	Link,
} from "@chakra-ui/react";

import InputPassword from "@/components/inputPassword";
import InputBasic from "@/components/InputBasic";
import TitleForm from "@/components/titleForm";
import ButtonForm from "@/components/ButtonForm";

export default function Signup() {
	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<TitleForm title='sign up' />
					<Text fontSize={"lg"} color={"gray.600"}>
						Simples, rápido e seguro, PAYCO.
					</Text>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Stack spacing={4}>
						<HStack>
							<Box>
								<InputBasic type='text' label='first name' />
							</Box>
							<Box>
								<InputBasic type='text' label='last name' />
							</Box>
						</HStack>

						<InputBasic type='email' label='email' />
						<InputPassword />
						<Stack spacing={10} pt={2}>
							<ButtonForm title='sign up' />
						</Stack>
						<Stack pt={6}>
							<Text align={"center"}>
								Already a user?{" "}
								<Link href='/login' color={"blue.400"}>
									Login
								</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
