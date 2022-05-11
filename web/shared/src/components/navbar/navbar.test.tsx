import { render } from "react-dom"
import { act } from "react-test-renderer"
import Navbar from "./navbar.component"

var container: HTMLDivElement

beforeEach(
    ( ) => {

        container= document.createElement("div")
        document.body.appendChild(container)
    }
)

test("renders navbar correctly", ( ) => {

    act(
        ( ) => render(<Navbar />, container)
    )

    expect(container.innerHTML).toBeTruthy
})