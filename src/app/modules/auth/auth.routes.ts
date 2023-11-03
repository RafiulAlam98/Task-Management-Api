import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { AuthValidation } from './auth.validation'
import { AuthValidationController } from './auth.controller'

const router = express.Router()

router.post(
  '/login',
  RequestValidation.ValidateRequest(AuthValidation.loginZodSchema),
  AuthValidationController.loginUser,
)
router.put(
  '/refresh-token',
  RequestValidation.ValidateRequest(AuthValidation.loginZodSchema),
  AuthValidationController.refreshTokenController,
)
export const AuthRoutes = {
  router,
}
