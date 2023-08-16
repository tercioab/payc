
import FormProps from "@/interface/formProps";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export default function InputBasic({ label, type, registerParam }: FormProps) {

	const { register } = useFormContext(); // retrieve all hook methods

	return (
		<FormControl id={label}>
			<FormLabel>{label}</FormLabel>
			<Input type={type} {...register(registerParam)} />
		</FormControl>
	);
}
