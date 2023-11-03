import express from 'express'
import { UserController } from './user.controller'
import { RequestValidation } from '../../middlewares/validateRequest'
import { UserValidation } from './user.validation'

const router = express.Router()

router.post(
  '/signup',
  RequestValidation.ValidateRequest(UserValidation.createZodSchema),
  UserController.createUser,
)

export const UserRoutes = {
  router,
}
