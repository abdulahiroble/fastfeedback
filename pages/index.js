import Head from "next/head"
import { Button, Text, Code, Icon, Flex, IconButton, Stack } from "@chakra-ui/react"
import { Github, Logo, Google } from "@/styles/icons"

import { useAuth } from '@/lib/auth'
import Link from "next/link"

const Home = () => {
  const auth = useAuth();

  return (
    <Flex as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      maxW="400px"
      margin="0 auto">
      <script dangerouslySetInnerHTML={{
        __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        ` }} />

      <Head><title>Fast Feedback</title></Head>

      <Logo color="black" boxSize="px" mb={2} />

      <Text mb={4} fontSize="lg" p={6}>
        <Text as="span" fontWeight="bold" display="inline">
          Fast Feedback
        </Text>
        {` is being built as part of `}
        <Link href="https://react2025.com" isExternal textDecoration="underline">
          React 2025
        </Link>
        {`. It's the easiest way to add comments or reviews to your static site. It's still a work-in-progress, but you can try it out by logging in.`}
      </Text>
      {auth.user ? (
        <Button
          as="a"
          href="/dashboard"
          backgroundColor="white"
          color="gray.900"
          fontWeight="medium"
          mt={4}
          size="lg"
          variant="outline"
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.95)'
          }}
        >
          View Dashboard
        </Button>
      ) : <Stack>
        <Button backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }} leftIcon={<Github />} mt={4} size="lg" onClick={(e) => auth.signinWithGithub()}>Sign In with Github
        </Button>

        <Button backgroundColor="white"
          color="gray.900"
          fontWeight="medium"
          variant="outline"
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.95)'
          }} leftIcon={<Google />} mt={4} size="lg" onClick={(e) => auth.signinWithGoogle()}>Sign In with Google
        </Button>

      </Stack>}
    </Flex>
  )
}

export default Home