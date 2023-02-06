import { Request, Response } from "express"
import { passport, User } from "../models/User"
import { CustomError, MissingFieldError, IncorrectFieldError, UserExistsError, InternalServerError } from "../middlewares/errors"

export const login = async (req: Request, res: Response) => {

  try {

    const { email, password } = req.body

    console.log(email, password)

    if ((email === undefined || email === null || email.trim()) && (password === undefined || password === null || password.trim() === "")) throw new MissingFieldError("{email and password}")

    else if (email === undefined || email === null || email.trim() === "") throw new MissingFieldError("{email}")

    else if (password === undefined || password === null || password.trim() === "") throw new MissingFieldError("{password}")

    await passport.authenticate("local", (info, user, err) => {
      try {
        if (err) {
          switch (err.name) {
            case "MissingUsernameError":
              throw new MissingFieldError("{email}")
            case "IncorrectUsernameError":
              throw new IncorrectFieldError("{email}")
            case "MissingPasswordError":
              throw new MissingFieldError("{password}")
            case "IncorrectPasswordError":
              throw new IncorrectFieldError("{password}")
            default:
              throw new InternalServerError(`{${err.name} : ${err.message}}`)
          }
        } else if (!user) throw new InternalServerError("Internal")
        else {
          req.login(user, (err) => {
            if (err) throw new InternalServerError(`{${err.name} : ${err.message}}`)
            else res.status(200).json({ message: "Success" })
          })
        }
      } catch (error: CustomError) {
        console.log(error.status, error.message, error.field)
        res.status(error.status).json({ message: error.message })
      }
    })(req, res)
  } catch (error: CustomError) {
    console.log(error.status, error.message, error.field)
    res.status(error.status).json({ message: error.message })
  }
}

export const register = async (req: Request, res: Response) => {

  try {

    const { email, password } = req.body

    if ((email === undefined || email === null || email.trim()) && (password === undefined || password === null || password.trim() === "")) throw new MissingFieldError("{email and password}")

    else if (email === undefined || email === null || email.trim() === "") throw new MissingFieldError("{email}")

    else if (password === undefined || password === null || password.trim() === "") throw new MissingFieldError("{password}")

    User.register(new User({ email }), password, async (err) => {
      try {
        if (err) {
          switch (err.name) {
            case "MissingUsernameError":
              throw new MissingFieldError("{email}")
            case "MissingPasswordError":
              throw new MissingFieldError("{password}")
            case "UserExistsError":
              throw new UserExistsError()
            default:
              throw new InternalServerError(`{${err.name} : ${err.message}}`)
          }
        }
      } catch (error: CustomError) {
        console.log(error.status, error.message, error.field)
        res.status(error.status).json({ message: error.message })
      }
      await passport.authenticate("local")(req, res, () => {
        res.status(200).json({ message: "Success" })
      })
    })
  } catch (error: CustomError) {
    console.log(error.status, error.message, error.field)
    res.status(error.status).json({ message: error.message })
  }
}

export const loginGoogle = async (req: Request, res: Response, strategy: string) => {
  console.log(strategy)
  await passport.authenticate(strategy, { scope: ["openid", "profile", "email"] })(req, res)
}

export const authenticateGoogle = async (req: Request, res: Response, strategy: string) => {
  await passport.authenticate(strategy, (err, user, info) => {
    try {
      console.log(err, user, info)
      if (err) throw new InternalServerError(`{${err.name} : ${err.message}}`)
      else res.status(200).json({ message: "Success"})
    } catch (error: CustomError) {
      console.log(error.status, error.message, error.field)
      res.status(error.status).json({ message: error.message })
    }
  })(req, res)
}

export const logout = async (req: Request, res: Response) => {
  req.logout(() => {
    res.redirect("/auth/login")
  })
}
