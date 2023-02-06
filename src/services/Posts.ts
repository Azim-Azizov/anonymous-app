import { User } from "../models/User"
import { Post } from "../models/Post"
import { ObjectId } from "mongoose"

export const getPosts = async () => {
  const feed = await Post.find()
  return feed
}

export const postPosts = async (userId: string | ObjectId, title: string) => {
  const post = new Post({_creator: userId, title})
  await User.updateOne({_id: userId}, {$push: {posts: post._id}})
  return await post.save()
}