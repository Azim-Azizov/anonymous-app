import express from "express"
import morgan from "morgan"

const app = express()
app.use(morgan('dev'))

import { expressinitializer } from "../middlewares/express"

expressinitializer(app)

import { sessionInitializer } from "../middlewares/session"

sessionInitializer(app)

import { passportInitializer } from "../middlewares/passport"

passportInitializer(app)

export { app }