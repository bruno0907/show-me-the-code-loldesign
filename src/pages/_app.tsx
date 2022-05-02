import Head from 'next/head'
import GlobalStyle from './styles/globalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Telzir</title>
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Poppins&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
