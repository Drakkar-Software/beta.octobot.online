import { Flex } from "@chakra-ui/react"
import * as React from "react"
import { Layout } from "../components/Layout"
import { ThankYou } from "../components/ThankYou"

const SubscribedPage = () => {
  return (
    <Layout title="Subscribed">
      <Flex
        alignItems="center"
        justifyContent="center"
        pt='4px'>
        <ThankYou />
      </Flex>
    </Layout>
  )
}

export default SubscribedPage
