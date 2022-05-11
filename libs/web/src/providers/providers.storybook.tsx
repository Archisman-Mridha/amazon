import { Center, ChakraProvider } from "@chakra-ui/react"
import { Component } from "react"
import { chakraTheme } from "../theme/chakra.theme"

export const withProviders= (Story: typeof Component) => (

    <ChakraProvider theme= { chakraTheme }>
        <Center height= "100vh">
            <Story />
        </Center>
    </ChakraProvider>
)