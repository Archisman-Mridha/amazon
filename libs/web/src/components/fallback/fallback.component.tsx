import { Center, Spinner } from "@chakra-ui/react"
import { FC } from "react"

export const Fallback: FC= ( ) => {

    return (
        <Center height= "100vh">
            <Spinner size= "lg" />
        </Center>
    )
}