import { ObjectId } from "mongoose"
import { User } from "../models/User"

export const getProfile = async (userId: string | ObjectId) => {
  return await User.findOne({ _id: userId }).populate("posts")
}

export const replaceProfile = async (userId: string | ObjectId, body: Object) => {
  return await User.updateOne({ _id: userId }, body)
}

export const updateProfile = async (userId: string | ObjectId, body: object) => {
  return await User.updateOne({ _id: userId }, { $set: { body } })
}

export const unlinkNet = async (userId: string | ObjectId, net: string) => {
  const user = User.findOne({ _id: userId })
  if (user[net] === undefined) return false
  else {
    user[net] = undefined
    user.save()
    return true
  }
}