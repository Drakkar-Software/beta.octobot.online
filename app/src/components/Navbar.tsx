import {
    Box,
    Flex,
    Spacer
} from "@chakra-ui/react"
import React from "react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import OctoBotLogo from "./OctoBotLogo"

export const Navbar = () => {
    return (
        <Flex pb='4px'>
            <Box w='150px'>
                <OctoBotLogo />
            </Box>
            <Spacer />
            <Box
                pt='4px'
                pb='4px'>
                <ColorModeSwitcher justifySelf="flex-end" />
            </Box>
        </Flex>
    )
}
