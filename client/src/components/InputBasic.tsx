import FormProps from "@/interface/formProps";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";






export default function InputBasic({label, type}: FormProps){
    return (
        <FormControl id={label}>
            <FormLabel>{ label}</FormLabel>
        <Input type={type} />
      </FormControl>
    )
}