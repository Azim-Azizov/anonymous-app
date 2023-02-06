import { Router } from "express"
import { router as ProfileRouter } from "./profile"
import { router as SecurityRouter } from "./security"
import { router as PostsRouter } from "./authPosts"
import { isAuthenticated } from "../middlewares/passport"

const router = Router()

router.use(isAuthenticated)

router.use(ProfileRouter)
router.use(SecurityRouter)
router.use(PostsRouter)

export { router as AuthRouter }