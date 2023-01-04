import 'tailwindcss/tailwind.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import { Auth0Provider } from '@auth0/auth0-react'
import SideNav from '../components/sidenav'
import Container from '../components/container'
import Zoom from 'react-reveal/Zoom';
import Footer from '../components/Footer'

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
          content="Clone and deploy your own Next.js portfolio in minutes."
        />
        <title>Porom Kamal</title>
      </Head>
      <Container>
        <h1 className="sticky top-0 pt-16 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
          Porom Kamal
        </h1>
      </Container>
      <SideNav/>
        <main className="py-14">
          <Component {...pageProps}/>
        </main>
      <Footer/>
    </Auth0Provider>
  )
}
