import { Request, Response } from "express"
import { login } from "../services/Auth"

export const getLoginController = async (req: Request, res: Response) => {
    res.json({ method: req.method, path: req.path })
}

export const postLoginController = async (req: Request, res: Response) => {
    login(req, res)
}