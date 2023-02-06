import { Schema } from "mongoose"

export const likeSchema = new Schema({
  _liker: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  _post: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Post"
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
})