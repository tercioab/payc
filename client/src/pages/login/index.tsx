import { Flex, Box, Stack, useColorModeValue, Text, Link } from "@chakra-ui/react";
import TitleForm from "@/components/form/titleForm";
import InputBasic from "@/components/form/InputBasic";
import InputPassword from "@/components/form/inputPassword";
import ButtonForm from "@/components/form/buttonForm";
import { FormProvider, useForm } from "react-hook-form";

export default function Login() {
	const methods = useForm();
	const onSubmit = (data: any) => console.log(data);
	
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
					 <FormProvider {...methods} >
					<form onSubmit={methods.handleSubmit(onSubmit)}>
						<Stack spacing={4}>
							<InputBasic label='email' type='email'/>
							<InputPassword label='password'/>
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
					</form>
					</FormProvider>
				</Box>
			</Stack>
		</Flex>
	);
}
