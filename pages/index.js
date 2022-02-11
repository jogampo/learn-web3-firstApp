
import { useCallback, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useWeb3React } from '@web3-react/core'
import { connector } from '../config/web3'

export default function Home() {

  const {
    active,
    activate,
    deactivate,
    account,
    error,
    chainId
  } = useWeb3React()

  
  const connect = useCallback(() => {
    activate(connector)
    localStorage.setItem('previsouslyConnected', true)
  }, [activate])

  
  useEffect(() => {
    if (localStorage.getItem('previsouslyConnected') === 'true') {
      connect()
    }
  }, [connect])


  const disconnect = () => {
    deactivate()
    localStorage.removeItem('previsouslyConnected')
  }

  if (error) {
    return <p> Ha ocurrido algo!!!!!</p>
  }

  return (
    <div className={styles.container}>
      <h1>web3 demo app to learn</h1>

      {
        active ? 
        <>
          <button onClick={disconnect}>Disconnect wallet</button>
          <p> you are connected to {chainId} network. <br />
            your account is: {account}
          </p>
        </>
          : <button onClick={connect}>Connect wallet</button>
      }
    </div>
  )
}
