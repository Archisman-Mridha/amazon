import { FC, ReactNode, Suspense } from "react"
import { Fallback } from "../components/fallback/fallback.component"
import { ChakraProvider } from "@chakra-ui/react"
import { chakraTheme } from "../theme/chakra.theme"

export const Providers: FC<{ children: ReactNode }>= ({ children }) => {

    return (
        <ChakraProvider theme= { chakraTheme }>
            <Suspense fallback= { <Fallback /> }>
                { children }
            </Suspense>
        </ChakraProvider>
    )
}