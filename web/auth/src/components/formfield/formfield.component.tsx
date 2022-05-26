import { FC, HTMLInputTypeAttribute, ReactElement } from "react"
import { FormControl, FormErrorIcon, FormErrorMessage, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react"
import { useField } from "formik"

interface formFieldProps {

    fieldName: string
    inputType?: HTMLInputTypeAttribute
    placeholder: string
    inputLeftElement: ReactElement
}

export const FormField: FC<formFieldProps> = ({ fieldName, inputType= "text", placeholder, inputLeftElement }) => {
    const [{ }, { touched, error }]= useField({ name: fieldName })

    return (
        <FormControl isInvalid= { touched && error as never }>
            <InputGroup>
                <InputLeftElement>{inputLeftElement}</InputLeftElement>

                <Input
                    type= {inputType}
                    placeholder= {placeholder}
                    maxWidth= "350px"
                />
            </InputGroup>

            <FormErrorMessage>
                <FormErrorIcon />

                <Text>{ error }</Text>
            </FormErrorMessage>
        </FormControl>
    )
}