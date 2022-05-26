import { extendTheme } from "@chakra-ui/react"

export const chakraTheme= extendTheme({
    fonts: {

        heading: "montserrat",
        body: "montserrat"
    },

    styles: {
        global: {
            "*": {

                fontWeight: 500,
                boxSizing: "border-box"
            }
        }
    },

    components: {

        Link: {
            baseStyle: {

                transition: "all, 0.5s",
                _hover: {

                    textDecoration: "none",
                    color: "#C5FFF4"
                }
            }
        },

        Button: {
            baseStyle: {

                borderRadius: "35px"
            }
        }
    }
})