import { Center } from "@chakra-ui/react"
import { Component } from "react"
import { Providers } from "./providers"

export const withProviders= (Story: typeof Component) => (

    <Providers>
        <Center height= "100vh">
            <Story />
        </Center>
    </Providers>
)