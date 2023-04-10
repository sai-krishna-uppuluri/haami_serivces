import ContactSection from '@/components/ContactSection'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'

function contact() {
  return (
    <div>
     <Head>
        <title>Contact Us | Your Website Name</title>
        <meta name="description" content="Contact us to get in touch with our team." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <Navbar />
      <ContactSection />
    </div>
  )
}

export default contact
