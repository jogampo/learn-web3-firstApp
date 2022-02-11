import '../styles/globals.css'
import {getLibrary} from '../config/web3'
import {Web3ReactProvider} from '@web3-react/core'

function MyApp({ Component, pageProps }) {
  <Web3ReactProvider getLibrary={getLibrary}>
     return <Component {...pageProps} />
  </Web3ReactProvider>
}

export default MyApp
