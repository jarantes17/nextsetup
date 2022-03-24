import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import GlobalStyle from '../src/theme/GlobalStyle'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
