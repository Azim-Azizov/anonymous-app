import { Express, urlencoded, json } from "express"

export const expressinitializer = (app: Express) => {
  app.use(urlencoded({ extended: false }))
  app.use(json())
  if (process.env.ENVIRONMENT === "production") {
    app.set("trust proxy", ["loopback", "cdn.svdev.me"]) // add hostnames here 
  }
}