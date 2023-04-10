
import React from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import Procedure from '@/components/Procedure'
import WhyUs from '@/components/WhyUs'
import Footer from '@/components/Footer'
import Head from 'next/head'


const Home = () => {
  return (
    <div>
     <Head>
        <title>Haami Constructions</title>
        <meta name="description" content="Haami Constructions is your one-stop solution for all residential construction needs. We specialize in material procurement, interior works, plan approvals, and more. Our innovative technology allows for digital tracking, 100% transparency, and flexible costs." />
        <meta name="keywords" content="Haami Constructions, residential construction, material procurement, interior works, plan approvals, technology, digital tracking, transparency, flexible costs" />
        <meta name="Haami" content="Haami Constructions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <Services />
      <Procedure />
      <WhyUs />
      <Footer />
    </div>
  )
}

export default Home
