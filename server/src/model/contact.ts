import mongoose from "mongoose";


export interface contactSchemaType {
    firstName: string,
    lastName: string,
    email: string,
    subject: string,
    message: string,
}


const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const Contact = mongoose.model<contactSchemaType>('Contact', contactSchema);

export default Contact;