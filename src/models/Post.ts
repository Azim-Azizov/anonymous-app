import { model } from "mongoose"
import { postSchema } from "../schemas/Post"

export const Post = model("Post", postSchema)