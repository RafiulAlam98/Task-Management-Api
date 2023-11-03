import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import pick from '../../../shared/pick'
import { taskFilterableFields } from './tasks.constant'
import { TaskService } from './tasks.service'
import { ITasks } from './tasks.interface'

const addNewTask = catchAsync(async (req: Request, res: Response) => {
  const result = await TaskService.addNewTask(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task added successfully',
    data: result,
  })
})
const getAllTasks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, taskFilterableFields)
  const result = await TaskService.getAllTasks(filters)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Tasks retrieved successfully',
    data: result,
  })
})
const getSingleTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TaskService.getSingleTask(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Task retrieved successfully',
    data: result,
  })
})
const updateTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const result = await TaskService.updateTask(id, req.body)
  sendResponse<ITasks>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task updated successfully',
    data: result,
  })
})

const deleteTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TaskService.deleteTask(id)
  sendResponse<ITasks>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task deleted successfully',
    data: result,
  })
})

export const TaskController = {
  addNewTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
}
