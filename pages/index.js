import Head from "next/head"
import { Button, Text, Code, Icon, Flex, IconButton, Stack, Box } from "@chakra-ui/react"
import { Github, Logo, Google } from "@/styles/icons"

import { useAuth } from '@/lib/auth'
import Link from "next/link"
import { getAllFeedback } from "@/lib/db-admin"
import { FeedbackLink } from "@/components/FeedbackLink"
import Feedback from "@/components/Feedback"

const SITE_ID = "ffv56nx2QTLZaOS3Rxpp"

export async function getStaticProps(context) {
  const { feedback } = await getAllFeedback(SITE_ID);

  return {
    props: {
      allFeedback: feedback
    },
    revalidate: 1
  }
}

const Home = ({ allFeedback }) => {
  const auth = useAuth();

  return (
    <>
      <Box bg="gray.100" py={16}>
        <Flex as="main" direction="column" maxW="700px" margin="0 auto">
          <Head>
            <script dangerouslySetInnerHTML={{
              __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/sites"
          }
        ` }} />
          </Head>

          <Logo color="black" boxSize="48px" mb={2} />

          <Text mb={4} fontSize="lg" py={4}>
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
              href="/sites"
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
      </Box>
      <Box display="flex"
        flexDirection="column"
        width="full"
        maxWidth="700px"
        margin="0 auto"
        mt={8}
      >
        <FeedbackLink siteId={SITE_ID} />
        {allFeedback.map((feedback) => (
          <Feedback key={feedback.id} {...feedback} />
        ))}
      </Box>
    </>
  )
}

export default Home