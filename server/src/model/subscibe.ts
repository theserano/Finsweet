import mongoose from "mongoose";

export interface subscribeType {
    email: string
}

const subscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const Subscribe = mongoose.model<subscribeType>("Subscribe", subscribeSchema);

export default Subscribe;