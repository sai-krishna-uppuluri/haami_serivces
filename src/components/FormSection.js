import React, { useState } from 'react'
import contactStyles from '../styles/ContactSection.module.css'

function FormSection() {

   const [name, setName] = useState('')

   const [email , setEmail] = useState()

   const [number , setNumber] = useState()

  
   const onChangeName = (event) => {
    setName(event.target.value)
   }

   const onChangeEmail = (event) => {
    setEmail(event.target.value)
   }

   const onChangeNumber = (event) => {
    setNumber(event.target.value)
   }
   
   const onSubmitContactForm = async (event) => {
      event.preventDefault();

      // const {name, email , number} = this.state
      alert("You Have Successfully Submitted. We will reach You Soon. Thankyou!")

      const url = "/api/contactData"

      const payData = {
        name,
        email,
        number
      }


      const options = {
        method : "POST" , 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payData),
      }

      const response  = await fetch(url , options)

      const data = await response.json()

      // console.log(data)

      setName("")
      setEmail("")
      setNumber("")

   }



  return (
    <form className={contactStyles.formContainer} onSubmit={onSubmitContactForm}>
        <h1 className={contactStyles.formHead}> Get in Touch </h1>
        <div className={contactStyles.formValues}>
             <input type='text' placeholder='Enter your name' value={name}  className={contactStyles.inputElement} onChange={onChangeName}/>
            <input type='email' placeholder='Enter your Email' value={email} className={contactStyles.inputElement} onChange={onChangeEmail} />
            <input type='number' placeholder='Enter your Phone Number' value={number} className={contactStyles.inputElement} onChange={onChangeNumber}/>
        </div>
        <button type='submit' className={contactStyles.submitBtn} > Submit </button>
    </form>
  )
}

export default FormSection
