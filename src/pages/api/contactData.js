// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer'
import { mailOptions, transporter } from './transporter'

export default async function handler(req, res) {

   // const {name , email, number} = req.body

   // console.log(req.body)

   if  (req.method === "POST") {
      const data = req.body

      console.log(data)
   

   try {
    
      await transporter.sendMail({
        ...mailOptions ,
        subject : "Client Contact Details",
        text : " Hey , We just Got the Client Details Check it Out !",
        html : `<p>  Hey , We just Got the Client Details Check it Out !</p>
                <p> <Strong> ${data.name}</Strong></p>
                <p><strong>${data.email}</strong></p>
                <p> <Strong>${data.number}</Strong></p>`
      })

        return res.status(200).json({message : "successful"})

   } 
      catch (error) {
      return res.status(400).json({message : error.message})
   }
  }

   return  res.status(400).json({message : 'bad request '})
}
