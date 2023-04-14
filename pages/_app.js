import Header from '@/components/Header'
import '@/styles/globals.css'
import Footer from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '@/components/Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
   <>
   <Head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
   
   
   </Head>
  <Layout>
     <Component {...pageProps} />
  </Layout>
  </>)
}
