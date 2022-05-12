import { FC } from "react"
import AmazonLogoPath from "../../svgs/amazon-logo.svg"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { AmazonLogo, NavbarSectionLayout, NavbarOptionsLayout, NavbarSectionHeading, NavbarSectionSubHeading, CartProductCountButton } from "./navbar.styles"
import { IconContext } from "react-icons"
import { FiMenu, FiSettings } from "react-icons/fi"
import { BsBoxSeam } from "react-icons/bs"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Searchbar } from "../searchbar/searchbar.component"
import { Menu } from "../menu/menu.component"

export const Navbar: FC= ( ) => {

    return (
        <>
            <IconContext.Provider value= {{ color: "white", size: "22px" }}>
                <Menu />

                <NavbarOptionsLayout>
                    <AmazonLogo src= {AmazonLogoPath} />

                    <NavbarSectionLayout>
                        <HiOutlineLocationMarker />

                        <div>
                            <NavbarSectionSubHeading>Delivering to</NavbarSectionSubHeading>
                            <NavbarSectionHeading>2 Shantipark, Kolkata 700094</NavbarSectionHeading>
                        </div>
                    </NavbarSectionLayout>

                    <Searchbar />

                    <NavbarSectionLayout>
                        <FiSettings />

                        <div>
                            <NavbarSectionSubHeading>Hello, Archisman</NavbarSectionSubHeading>
                            <NavbarSectionHeading>Account Settings</NavbarSectionHeading>
                        </div>
                    </NavbarSectionLayout>

                    <NavbarSectionLayout>
                        <BsBoxSeam />

                        <div>
                            <NavbarSectionSubHeading>Returns and</NavbarSectionSubHeading>
                            <NavbarSectionHeading>Orders</NavbarSectionHeading>
                        </div>
                    </NavbarSectionLayout>

                    <NavbarSectionLayout marginRight= "2.5px">
                        <AiOutlineShoppingCart />

                        <div>
                            <NavbarSectionHeading>Cart</NavbarSectionHeading>
                        </div>

                        <CartProductCountButton>100</CartProductCountButton>
                    </NavbarSectionLayout>

                    <FiMenu className= "menu-toggler" />
                </NavbarOptionsLayout>
            </IconContext.Provider>
        </>
    )
}

export default Navbar