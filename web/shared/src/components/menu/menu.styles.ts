import { Flex, Text } from "@chakra-ui/react"
import styled from "styled-components"

export const MenuLayout= styled(Flex)`

    flex-direction: column;
    height: 100vh;
    width: 90vw;
    max-width: 350px;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(37, 47, 61, 0.9);
    border-radius: 0px 20px 20px 0px;
    padding: 50px 16px 20px;
    color: white;
    font-size: 14px;
    backdrop-filter: blur(40px);
    z-index: 1000;

    //* used for custom svg icons
    img {
        margin-right: 10px;
    }

    &::before {

        content: "";
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.25);
        z-index: -1;
    }
`

export const HeaderRow= styled(Flex)`

    justify-content: space-between;
    align-items: center;
`

export const Header= styled(Text)`

    font-size: 22.5px;
    font-weight: bold;
`

export const DeliveryLocationLayout= styled(Flex)`

    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin: 30px 0 50px 0;
`

export const MenuItemLayout= styled(Flex)`

    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`

export const MenuItemSubText= styled(Text)`

    font-size: 12px;
`

export const MenuItemText= styled(Text)`

    font-size: 14px;
    font-weight: 700;
`

export const CartCount= styled.div`

    background-color: #F4BF76;
    border-radius: 20px;
    color: black;
    padding: 2.5px 10px;
    margin-left: 10px;
`

export const Separator= styled.hr`

    opacity: 0.25;
    margin: 10px 0px 35px;
`