import express from 'express'
import { UserRoutes } from '../modules/user/user.routes'
import { AuthRoutes } from '../modules/auth/auth.routes'
import { TaskRoutes } from '../modules/tasks/tasks.routes'
import { ProjectsRoutes } from '../modules/projects/projects.routes'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/user/',
    route: UserRoutes.router,
  },
  {
    path: '/auth/',
    route: AuthRoutes.router,
  },
  {
    path: '/task/',
    route: TaskRoutes.router,
  },
  {
    path: '/projects/',
    route: ProjectsRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
