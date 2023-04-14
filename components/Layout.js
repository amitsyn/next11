import React from 'react'
import  Header  from './Header'
import Footer from './Footer'
import { Head } from 'next/document';

const Layout = ({children}) => {
  return (
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  )
}

export default Layout
