import React from 'react'
import aboutStyles from '../styles/About.module.css'
import Link from 'next/link'

function AboutSection() {
  return (
    <div className={aboutStyles.container}>
        <div className={aboutStyles.bannerContainer}>
            <h1 className={aboutStyles.heading}> About Us </h1>
        </div>
        <div className={aboutStyles.sectionContainer}>
            <div className={aboutStyles.aboutUsSection}>
                <h1 className={aboutStyles.headText}> Our Story </h1>
                <p className={aboutStyles.description}>
                    Welcome to Haami, the top construction company in Vijayawada, offering
                    a one-stop-solution for your dream house. Our team of experienced civil 
                    engineers with postgraduate degrees specializes in residential house 
                    construction, and we use the latest tools and techniques to provide 
                    cutting-edge monitoring and digital tracking solutions.
                </p>
                <p className={aboutStyles.description}>
                    As the best construction company in Vijayawada, we take pride 
                    in our attention to detail, technical expertise, and commitment
                    to quality. Our services include architectural design, 
                    construction management, project planning, and more. We work 
                    closely with our clients to understand their needs and objectives, 
                    ensuring that we deliver customized solutions that meet their specific
                    requirements.
                </p>
                <p className={aboutStyles.description}>
                    At Haami, we believe that technology can transform the construction
                    industry. That is why we are a tech-powered construction company, using
                    the latest software and hardware to streamline processes, reduce costs,
                    and improve project outcomes. Our goal is to help you save time and money 
                    while ensuring that your dream house becomes a reality.
                </p>
                <p className={aboutStyles.description}>
                    Our team has worked on numerous residential construction projects in Vijayawada,
                    earning a reputation for excellence and reliability. We are committed to delivering
                    projects on time and within budget, without compromising on quality. As a top construction
                    company in Vijayawada, we understand the unique challenges of the local market and are 
                    well-equipped to deliver projects that meet your expectations.
                </p>
                <p className={aboutStyles.description}>
                    Thank you for considering Haami for your next residential house construction project in
                    Vijayawada. We are confident that our one-stop-solution and tech-powered approach will
                    help you achieve your dream house. Contact us today to learn more about our services!
                </p>
            </div>
        </div>
        <Link href="/contact"><button type='button' className={aboutStyles.ContactBtn} > Contact Us </button></Link>
    </div>
  )
}

export default AboutSection
