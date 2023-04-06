import React from 'react'
import aboutStyles from '../styles/About.module.css'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

function about() {
  return (
    <div className={about.container}>
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default about
