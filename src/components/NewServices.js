import React from 'react'
import NewStyles from  '../styles/NewService.module.css'
import bannerStyles from '../styles/Banner.module.css'

// import {Navigate} from 'react-router-dom'
// import Contact from '../Contact/Contact'

function NewServices() {

  return (
    <div>
    <div className={NewStyles.orangeSection}>
      <h1 className={NewStyles.mainHeadingTextOrange}> Welcome To Haami  </h1>
    </div>
    <div className={NewStyles.servicesContainer}>
    <h1 className={NewStyles.mainHeadingText}> Our Services </h1>
      <div className={NewStyles.innerContainer}>
        <div className={NewStyles.eachInnerContainer}>
          <div className={NewStyles.TextContainer}>
            <h1 className={NewStyles.headingText}> residential Constructions</h1>
            <hr className={NewStyles.line}/>
            <p className={NewStyles.paraText}> We Will Your Dream House right from Scratch to Finish</p>
          </div>
        </div>
        <div className={NewStyles.eachInnerContainer}>
          <div className={NewStyles.TextContainer}>
            <h1 className={NewStyles.headingText}> Planning & Approvals</h1>
            <hr className={NewStyles.line}/>
            <p className={NewStyles.paraText}> We Will Your Dream House right from Scratch to Finish</p>
          </div>
        </div>
        <div className={NewStyles.eachInnerContainer}>
          <div className={NewStyles.TextContainer}>
            <h1 className={NewStyles.headingText}> Material Procurement </h1>
            <hr className={NewStyles.line}/>
            <p className={NewStyles.paraText}> We Will Your Dream House right from Scratch to Finish</p>
          </div>
        </div>
        <div className={NewStyles.eachInnerContainer}>
          <div className={NewStyles.TextContainer}>
            <h1 className={NewStyles.headingText}> Smart Interiors & Works </h1>
            <hr className={NewStyles.line}/>
            <p className={NewStyles.paraText}> We Will Your Dream House right from Scratch to Finish</p>
          </div>
        </div>
        <div className={NewStyles.eachInnerContainer}>
          <div className={NewStyles.TextContainer}>
            <h1 className={NewStyles.headingText}> Project Estimations  </h1>
            <hr className={NewStyles.line}/>
            <p className={NewStyles.paraText}> We Will Your Dream House right from Scratch to Finish</p>
          </div>
        </div>
        <div className={NewStyles.eachInnerContainer}>
          <div className={NewStyles.TextContainer}>
            <h1 className={NewStyles.headingText}> Home Loan Guidance  </h1>
            <hr className={NewStyles.line}/>
            <p className={NewStyles.paraText}> We Will Guide you to get your House Loan. We collaborated with various home loan companies which offer you the best.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NewServices