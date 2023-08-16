"use client";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function InputPassword() {
	
	const [showPassword, setShowPassword] = useState(false);
	const { register } = useFormContext();

	return (
		<FormControl id='password' isRequired>
			<FormLabel>Password</FormLabel>
			<InputGroup>
				<Input type={showPassword ? "text" : "password"} {...register('password')} />
				<InputRightElement h={"full"}>
					<Button
						variant={"ghost"}
						onClick={() => setShowPassword(showPassword => !showPassword)}
					>
						{showPassword ? <ViewIcon /> : <ViewOffIcon />}
					</Button>
				</InputRightElement>
			</InputGroup>
		</FormControl>
	);
}
