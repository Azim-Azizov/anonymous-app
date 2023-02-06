import { Like } from "../models/Like"
import { Schema } from "mongoose"

const postSchema: Schema = new Schema({
  _creator: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  title: {
    type: String,
    required: true
  },
  postDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

postSchema.post("deleteOne", { document: false, query: true }, async (doc) => {
  await Like.deleteMany({ _post: doc._id })
})

export { postSchema }