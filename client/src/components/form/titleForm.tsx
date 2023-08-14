import TitleProps from "@/interface/titleProps";
import { Heading, Stack } from "@chakra-ui/react";

export default function TitleForm({ title }: TitleProps) {
	return (
		<Stack align={"center"}>
			<Heading fontSize={"4xl"}>{title}</Heading>
		</Stack>
	);
}
