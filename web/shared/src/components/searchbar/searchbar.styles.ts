import { Flex } from "@chakra-ui/react"
import styled from "styled-components"

export const SearchbarLayout= styled(Flex)`

    color: black;
    font-size: 13px;
    flex: 1;
    margin: 0 10px;
`

export const ProductCategoryTogglerLayout= styled(Flex)`

    border-radius: 5px 0 0 5px;
    background-color: #F3F3F3;
    padding: 5px 12.5px;
    align-items: center;
    cursor: pointer;
`

export const SearchInput= styled.input`

    outline: none;
    padding: 7.5px;
    font-weight: 500;
    flex: 1;
`

export const SearchButton= styled(Flex)`

    padding: 7.5px 12.5px;
    background-color: #F4BF76;
    border-radius: 0 5px 5px 0;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`