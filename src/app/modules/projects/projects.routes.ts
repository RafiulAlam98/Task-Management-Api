import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { ProjectController } from './projects.controller'
import { ProjectValidation } from './projects.validation'

const router = express.Router()

router.post(
  '/',
  RequestValidation.ValidateRequest(ProjectValidation.updateZodSchema),
  ProjectController.addProject,
)
router.get('/:id', ProjectController.getSingleProject)
router.patch(
  '/:id',
  RequestValidation.ValidateRequest(ProjectValidation.updateZodSchema),
  ProjectController.updateProject,
)
router.get('/', ProjectController.getAllProjects)
router.delete('/:id', ProjectController.deleteProject)

export const ProjectsRoutes = {
  router,
}
