import { Icon, Text } from "@chakra-ui/react"
import { FC } from "react"
import { IconContext } from "react-icons"
import { AiFillCaretDown } from "react-icons/ai"
import { ProductCategoryTogglerLayout, SearchbarLayout, SearchButton, SearchInput } from "./searchbar.styles"
import { FiSearch } from "react-icons/fi"

export const Searchbar: FC= ( ) => {

    return (
        <>
            <IconContext.Provider value= {{ color: "black", size: "22.5px" }}>
                <SearchbarLayout>
                    <ProductCategoryTogglerLayout>
                        <Text marginRight= "5px">All</Text>
                        <Icon as= { AiFillCaretDown } />
                    </ProductCategoryTogglerLayout>

                    <SearchInput placeholder= "Search Here" type= "search" size= {1} />

                    <SearchButton>
                        <FiSearch />
                    </SearchButton>
                </SearchbarLayout>
            </IconContext.Provider>
        </>
    )
}