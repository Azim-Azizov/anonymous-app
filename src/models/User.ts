import { model } from "mongoose"
import { passport } from "../middlewares/passport"
import { userSchema } from "../schemas/User"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"

const User = model("User", userSchema)

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use("google", new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "https://anonymous.svdev.me/api/auth/google/response"
},
  async (accessToken: string, refreshToken: string, profile: object, cb: Function) => {
    console.log("google", profile)
    try {
      const user = await User.findOrCreate({ email: profile.emails[0].value, googleId: profile.id })
      return cb(null, user);
    } catch (err) {
      return cb(err, null)
    }
  }
))

passport.use("google-link", new GoogleStrategy({
  clientID: process.env.GOOGLE_LINK_CLIENT_ID,
  clientSecret: process.env.GOOGLE_LINK_CLIENT_SECRET,
  callbackURL: "https://anonymous.svdev.me/api/profile/link/google/response"
},
  async (accessToken: string, refreshToken: string, profile: object, cb: Function) => {
    console.log("google-link", profile)
    return cb(null, user)
  }
))

export { passport, User }
