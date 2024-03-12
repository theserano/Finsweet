import express, {Request, Response} from "express";
import Contact from "../model/contact";
import { sendContactEmail } from "../controllers/subscribe";

const router = express.Router();

router.post("/reach-out", async (req: Request, res: Response) => {
    try {
        const { email, message} = req.body;

        if(!email){
            res.status(400).json({message: "No email"})
        }
        if(!message){
            res.status(400).json({message: "No message"})
        }

        // const contact = new Contact(req.body);
        // contact.save();

        const messageResponse = await sendContactEmail(email);
        console.log(messageResponse);

        return res.status(200).json({message: "Subscribed"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "error occurred"})
    }

})

export default router;