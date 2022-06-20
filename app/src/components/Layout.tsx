import { ChakraProvider } from "@chakra-ui/react";
import React, { FC } from "react";
import theme from "../theme/theme";
import { Navbar } from "./Navbar";

interface Props {
    children?: any
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <ChakraProvider theme={theme}>
            <title>OctoBot Beta</title>
            <Navbar />
            {children}
        </ChakraProvider>
    );
};
