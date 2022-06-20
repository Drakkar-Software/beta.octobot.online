import {Flex} from "@chakra-ui/react"
import React from "react"
import BetaForm from "./BetaForm"

export const Home = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      pt='4px'>
      <BetaForm />
    </Flex>
  )
}
