import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Márcio Rocha</title>
        <meta name="description" content="The portfolio of Márcio Rocha." />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp