import { ThemeProvider, CSSReset } from "@chakra-ui/react"
import { AuthProvider } from "../lib/auth"

import customTheme from "../styles/theme"

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App