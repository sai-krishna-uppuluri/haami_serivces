import React from 'react'
import stylesSection from '../styles/WhyUs.module.css'

function WhyUs() {
  return (
    <div className={stylesSection.sectionContainer}>
        <h1 className={stylesSection.head}> ...Why Us....</h1>
        <div className={stylesSection.sectionInnerContainer}>
            <div className={stylesSection.eachSectionContainer}> 
                <h1 className={stylesSection.headText}> Experienced Professionals </h1>
                <p className={stylesSection.sectionDescriptionText}>
                    We will assign well versed experienced Professionals to your project
                </p>
            </div>
            <div className={stylesSection.eachSectionContainer}> 
                <h1 className={stylesSection.headText}> Transparency </h1>
                <p className={stylesSection.sectionDescriptionText}>
                    We will ensure 100% Transparency in the project
                </p>
            </div>
            <div className={stylesSection.eachSectionContainer}> 
                <h1 className={stylesSection.headText}> Continuous Alert System </h1>
                <p className={stylesSection.sectionDescriptionText}>
                    We will update the daily Progress Report , Images and videos.
                </p>
            </div>
            <div className={stylesSection.eachSectionContainer}> 
                <h1 className={stylesSection.headText}> Dedicated Project Engineer </h1>
                <p className={stylesSection.sectionDescriptionText}>
                    We will assign Dedicated Project Engineer Who will clear all your 
                    doudts. He will be your buddy until the Project Delivery
                </p>
            </div>
            <div className={stylesSection.eachSectionContainer}> 
                <h1 className={stylesSection.headText}> Material Procurement  </h1>
                <p className={stylesSection.sectionDescriptionText}>
                    We will take care of all the material. Don`t worry, we will ensure the best 
                    quality material with most reasonable price
                </p>
            </div>
            <div className={stylesSection.eachSectionContainer}> 
                <h1 className={stylesSection.headText}> Timely Delivery </h1>
                <p className={stylesSection.sectionDescriptionText}>
                    We will ensure the project completes in scheduled Finish date
                </p>
            </div>
            <div className={stylesSection.eachSectionContainer}> 
                <h1 className={stylesSection.headText}> Plan Approvals </h1>
                <p className={stylesSection.sectionDescriptionText}>
                    We will take care of all the Approvals needed for the construction
                </p>
            </div>
            <div className={stylesSection.eachSectionContainer}> 
                <h1 className={stylesSection.headText}> Flexible Cost  </h1>
                <p className={stylesSection.sectionDescriptionText}>
                    We will tailor fit according to your cost 
                </p>
            </div>
        </div>
    </div>
  )
}

export default WhyUs
