import React from 'react'
import features from '../styles/Features.module.css'
import engineer from '../../public/civil-engineer.jpg'
import Image from 'next/image'

function Features() {
  return (
    <div className={features.sectionContainer}>
        <h1> Our Specialty </h1>
        <div className={features.sectionInnerContainer}>
            <div className={features.featureContainer}>
                <div className={features.eachFeatureContainer}>
                    <div className={features.eachFeatureTextContainer}>
                        <h1 className={features.eachFeatureHead}> Experienced Professionals </h1>
                        <hr  className={features.line}/>
                        <p className={features.eachFeatureDesc}> 
                            We will assign well versed experienced Professionals to your project
                        </p>
                    </div>
                </div>
                <div className={features.eachFeatureContainer}>
                    <div className={features.eachFeatureTextContainer}>
                        <h1 className={features.eachFeatureHead}> Transparency </h1>
                        <hr  className={features.line}/>
                        <p className={features.eachFeatureDesc}> 
                        We will ensure 100% Transparency in the project
                        </p>
                    </div>
                </div>
                <div className={features.eachFeatureContainer}>
                    <div className={features.eachFeatureTextContainer}>
                        <h1 className={features.eachFeatureHead}> Continuous Alert System </h1>
                        <hr  className={features.line}/>
                        <p className={features.eachFeatureDesc}> 
                        We will update the daily Progress Report , Images and videos.
                        </p>
                    </div>
                </div>
            </div>
                <div className={features.imageContainer}>
                    <Image src= {engineer} alt = "civil-engineer" className={features.engineerImage}/>
                </div>
            <div className= {features.featureRightContainer}>
                <div className={features.eachFeatureRightContainer}>
                    <div className={features.eachFeatureTextRightContainer}>
                        <h1 className={features.eachFeatureHead}> Dedicated Project Engineer </h1>
                        <hr  className={features.line}/>
                        <p className={features.eachFeatureDesc}> 
                            We will assign Dedicated Project Engineer Who will clear all your 
                            doudts. He will be your buddy until the Project Delivery
                        </p>
                    </div>
                </div>
                <div className={features.eachFeatureRightContainer}>
                    <div className={features.eachFeatureTextRightContainer}>
                        <h1 className={features.eachFeatureHead}> Material Procurement </h1>
                        <hr  className={features.line}/>
                        <p className={features.eachFeatureDesc}> 
                            We will take care of all the material. Don`t worry, we will ensure the best 
                            quality material with most reasonable price
                        </p>
                    </div>
                </div>
                <div className={features.eachFeatureRightContainer}>
                    <div className={features.eachFeatureTextRightContainer}>
                        <h1 className={features.eachFeatureHead}> Timely Delivery </h1>
                        <hr  className={features.line}/>
                        <p className={features.eachFeatureDesc}>  
                        We will ensure the project completes in scheduled Finish date
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
