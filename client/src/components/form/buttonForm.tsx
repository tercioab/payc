import TitleProps from "@/interface/titleProps";
import { Button } from "@chakra-ui/react";

export default function ButtonForm({ title }: TitleProps) {
	return (
		<Button
			bg={"purple.600"}
			type='submit'
			color={"white"}
			_hover={{
				bg: "purple.700",
			}}
		>
			{title}
		</Button>
	);
}
