import { Providers } from "@./web"
import { StrictMode } from "react"
import * as ReactDOM from "react-dom/client"
import { Navbar } from "./components/navbar/navbar.component"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <Providers>
            <Navbar />
        </Providers>
    </StrictMode>
)