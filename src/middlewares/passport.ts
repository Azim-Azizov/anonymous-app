import { Express, Request, Response, NextFunction } from "express"
import passport from "passport"
import { CustomError, UnauthenticatedError } from "./errors"

const passportInitializer = (app: Express) => {
  app.use(passport.initialize())
  app.use(passport.session())
}

const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.isAuthenticated()) throw new UnauthenticatedError()
    next()
  } catch (error: CustomError) {
    console.log(error.status, error.message, error.field)
    res.status(error.status).json({ message: error.message })
  }
}

const isNotAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated()) next()
  else res.status(200).json({ message: "Authenticated"})
}

export { passport, passportInitializer, isAuthenticated, isNotAuthenticated }
