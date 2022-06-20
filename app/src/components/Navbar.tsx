import {
    Badge,
    Box,
    Flex,
    Link,
    SimpleGrid,
    Spacer
} from "@chakra-ui/react"
import React from "react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import OctoBotLogo from "./OctoBotLogo"

export const Navbar = () => {
    return (
        <Flex pb='4px'>
            <SimpleGrid columns={2} spacing={0}>
                <Box w='150px'>
                    <OctoBotLogo />
                </Box>
                <Box pt='5'>
                    <Badge ml='1' fontSize='0.8em' colorScheme='green' fontFamily='Forum Regular'>Beta</Badge>
                </Box>
            </SimpleGrid>
            <Link href="/" w='150px'>

            </Link>
            <Spacer />
            <Box
                pt='4px'
                pb='4px'>
                <ColorModeSwitcher justifySelf="flex-end" />
            </Box>
        </Flex>
    )
}
