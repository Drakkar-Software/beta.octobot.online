import * as React from "react"
import { Flex, Text, Link } from "@chakra-ui/react"
import { Layout } from "../components/Layout"
import Card from "../components/Card"

const NotFoundPage = () => {
  return (
    <Layout title="Not found">
      <Flex
        alignItems="center"
        justifyContent="center"
        pt='4px'>
          <Card
            w={{ base: "100%", "xl": "50%" }}
            mb={{ base: "0px", "2xl": "20px" }}>
            <Text
                fontWeight='bold'
                fontSize='2xl'
                mt='10px'
                mb='4px'>
                Page not found
            </Text>
            <Text fontSize='md' me='26px' mb='40px'>
            <Link href="/">Go home</Link>
            </Text>
        </Card>
      </Flex>
    </Layout>
  )
}

export default NotFoundPage
