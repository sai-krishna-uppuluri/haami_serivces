import React from 'react'
import footer from '../styles/Footer.module.css'
import NewStyles from '../styles/NewService.module.css'
import {BsInstagram , BsFacebook} from 'react-icons/bs'
import FormSection from './FormSection'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className={NewStyles.orangeSection}>
    <h1 className={NewStyles.mainHeadingTextOrange}> All Your Construction Needs Under One Roof</h1>
  </div>
    <div className={footer.footerContainer}>
      <h1 className={footer.headingFooter}> Find Us At</h1>
      <div className={footer.footerInnerContainer}>
        <div className={footer.addressContainer}>
            <p className={footer.footerText}>6-249, Sri Hari Gardens </p>
            <p className={footer.footerText}> Penamaluru </p>
            <p className={footer.footerText}> Vijayawada </p>
        </div>
        <div className={footer.socialMediaContainer}>
            <Link href='https://www.instagram.com/haami_constructions/' target='_blank'><BsInstagram size = {30} className={footer.socialIcon}/> </Link>
            <Link href='https://www.facebook.com/haami.constructions' target='_blank'><BsFacebook size={30} className={footer.socialIcon}/></Link>
        </div>
        <div className={footer.officeEmailContainer}>
            <p className={footer.footerText}> email : haamiconstructions@gmail.com </p>
            <p className={footer.footerText}> 9949060148 </p>
        </div>
      </div>
      <div className= {footer.contactUs}>
          <FormSection />
        </div>
    </div>
    </>
  )
}

export default Footer