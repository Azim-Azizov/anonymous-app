import eah from "express-async-handler";
import { Router } from "express"
import { getSetPasswordController, postSetPasswordController, getResetPasswordController, postResetPasswordController } from "../controllers/security"

const router = Router()

router
  .route("/setpassword")
  .get(eah(getSetPasswordController))
  .post(eah(postSetPasswordController))

  router
  .route("/resetpassword")
  .get(eah(getResetPasswordController))
  .post(eah(postResetPasswordController))

  export { router };