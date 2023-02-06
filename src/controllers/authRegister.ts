import { Request, Response } from "express";
import { register } from "../services/Auth"

export const getRegisterController = async (req: Request, res: Response) => {
    res.json({ method: req.method, path: req.path })
}

export const postRegisterController = async (req: Request, res: Response) => {
    register(req, res)
}