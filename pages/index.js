import Head from "next/head"
import { TriangleUpIcon } from "@chakra-ui/icons"
import { Button, Text, Code, Icon, Flex } from "@chakra-ui/react"

import { useAuth } from '@/lib/auth'
import Link from "next/link"

const Home = () => {
  const auth = useAuth();

  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
      <Head><title>Fast Feedback</title></Head>

      {/* <Icon color="black" name="logo" size="48px" mb={2} /> */}

      <TriangleUpIcon size="48px" mb={2} />

      <Text mb={4}>
        <Text as="span" fontWeight="bold" display="inline">
          Fast Feedback
        </Text>
        {` is being built as part of`}
        <Link href="https://react2025.com" isExternal textDecoration="underline">
          React 2025
        </Link>
        {`. It's the easiest wat to add comments or reviews to your static site. It's still a work-in-progress, but you can try it out by logging in.`}
      </Text>
      {auth.user ? (
        <Button
          as="a"
          href="/dashboard"
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          mt={4}
          maxW="200px"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          View Dashboard
        </Button>
      ) : <Button mt={4} size="sm" onClick={(e) => auth.signinWithGithub()}>Sign in</Button>}
    </Flex>
  )
}

export default Home