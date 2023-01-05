import 'tailwindcss/tailwind.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import { Auth0Provider } from '@auth0/auth0-react'
import SideNav from '../components/sidenav'
import Container from '../components/container'
import Zoom from 'react-reveal/Zoom';
import Footer from '../components/Footer'
import "../components/styles/styles.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Porom Kamal's Personal Portfolio"
        />
        <title>Porom Kamal</title>
      </Head>
      <SideNav/>
        <main className="py-14 pl-28">
          <div className='pr-80'>
            <Component {...pageProps}/>
          </div>
        </main>
      <Footer/>
    </Auth0Provider>
  )
}
