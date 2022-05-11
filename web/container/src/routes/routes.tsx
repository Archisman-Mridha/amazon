import { FC } from "react"
import { BrowserRouter, Routes as GroupedRoutes, Route } from "react-router-dom"
import { Home } from "../pages/home.page"

export const Routes: FC= ( ) => {

    return (
        <BrowserRouter>
            <GroupedRoutes>
                <Route path= "/" element= { <Home /> } />
            </GroupedRoutes>
        </BrowserRouter>
    )
}