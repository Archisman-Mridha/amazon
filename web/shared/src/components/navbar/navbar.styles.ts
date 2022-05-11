import { Flex, Image, Text } from "@chakra-ui/react"
import styled from "styled-components"

export const NavbarOptionsLayout= styled(Flex)`

    background-color: rgba(20, 25, 32, 0.9);
    color: white;
    align-items: center;
    padding: 12.5px 10px;

    .menu-toggler {
        display: none;
    }

    @media screen and (max-width: 550px) {

        .menu-toggler {
            display: block;
        }
    }
`

export const AmazonLogo= styled(Image)`

    margin-right: 10px;

    @media screen and (max-width: 550px) {
        margin-right: 0;
    }
`

export const NavbarSectionLayout= styled(Flex)`

    align-items: center;
    margin: 0 10px;

    div {
        margin-left: 10px;
    }

    @media screen and (max-width: 1200px) {

        &:nth-child(4), &:nth-child(5) {
            display: none;
        }
    }

    @media screen and (max-width: 800px) {

        &:nth-child(2) {
            display: none;
        }
    }

    @media screen and (max-width: 550px) {

        &:nth-child(6) {
            display: none;
        }
    }
`

export const NavbarSectionSubHeading= styled(Text)`

    font-size: 12px;
`

export const NavbarSectionHeading= styled(Text)`

    font-size: 14px;
    font-weight: 600 !important;
`

export const CartProductCountButton= styled.div`

    margin-left: 10px;
    background-color: #F4BF76;
    border-radius: 35px;
    padding: 3.5px 12.5px;
    font-size: 12px;
`