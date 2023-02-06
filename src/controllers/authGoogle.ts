import { Request, Response } from "express"
import { loginGoogle, authenticateGoogle } from "../services/Auth"

export const getGoogleController = async (req: Request, res: Response) => {
    await loginGoogle(req, res, "google")
}

export const getGoogleResponseController = async (req: Request, res: Response) => {
    await authenticateGoogle(req, res, "google")
}