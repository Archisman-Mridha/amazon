import { FC, ReactNode, Suspense } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { chakraTheme } from "../theme/chakra.theme"
import { Fallback } from "../components/fallback/fallback.component"

export const Providers: FC<{ children: ReactNode }>= ({ children }) => {

    return (
        <ChakraProvider theme= { chakraTheme }>
            <Suspense fallback= { <Fallback /> }>
                { children }
            </Suspense>
        </ChakraProvider>
    )
}