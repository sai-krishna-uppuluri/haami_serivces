
import React from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import Procedure from '@/components/Procedure'
import WhyUs from '@/components/WhyUs'
import Footer from '@/components/Footer'


const Home = () => {
  return (
    <div>
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
