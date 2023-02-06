import eah from "express-async-handler";
import { Router } from "express"
import { getPostsController } from "../controllers/posts";
import { getPostController } from "../controllers/post";

const router = Router()

router
  .route("/posts")
  .get(eah(getPostsController))

router
  .route("/posts/:postId")
  .get(eah(getPostController))

export { router }