import { AppProps } from "next/app"
import Head from "next/head"
import Footer from "./footer";

import Header from './header';

interface LayoutProps {
  children: JSX.Element
}

export default function({children}: LayoutProps) {
  
  return (
    <>
      <Head>
        <meta 
          name="description"
          content="BLX BET Websites" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}