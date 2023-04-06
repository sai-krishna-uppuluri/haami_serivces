import React from 'react'
import footer from '../styles/Footer.module.css'

import {BsInstagram , BsLinkedin} from 'react-icons/bs'
import FormSection from './FormSection'

const Footer = () => {
  return (
    <div className={footer.footerContainer}>
      <h1 className={footer.headingFooter}> Find Us On</h1>
      <div className={footer.footerInnerContainer}>
        <div className={footer.addressContainer}>
            <p className={footer.footerText}>6-249, Sri Hari Gardens </p>
            <p className={footer.footerText}> Penamaluru </p>
            <p className={footer.footerText}> Vijayawada </p>
        </div>
        <div className={footer.socialMediaContainer}>
            <BsInstagram size = {30} className={footer.socialIcon}/>
            <BsLinkedin size={30} className={footer.socialIcon}/>
        </div>
        <div className={footer.officeEmailContainer}>
            <p className={footer.footerText}> email : u.sai.chowdary@gmail.com </p>
            <p className={footer.footerText}> 9866627816 </p>
        </div>
        <div className= {footer.contactUs}>
          <h1 className={footer.footerText}> Contact Us </h1>
          <FormSection />
        </div>
      </div>
    </div>
  )
}

export default Footer