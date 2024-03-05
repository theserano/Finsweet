import express, {Request, Response} from "express";
import Subscribe from "../model/subscibe";
import { sendEmail } from "../controllers/subscribe";

const router = express.Router();

router.post("/confirm", async (req: Request, res: Response) => {
    try {
        const {email} = req.body;
        const prevEmail = await Subscribe.findOne({email});

        if(!email){
            return res.status(404).json({message: "Email is not found"})
        }
        if(prevEmail){
            return res.status(500).json({message: "Email is already subscribed"})
        }

        const subscribe = new Subscribe(req.body)
        subscribe.save();

       const messageResponse = await sendEmail(email)
        console.log(messageResponse);

        return res.status(200).json({message: "Subscribed"});
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "An error occurred"});
    }
})

export default router;