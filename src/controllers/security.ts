import { Request, Response } from "express"
import { setPassword, resetPassword } from "../services/Security"

export const getSetPasswordController = async (req: Request, res: Response) => {
  res.json({ method: req.method, path: req.path })
}

export const postSetPasswordController = async (req: Request, res: Response) => {
  await setPassword(req, res)
}

export const getResetPasswordController = async (req: Request, res: Response) => {
  res.json({ method: req.method, path: req.path })
}

export const postResetPasswordController = async (req: Request, res: Response) => {
  await resetPassword(req, res)
}