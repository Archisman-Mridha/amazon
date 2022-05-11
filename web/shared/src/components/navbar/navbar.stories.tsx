import { Providers } from "@./web"
import { Navbar } from "./navbar.component"

export default {

    title: "Navbar",
    component: Navbar
}

export const LoggedOutState= ( ) => (

    <Providers>
        <Navbar />
    </Providers>
)