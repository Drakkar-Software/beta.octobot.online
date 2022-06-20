import {Text} from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

export const ThankYou = () => {
    const textColorSecondary = "gray.400";

    return (
        <Card
            w={{ base: "100%", "xl": "50%" }}
            mb={{ base: "0px", "2xl": "20px" }}>
            <Text
                fontWeight='bold'
                fontSize='2xl'
                mt='10px'
                mb='4px'>
                Thank You
            </Text>
            <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
                You have been successfully subscribed to OctoBot beta program.
            </Text>
        </Card>
    )
};
