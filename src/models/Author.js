import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        nacionality: {type: String, required: true}
    }, {
        versionKey: false
    }
)

const authors = mongoose.model("author", authorSchema)

export default authors