import React from 'react'
import contactStyles from '../styles/ContactSection.module.css'

function FormSection() {
  return (
    <form className={contactStyles.formContainer}>
        <h1> Get in Touch </h1>
        <div className={contactStyles.formValues}>
             <input type='text' placeholder='Enter your name'  className={contactStyles.inputElement}/>
            <input type='email' placeholder='Enter your Email' className={contactStyles.inputElement} />
            <input type='number' placeholder='Enter your Phone Number' className={contactStyles.inputElement} />
    </div>
        <button type='button' className={contactStyles.submitBtn} > Submit </button>
    </form>
  )
}

export default FormSection
