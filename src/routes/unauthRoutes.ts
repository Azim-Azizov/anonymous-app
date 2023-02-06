import { router as AuthRouter } from "./auth"
import { router as FeedRouter } from "./posts"
import { SecureRouter } from "./authRoutes"
import { Router } from "express"

const router = Router()

router.use(FeedRouter)
router.use(AuthRouter)

export { router as UnauthRouter }