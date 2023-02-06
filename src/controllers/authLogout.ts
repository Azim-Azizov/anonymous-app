import { Request, Response } from "express"
import { logout } from "../services/Auth"

export const getLogoutController = async (req: Request, res: Response) => {
    logout(req, res)
}