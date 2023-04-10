import React from 'react'
import aboutStyles from '../styles/About.module.css'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import Head from 'next/head'

function about() {
  const pageTitle = "About Us - Haami Constructions"
  const pageDescription = "Haami Constructions is the top construction company in Vijayawada. We offer a one-stop solution for residential house construction, material procurement, interior works, plan approvals, and more. Our tech-powered approach ensures 100% transparency and flexible costs. Contact us today!"
  return (
    <div className={about.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default about
