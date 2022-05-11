import { extendTheme } from "@chakra-ui/react"

export const chakraTheme= extendTheme({
    fonts: {

        heading: "montserrat",
        body: "montserrat"
    },

    components: {

        Text: {
            baseStyle: {

                fontWeight: 500
            }
        }
    }
})