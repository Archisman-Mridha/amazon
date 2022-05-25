import { Providers } from "@./web"
import { StrictMode } from "react"
import * as ReactDOM from "react-dom/client"
import { Routes } from "./routes/routes"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <Providers>
            <Routes />
        </Providers>
    </StrictMode>
)