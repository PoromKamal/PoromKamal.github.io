import 'tailwindcss/tailwind.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import SideNav from '../components/sidenav'
import Container from '../components/container'
import Zoom from 'react-reveal/Zoom';
import Footer from '../components/Footer'
import "../components/styles/styles.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  const [width, setWidth] = useState(0);
  const [sideNav, setSideNav] = useState(false);
  
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
      setSideNav(window.innerWidth >= 1240)
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [width])


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Porom Kamal's Personal Portfolio"
        />
        <title>Porom Kamal</title>
      </Head>
      {sideNav ? <SideNav/> : <div/>}
        <main className="py-14 pl-28">
          <div className='pr-80'>
            <Component {...pageProps}/>
          </div>
        </main>
      <Footer/>
    </>

  )
}
