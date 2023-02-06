import { getLoginController, postLoginController } from "../controllers/authLogin"
import { getRegisterController, postRegisterController } from "../controllers/authRegister"
import { getLogoutController } from "../controllers/authLogout"
import { getGoogleController, getGoogleResponseController } from "../controllers/authGoogle"
import { getFacebookController, getFacebookResponseController } from "../controllers/authFacebook"

import eah from "express-async-handler"
import { Router } from "express"
import { isNotAuthenticated } from "../middlewares/passport"

const router = Router()

router
  .route("/auth/logout")
  .get(eah(getLogoutController))

// router.use(isNotAuthenticated)

router
  .route("/auth/login")
  .get(eah(getLoginController))
  .post(eah(postLoginController))

router
  .route("/auth/register")
  .get(eah(getRegisterController))
  .post(eah(postRegisterController))

router
  .route("/auth/google")
  .get(eah(getGoogleController))

router
  .route("/auth/google/response")
  .get(eah(getGoogleResponseController))

router
  .route("/auth/facebook")
  .get(eah(getFacebookController))

router
  .route("/auth/facebook/response")
  .get(eah(getFacebookResponseController))

export { router }