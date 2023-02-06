import { likeSchema } from "../schemas/Like";
import { model } from "mongoose";

export const Like = model("Like", likeSchema)