import React from 'react'

import contactStyles from '../styles/ContactSection.module.css'
import {TbPhoneCall , TbAddressBook} from 'react-icons/tb'
import {AiOutlineMail} from 'react-icons/ai'
import FormSection from './FormSection'
// import {FaRegAddressCard} from 'react-icons/fa'

function ContactSection() {
  return (
    <div className={contactStyles.container}>
        <div className={contactStyles.bannerContainer}>
            <h1 className={contactStyles.heading}> Contact Us </h1>
        </div>
        <div className={contactStyles.contactContainer}>
            <div className={contactStyles.addressContainer}>
                <div className={contactStyles.eachAddress}>
                    <div className= {contactStyles.roundContainer}>
                        <TbPhoneCall size={45} color='#000' />
                    </div>
                    <div className={contactStyles.addressContainerDetails}>
                        <h1 className={contactStyles.addressHead}> Phone Number </h1>
                        <p className={contactStyles.addressText}> 9866627816 </p>
                    </div>
                </div>
                <div className={contactStyles.eachAddress}>
                    <div className= {contactStyles.roundContainer}>
                        <AiOutlineMail size={45} color='#000' />
                    </div>
                    <div className={contactStyles.addressContainerDetails}>
                        <h1 className={contactStyles.addressHead}> Email  </h1>
                        <p className={contactStyles.addressText}> u.sai.chowdary@gmail.com </p>
                    </div>
                </div>
                <div className={contactStyles.eachAddress}>
                    <div className= {contactStyles.roundContainer}>
                        <TbAddressBook size={45} color='#000' />
                    </div>
                    <div className={contactStyles.addressContainerDetails}>
                        <h1 className={contactStyles.addressHead}> Address </h1>
                        <p className={contactStyles.addressText}> 6-249, Sri hari Gardens </p>
                        <p className={contactStyles.addressText}> Penamaluru </p>
                        <p className={contactStyles.addressText}> Vijayawada </p>
                    </div>
                </div>
            </div>
           <FormSection />
        </div>

    </div>
  )
}

export default ContactSection
