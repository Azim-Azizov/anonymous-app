import eah from "express-async-handler";
import { Router } from "express"
import { getProfileController, putProfileController, patchProfileController } from "../controllers/profile";

const router = Router()

router
  .route("/profile")
  .get(eah(getProfileController))
  .put(eah(putProfileController))
  .patch(eah(patchProfileController))

export { router };