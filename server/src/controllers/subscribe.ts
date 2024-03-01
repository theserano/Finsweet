import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
})

export const sendEmail = async (email: string) => {
    try {
        const info =await transporter.sendMail({
            from: '"Finsweet(Save the environment)" <edwardserano2003@gmail.com>',
            to: email,
            subject: "New subscriber alert!!😁",
            text: "Thank you for subscibing to finsweet platform, we are in this together"
        })

        if(info.response){
            return info.response;
        }
    } catch (error) {
        console.log(error);
    }

}