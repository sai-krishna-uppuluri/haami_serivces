import React from 'react'
import bannerStyles from  '../styles/Banner.module.css'

// import homeScreen from '../../assets/home-screen.jpg'

function Banner() {
  return (
    <div className={bannerStyles.bannerSectionContainer}>
      <div className={bannerStyles.bannerHeaderContainer}>
        <h1 className={bannerStyles.headText}> Hami Constructions </h1>
        <p className={bannerStyles.pText}> A One-Stop Solution for your Dream House </p>
      </div>
    </div>
  )
}

export default Banner