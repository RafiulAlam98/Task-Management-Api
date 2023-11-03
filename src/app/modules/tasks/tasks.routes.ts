import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { TaskValidation } from './tasks.validation'
import { TaskController } from './tasks.controller'

const router = express.Router()

router.post(
  '/add-books',
  RequestValidation.ValidateRequest(TaskValidation.createZodSchema),
  TaskController.addNewBooks,
)
router.get('/:id', TaskController.getSingleBook)
router.patch(
  '/:id',
  RequestValidation.ValidateRequest(TaskValidation.updateZodSchema),
  TaskController.updateOldBook,
)
router.get('/', TaskController.getAllBooks)
router.delete('/:id', TaskController.deleteBooks)

export const TaskRoutes = {
  router,
}
