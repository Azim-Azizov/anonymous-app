import eah from "express-async-handler";
import { Router } from "express"
import { postPostsController } from "../controllers/posts";
import { putPostController, patchPostController, deletePostController, patchPostLikeController } from "../controllers/post";

const router = Router()

router
  .route("/posts")
  .post(eah(postPostsController))

router
  .route("/posts/:postId")
  .put(eah(putPostController))
  .patch(eah(patchPostController))
  .delete(eah(deletePostController))

router
  .route("/posts/like/:postId")
  .patch(eah(patchPostLikeController))

export { router }