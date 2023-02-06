import { Request, Response } from "express"
import { getProfile, replaceProfile, updateProfile } from "../services/Profile"
import { loginGoogle, authenticateGoogle } from "../services/Auth"
import { unlinkNet } from "../services/Profile"

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

export const getGoogleLinkController = async (req: Request, res: Response) => {
  await loginGoogle(req, res, "google-link")
}

export const getGoogleLinkResponseController = async (req: Request, res: Response) => {
  await authenticateGoogle(req, res, "google-link")
}

export const getUnlinkController = async (req: Request, res: Response) => {
  console.log(req.user)
  if ((req.params.net == "google") || (req.params.net == "facebook")) {
    if (await unlinkNet(req.user!._id, req.params.net + "Id")) res.status(200).json({ message: "Success"})
    else res.status(400).json({ message: "Account is not linked"})
  } else res.status(400).json({ message: "Invalid request parameter"})
}
