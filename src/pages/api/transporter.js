
import nodemailer from 'nodemailer'

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS


export const transporter = nodemailer.createTransport({
    service : "Gmail",
    auth : {
        user : email,
        pass
    }
})


export const mailOptions =  {
    from : email,
    to : 'u.sai.chowdary@gmail.com'
}   