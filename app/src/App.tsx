import {
  ChakraProvider,
  Box,
  Flex,
  Spacer
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import BetaForm from "./BetaForm"
import OctoBotLogo from "./OctoBotLogo"
import theme from "./theme/theme"

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
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
      <Flex 
        alignItems="center"
        justifyContent="center"
        pt='4px'>
        <BetaForm />
      </Flex>
    </ChakraProvider>
  )
}
