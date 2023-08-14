import TitleFormProps from "@/interface/titleFormProps";
import { Heading, Stack } from "@chakra-ui/react";


export default function TitleForm({title}: TitleFormProps){
    return (
        <Stack align={'center'}>
        <Heading fontSize={'4xl'}>{title}</Heading>
      </Stack>
    )
}