import dotenv from "dotenv"
dotenv.config()

import "./core/db"

import { app } from "./core/app"

const { PORT } = process.env

import { UnauthRouter } from "./routes/unauthRoutes"
import { AuthRouter } from "./routes/authRoutes"

app.use("/api", UnauthRouter, AuthRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})