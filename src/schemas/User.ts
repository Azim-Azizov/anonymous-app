import { Schema } from "mongoose"
import passportLocalMongoose from "passport-local-mongoose"
import { Like } from "../models/Like"
import findOrCreate from "mongoose-findorcreate"

const userSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    regdate: {
        type: Date,
        required: true,
        default: Date.now
    },
    password: {
        type: String,
    },
    googleId: {
        type: String,
        sparse: true,
        unique: true,
    },
    facebookId: {
        type: String,
        sparse: true,
        unique: true,
    },
    posts: {
        type: [Schema.Types.ObjectId],
        ref: "Post"
    }
})

userSchema.post("deleteOne", { document: false, query: true }, async (doc) => {
    await Like.deleteMany({ _liker: doc._id })
  })

userSchema.plugin(passportLocalMongoose, { usernameField: "email", usernameLowerCase: true })
userSchema.plugin(findOrCreate)

export { userSchema }