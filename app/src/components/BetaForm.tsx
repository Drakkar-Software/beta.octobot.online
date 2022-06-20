import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "./Card";
import { Field, FieldProps, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useState } from "react";
import React from "react";

interface BetaFormValues {
  email: string;
  telegramUsername: string;
  discordUsername: string;
}

function BetaForm() {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const [message, setMessage] = useState('')
  const [disabled, setDisabled] = useState(false)

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
        <Formik
          initialValues={{
            email: '',
            telegramUsername: '',
            discordUsername: '',
          }}
          onSubmit={async (
            values: BetaFormValues,
            { setSubmitting }: FormikHelpers<BetaFormValues>
          ) => {
            try {
              setSubmitting(true);
              setMessage('')
              fetch("https://i.prefinery.com/projects/tanbi7sc/users/instant?email=" + values.email +
              "&telegramUsername=" + values.telegramUsername +
              "&discordUsername=" + values.discordUsername, 
              {mode:'no-cors'})
              setDisabled(true)
              setMessage("Please confirm your email by clicking on a link sent to " + values.email)
            } catch (e: any) {
              setMessage(e.errors[0].message)
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }: FormikProps<any>) => (
            <Form>
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
                  <Field id="email" name="email" placeholder="Email">
                    {({ field, meta }: FieldProps) => (
                      <>
                        <Input
                          variant='auth'
                          fontSize='sm'
                          ms={{ base: "0px", md: "0px" }}
                          type='email'
                          placeholder='Please enter your email address'
                          mb='24px'
                          fontWeight='500'
                          size='lg'
                          {...field}
                        />
                        {meta.touched && meta.error && <Text>{meta.error}</Text>}
                      </>
                    )}
                  </Field>
                  <FormLabel
                    ms='4px'
                    fontSize='sm'
                    fontWeight='500'
                    color={textColor}
                    display='flex'>
                    Discord username
                  </FormLabel>
                  <Field id="discordUsername" name="discordUsername" placeholder="Your discord username">
                    {({ field, meta }: FieldProps) => (
                      <>
                        <Input
                          variant='auth'
                          fontSize='sm'
                          ms={{ base: "0px", md: "0px" }}
                          type='text'
                          placeholder='Your discord username'
                          mb='24px'
                          fontWeight='500'
                          size='lg'
                          {...field}
                        />
                        {meta.touched && meta.error && <Text>{meta.error}</Text>}
                      </>
                    )}
                  </Field>
                  <FormLabel
                    ms='4px'
                    fontSize='sm'
                    fontWeight='500'
                    color={textColor}
                    display='flex'>
                    Telegram username
                  </FormLabel>
                  <Field id="telegramUsername" name="telegramUsername" placeholder="Your telegram username">
                    {({ field, meta }: FieldProps) => (
                      <>
                        <Input
                          variant='auth'
                          fontSize='sm'
                          ms={{ base: "0px", md: "0px" }}
                          type='text'
                          placeholder='Your telegram username'
                          mb='24px'
                          fontWeight='500'
                          size='lg'
                          {...field}
                        />
                        {meta.touched && meta.error && <Text>{meta.error}</Text>}
                      </>
                    )}
                  </Field>
                  {message ? (
                    <Text
                      w='max-content'
                      mb='10px'
                      fontSize='sm'
                      p='6px 12px'
                      borderRadius='10px'
                      fontWeight='700'>
                      {message}
                    </Text>)
                    : null}
                  <Button
                    isLoading={isSubmitting}
                    disabled={disabled}
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
            </Form>
          )}
        </Formik>
      </Flex>
    </Card>
  );
}

export default BetaForm;