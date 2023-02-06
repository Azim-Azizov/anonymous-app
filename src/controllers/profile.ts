import { Request, Response } from "express"
import { getProfile, replaceProfile, updateProfile } from "../services/Profile"

export const getProfileController = async (req: Request, res: Response) => {
  const profile = await getProfile(req.user!._id)
  res.json({ method: req.method, path: req.path, profile: profile })
}

export const putProfileController = async (req: Request, res: Response) => {
  const profile = await replaceProfile(req.user!._id, req.body)
  res.json({ method: req.method, path: req.path, profile: profile })
}

export const patchProfileController = async (req: Request, res: Response) => {
  const profile = await updateProfile(req.user!._id, req.body)
  res.json({ method: req.method, path: req.path, profile: profile })
}