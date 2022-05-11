import { FC } from "react"
import { Providers } from "@./web"
import { Searchbar } from "./searchbar.component"

export default {

    title: "Searchbar",
    component: Searchbar
}

export const DefaultState: FC= ( ) => (

    <Providers>
        <Searchbar />
    </Providers>
)