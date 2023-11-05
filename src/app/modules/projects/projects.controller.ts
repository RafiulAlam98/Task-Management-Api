import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'

import { ProjectService } from './projects.service'
import { IProjects } from './projects.interface'

const addProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.addProject(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project added successfully',
    data: result,
  })
})
const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.getAllProjects()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Projects retrieved successfully',
    data: result,
  })
})
const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ProjectService.getSingleProject(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Project retrieved successfully',
    data: result,
  })
})
const updateProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const result = await ProjectService.updateProject(id, req.body)
  sendResponse<IProjects>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project updated successfully',
    data: result,
  })
})

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ProjectService.deleteProject(id)
  sendResponse<IProjects>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  })
})

export const ProjectController = {
  addProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
}
