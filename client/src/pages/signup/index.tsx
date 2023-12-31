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

import InputPassword from "@/components/form/inputPassword";
import InputBasic from "@/components/form/InputBasic";
import TitleForm from "@/components/form/titleForm";
import ButtonForm from "@/components/form/buttonForm";
import { FormProvider, useForm } from "react-hook-form";
import formSignUp from "@/interface/formSignUp";

export default function Signup() {

	const methods = useForm<formSignUp>();
	const onSubmit = (data: formSignUp) => console.log(data);

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
					<FormProvider {...methods}>
						<form onSubmit={methods.handleSubmit(onSubmit)} >
							<Stack spacing={4}>
								<HStack>
									<Box>
										<InputBasic type='text' label='name' registerParam="name" />
									</Box>
									<Box>
										<InputBasic type='text' label='last name' registerParam="lastname" />
									</Box>
								</HStack>

								<InputBasic type='email' label='email' registerParam="email" />
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
						</form>
					</FormProvider>
				</Box>
			</Stack>
		</Flex>
	);
}
