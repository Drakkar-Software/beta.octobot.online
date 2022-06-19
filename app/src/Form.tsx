import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "./Card";


function Form() {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("brand.500", "brand.400");
  return (
    <Card
      w={{ base: "100%", "xl": "50%" }}
      mb={{ base: "0px", "2xl": "20px" }}>
      <Text
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Join the OctoBot beta
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        As a member of the OctoBot Beta Program, you can take part in shaping OctoBot software by test-driving pre-release versions and letting us know what you think.
      </Text>
      <Flex
        justifyContent='center'
        alignItems="center"
        flexDirection='column'>
        <form>
          <Flex
            zIndex='2'
            direction='column'
            w={{ base: "100%", md: "420px" }}
            maxW='100%'
            background='transparent'
            borderRadius='15px'
            mx={{ base: "auto", lg: "unset" }}
            me='auto'
            mb={{ base: "20px", md: "auto" }}>
            <FormControl>
              <FormLabel
                display='flex'
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                mb='8px'>
                Email<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                isRequired={true}
                variant='auth'
                fontSize='sm'
                ms={{ base: "0px", md: "0px" }}
                type='email'
                name='email'
                placeholder='Please enter your email address'
                mb='24px'
                fontWeight='500'
                size='lg'
              />
              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                display='flex'>
                Discord username
              </FormLabel>
              <Input
                isRequired={false}
                variant='auth'
                fontSize='sm'
                ms={{ base: "0px", md: "0px" }}
                type='text'
                placeholder='Your discord username'
                name='field_lastname'
                mb='24px'
                fontWeight='500'
                size='lg'
              />
              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                display='flex'>
                Telegram username
              </FormLabel>
              <Input
                isRequired={false}
                variant='auth'
                fontSize='sm'
                ms={{ base: "0px", md: "0px" }}
                type='text'
                name='field_firstname'
                placeholder='Your telegram username'
                mb='24px'
                fontWeight='500'
                size='lg'
              />
              <Button
                fontSize='sm'
                variant='brand'
                fontWeight='500'
                w='100%'
                h='50'
                type='submit'
                mb='24px'>
                Join
              </Button>
            </FormControl>
          </Flex>
        </form>
      </Flex>
    </Card>
  );
}

export default Form;