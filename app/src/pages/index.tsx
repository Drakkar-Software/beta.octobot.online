import { Flex } from "@chakra-ui/react"
import * as React from "react"
import BetaForm from "../components/BetaForm"
import { Layout } from "../components/Layout"

// markup
const IndexPage = () => {
  return (
    <Layout>
        <Flex
          alignItems="center"
          justifyContent="center"
          pt='4px'>
          <BetaForm />
        </Flex>
    </Layout>
  )
}

export default IndexPage
