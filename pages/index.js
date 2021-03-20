import Head from "next/head"
import { Button, Text, Code, Icon, Flex } from "@chakra-ui/react"

import { useAuth } from '@/lib/auth'

const Home = () => {
  const auth = useAuth();

  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
      <Head><title>Fast Feedback</title></Head>

      <Icon color="black" name="logo" size="64px" />

      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign out</Button>
      ) : <Button mt={4} size="sm" onClick={(e) => auth.signinWithGithub()}>Sign in</Button>}
    </Flex>
  )
}

export default Home