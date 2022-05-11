import { FC } from "react"
import { DeliveryLocationLayout, Header, MobileMenuLayout, HeaderRow, MenuItemSubText, MenuItemText, MenuItemLayout, CartCount, Separator } from "./mobilemenu.styles"
import { IoIosCloseCircle } from "react-icons/io"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { IconContext } from "react-icons"
import { Flex, Link } from "@chakra-ui/react"
import { BsCart3, BsBoxSeam } from "react-icons/bs"
import { CategorySVGPath, SignoutSVGPath } from "@./web"
import { AiOutlineFieldTime, AiOutlineUser } from "react-icons/ai"
import { FiEye, FiShoppingBag } from "react-icons/fi"

export const MobileMenu: FC= ( ) => {

    return (
        <>
            <IconContext.Provider value= {{ color: "white", size: "22px", style: { marginRight: "10px" } }}>
                <MobileMenuLayout>
                    <HeaderRow>
                        <Header>Navigation Menu</Header>

                        <IoIosCloseCircle />
                    </HeaderRow>

                    <DeliveryLocationLayout>
                        <HiOutlineLocationMarker />
                        <Link href= "">
                            <MenuItemSubText>Delivering to</MenuItemSubText>
                            <MenuItemText>Kolkata India</MenuItemText>
                        </Link>
                    </DeliveryLocationLayout>

                    <MenuItemLayout>
                        <Flex alignItems= "center">
                            <AiOutlineUser />
                            <Link href= "">
                                <MenuItemSubText>Hello Archisman</MenuItemSubText>
                                <MenuItemText>Account Settings</MenuItemText>
                            </Link>
                        </Flex>
                    </MenuItemLayout>

                    <MenuItemLayout>
                        <Flex alignItems= "center">
                            <BsBoxSeam />
                            <Link href= "">
                                <MenuItemSubText>Returns and</MenuItemSubText>
                                <MenuItemText>Orders</MenuItemText>
                            </Link>
                        </Flex>
                    </MenuItemLayout>

                    <MenuItemLayout>
                        <Flex alignItems= "center">
                            <BsCart3 />
                            <Link href= "">
                                <MenuItemText>Cart</MenuItemText>
                            </Link>
                            <CartCount>100</CartCount>
                        </Flex>
                    </MenuItemLayout>

                    <Separator />

                    <MenuItemLayout>
                        <Flex alignItems= "center">
                            <img src= {CategorySVGPath} />
                            <Link href= "">Latest Products</Link>
                        </Flex>
                    </MenuItemLayout>

                    <MenuItemLayout>
                        <Flex alignItems= "center">
                            <AiOutlineFieldTime size= "25px" />
                            <Link href= "">Buy Again</Link>
                        </Flex>
                    </MenuItemLayout>

                    <MenuItemLayout>
                        <Flex alignItems= "center">
                            <FiEye />
                            <Link href= "">Viewed Products</Link>
                        </Flex>
                    </MenuItemLayout>

                    <MenuItemLayout>
                        <Flex alignItems= "center">
                            <img src= {SignoutSVGPath} />
                            <Link href= "">Sign Out</Link>
                        </Flex>
                    </MenuItemLayout>
                </MobileMenuLayout>
            </IconContext.Provider>
        </>
    )
}