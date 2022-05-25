import { FC } from "react"
import { BrowserRouter, Route, Routes as RouteGroup } from "react-router-dom"
import { Register } from "../pages/register"
import { Signin } from "../pages/signin"

interface routesProps { }

export const Routes: FC<routesProps>= ( ) => {

    return (
        <BrowserRouter>
            <RouteGroup>
                <Route path= "/register" element= { <Register /> } />
                <Route path= "/signin" element= { <Signin /> } />
            </RouteGroup>
        </BrowserRouter>
    )
}