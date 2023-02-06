import { Like } from "../models/Like"
import { Post } from "../models/Post"
import { ObjectId } from "mongoose"

export const getPost = async (postId: string | ObjectId) => {
  return await Post.findOne({ _id: postId })
}

export const replacePost = async (userId: string | ObjectId, postId: string | ObjectId, body: Object) => {
  return await Post.updateOne({ _id: postId }, body)
}

export const updatePost = async (userId: string | ObjectId, postId: string | ObjectId, body: object) => {
  return await Post.updateOne({ _id: postId }, { $set: { body } })
}

export const deletePost = async (userId: string | ObjectId, postId: string | ObjectId) => {
  return await Post.deleteOne({ _id: postId })
}

export const toggleLikePost = async (userId: string | ObjectId, postId: string | ObjectId) => {
  const like = await Like.findOne({ _post: postId, _liker: userId })
  if (like) {
    like.active = !like.active
    await like.save()
    return like.active
  } else {
    await new Like({ _post: postId, _liker: userId }).save()
    return true
  }
}