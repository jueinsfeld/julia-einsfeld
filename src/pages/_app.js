import { Provider } from '@skynexui/components'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <title>Júlia Einsfeld</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}


export default MyApp;
