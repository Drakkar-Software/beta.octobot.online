import { ChakraProvider } from "@chakra-ui/react";
import React, { FC } from "react";
import theme from "../theme/theme";
import { Navbar } from "./Navbar";
import Seo from "./SEO";

interface Props {
    title: string
    children?: any
}

export const Layout: FC<Props> = ({ title, children }) => {
    return (
        <ChakraProvider theme={theme}>
            <Seo title={title} />
            <Navbar />
            <main>{children}</main>
            {/* <footer>© {new Date().getFullYear()}, Built with {` `}<a href="https://www.gatsbyjs.com">Gatsby</a></footer> */}
        </ChakraProvider>
    );
};
