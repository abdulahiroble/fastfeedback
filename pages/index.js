import Head from "next/head"
import { TriangleUpIcon } from "@chakra-ui/icons"
import { Button, Text, Code, Icon, Flex } from "@chakra-ui/react"

import { useAuth } from '@/lib/auth'
import EmptyState from "@/components/EmptyState";

const Home = () => {
  const auth = useAuth();

  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
      <Head><title>Fast Feedback</title></Head>

      <TriangleUpIcon size="24px" />

      {/* <Icon color="black" name="logo" size="48px" mb={2} /> */}

      {auth.user ? (
        <EmptyState />
      ) : <Button mt={4} size="sm" onClick={(e) => auth.signinWithGithub()}>Sign in</Button>}
    </Flex>
  )
}

export default Home