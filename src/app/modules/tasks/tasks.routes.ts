import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { TaskValidation } from './tasks.validation'
import { TaskController } from './tasks.controller'

const router = express.Router()

router.post(
  '/add-books',
  RequestValidation.ValidateRequest(TaskValidation.createZodSchema),
  TaskController.addNewTask,
)
router.get('/:id', TaskController.getSingleTask)
router.patch(
  '/:id',
  RequestValidation.ValidateRequest(TaskValidation.updateZodSchema),
  TaskController.updateTask,
)
router.get('/', TaskController.getAllTasks)
router.delete('/:id', TaskController.deleteTask)

export const TaskRoutes = {
  router,
}
