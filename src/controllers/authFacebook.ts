import { Request, Response } from "express"

export const getFacebookController = async (req: Request, res: Response) => {
    res.json({method: req.method, path: req.path})
}

export const getFacebookResponseController = async (req: Request, res: Response) => {
    res.json({method: req.method, path: req.path})
}
