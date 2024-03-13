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

        const contact = new Contact(req.body);
        contact.save();

        const messageResponse = await sendContactEmail(email);
        console.log(messageResponse);

        return res.status(200).json({message: "Subscribed"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "error occurred"})
    }

})

router.get("/api-key", async (req: Request, res: Response) => {
    try {
        const apiKey = process.env.MAPS_API_KEY;

        if(!apiKey || apiKey === undefined || apiKey === '' || apiKey === null){
            return res.status(404).json({message: "No api key"});
        }

        res.status(200).json({key: apiKey});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Bade api call"});
    }
})

export default router;