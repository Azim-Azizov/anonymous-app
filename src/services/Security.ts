import { json, Request, Response } from "express"
import { User } from "../models/User"
import { CustomError, MissingFieldError, IncorrectFieldError, SamePasswordError, InternalServerError } from "../middlewares/errors"


export const setPassword = async (req: Request, res: Response) => {
  try {
    const { password } = req.body
    if (password === undefined) throw new MissingFieldError("{password}")

    const user = await User.findByUsername(req.user!.email, true)

    if (!user) throw new IncorrectFieldError("{email}")

    await user.setPassword(password).catch((err: any) => {
      if (err) {
        switch (err.name) {
          case "MissingPasswordError":
            throw new MissingFieldError("{password}")
          case "IncorrectPasswordError":
            throw new IncorrectFieldError("{password}")
          default:
            throw new InternalServerError(`{${err.name} : ${err.message}}`)
        }
      }
    })
    await user.save()
    res.status(200).json({ message: "Success" })
  } catch (error: CustomError) {
    console.log(error.status, error.message)
    res.status(error.status).json({ message: error.message })
  }
}

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { oldpassword, newpassword } = req.body

    if ((oldpassword === undefined || oldpassword === null || oldpassword.trim()) && (newpassword === undefined || newpassword === null || newpassword.trim() === "")) throw new MissingFieldError("{old and new password}")

    else if (oldpassword === undefined || oldpassword === null || oldpassword.trim() === "") throw new MissingFieldError("{old password}")

    else if (newpassword === undefined || newpassword === null || newpassword.trim() === "") throw new MissingFieldError("{new password}")

    const user = await User.findByUsername(req.user!.email, true)

    if (!user) throw new IncorrectFieldError("{email}")

    await user.changePassword(oldpassword, newpassword).catch((err: any) => {
      if (err) {
        switch (err.name) {
          case "MissingPasswordError":
            throw new MissingFieldError("{password(s)}")
          case "IncorrectPasswordError":
            throw new IncorrectFieldError("{password}")
          default:
            throw new InternalServerError(`{${err.name} : ${err.message}}`)
        }
      }
    })

    if (oldpassword == newpassword) throw new SamePasswordError()
    await user.save()

    res.status(200).json({ message: "Success" })
  } catch (error: CustomError) {
    console.log(error.status, error.message, error.field)
    res.status(error.status).json({ message: error.message })
  }
}