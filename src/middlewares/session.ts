import { Express } from "express"
import session from "express-session"
import MongoStore from "connect-mongo"

const sessionSecret = process.env.SESSION_SECRET || "foo"

const sessionObject = session({
    secret: sessionSecret,
    store: MongoStore.create({
        mongoUrl: process.env.DB_URI,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.ENVIRONMENT === "production",
        httpOnly: true, // use this if you don't want the client javascript access the cookies
        maxAge: 1000 * 60 * 24 * 30
    }
})

export const sessionInitializer = (app: Express) => {
    app.use(sessionObject)
}