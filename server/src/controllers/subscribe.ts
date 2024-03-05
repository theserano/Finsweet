import nodemailer from "nodemailer";
import {google} from "googleapis";
import dotenv from "dotenv";

dotenv.config();


const clientID=process.env.clientID;
const clientSecret=process.env.clientSecret;
const redirectURI=process.env.redirectURI;
const refreshToken=process.env.GMAIL_REFRESH_TOKENS;

const oAuth2Client = new google.auth.OAuth2(clientID, clientSecret, redirectURI);
oAuth2Client.setCredentials({refresh_token: refreshToken})

console.log("kabhjkdbahjba:", refreshToken)


export const sendEmail = async (email: string) => {
    try {

        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: process.env.gmail,
            host: process.env.host as string,
            port: process.env.email_port as unknown as number,
            secure: false,
            auth: {
                type: "OAuth2",
                clientId: clientID,
                clientSecret: clientSecret,
                refreshToken: refreshToken,
                accessToken: accessToken,
                user: process.env.email as string,
                pass: process.env.password as string
            }
        } as nodemailer.TransportOptions)

        const mailOptions = {
            from: "Finsweet(Save the environment)🎖️",
            to: email,
            subject: "New subscriber alert!!😁",
            text: "Thank you for subscribing to finsweet platform, we are in this together",
            html: "<>Thank you for subscribing to finsweet platform, we are in this together</>"
        }

        const info = await transporter.sendMail(mailOptions);

        return info;
    } catch (error) {
        console.log(error);
    }

}