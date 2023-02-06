import eah from "express-async-handler";
import { Router } from "express"
import { getProfileController, putProfileController, patchProfileController, getGoogleLinkController, getGoogleLinkResponseController, getUnlinkController } from "../controllers/profile";

const router = Router()

router
  .route("/profile")
  .get(eah(getProfileController))
  .put(eah(putProfileController))
  .patch(eah(patchProfileController))

router
  .route("/profile/link/google")
  .get(eah(getGoogleLinkController))

  router
  .route("/profile/link/google/response")
  .get(eah(getGoogleLinkResponseController))

  router
  .route("/profile/unlink/:net")
  .get(eah(getUnlinkController))

export { router };