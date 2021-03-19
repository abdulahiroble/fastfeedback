import Head from 'next/head'
import { useAuth } from '../lib/auth'
import styles from '../styles/Home.module.css'

const Home = () => {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        {auth.user ? auth.user.email : 'None'}

        {auth.user ? (
          <button onClick={(e) => auth.signout()}>Sign out</button>
        ) : <button onClick={(e) => auth.signinWithGithub()}>Sign in</button>}

      </main>

    </div>
  )
}

export default Home