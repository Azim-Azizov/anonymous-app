import { Request, Response } from "express"
import { loginGoogle, authenticateGoogle } from "../services/Auth.ts"

export const getGoogleController = async (req: Request, res: Response) => {
    await loginGoogle(req, res)
}

export const getGoogleResponseController = async (req: Request, res: Response) => {
    await authenticateGoogle(req, res)
}
