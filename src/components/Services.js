import React from 'react'
import ServiceStyles from  '../styles/Services.module.css'
import plan from '../../public/plan.jpg'
import house from '../../public/residential-house.jpg'
import material from '../../public/material.jpg'
import Image from 'next/image'
 import interior from '../../public/Interior-image.jpg'
import Link from 'next/link'
// import {Navigate} from 'react-router-dom'
// import Contact from '../Contact/Contact'

function Services() {

  return (
    <div className={ServiceStyles.servicesContainer}>
        <h1 className={ServiceStyles.serviceHeadText}> Haami Services </h1>
        <div className={ServiceStyles.serviceInnerContainer}>
        <div className={ServiceStyles.eachServiceContainer}>
            <div className={ServiceStyles.eachServiceInnerContainer}>
                <Image src={plan} className={ServiceStyles.serviceVideos} alt='plan'/>
                 <h1 className={ServiceStyles.eachServiceText}>Planning</h1>
            </div>
          <Link href="/contact"> <button type='button' className={ServiceStyles.serviceBtn}> Book Now </button> </Link> 
        </div>
        <div className={ServiceStyles.eachServiceContainer}>
            <div className={ServiceStyles.eachServiceInnerContainer}>
                <Image src={house}  className={ServiceStyles.serviceVideos} alt='residential-house'/>
                 <h1 className={ServiceStyles.eachServiceText}> Residential House Constructions</h1>
                 
            </div>
            <Link href="/contact">  <button type='button' className={ServiceStyles.serviceBtn}> Book Now </button></Link> 
        </div>
        <div className={ServiceStyles.eachServiceContainer}>
            <div className={ServiceStyles.eachServiceInnerContainer}>
                <Image src={material} className={ServiceStyles.serviceVideos} alt='material'/>
                 <h1 className={ServiceStyles.eachServiceText}> Material Procurement </h1>
            </div>
            <Link href="/contact">   <button type='button' className={ServiceStyles.serviceBtn}> Book Now </button></Link> 
        </div>
        <div className={ServiceStyles.eachServiceContainer}>
            <div className={ServiceStyles.eachServiceInnerContainer}>
                <Image src={interior} className={ServiceStyles.serviceVideos} alt='interior'/>
                 <h1 className={ServiceStyles.eachServiceText}>Interior Works</h1>
            </div>
            <Link href="/contact"> <button type='button' className={ServiceStyles.serviceBtn}> Book Now </button></Link> 
        </div>
        </div>
    </div>
  )
}

export default Services