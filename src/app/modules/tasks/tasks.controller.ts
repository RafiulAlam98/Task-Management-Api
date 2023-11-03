import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'

import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'

import pick from '../../../shared/pick'
import { bookFilterableFields } from './books.constant'
import { TaskService } from './tasks.service'
import { ITasks } from './tasks.interface'

const addNewBooks = catchAsync(async (req: Request, res: Response) => {
  const { ...books } = req.body
  const result = await TaskService.addNewTask(books)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task added successfully',
    data: result,
  })
})
const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields)
  const result = await TaskService.getAllTask(filters)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Tasks retrieved successfully',
    data: result,
  })
})
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TaskService.getSingleTask(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Task retrieved successfully',
    data: result,
  })
})
const updateOldBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const title = req.body

  const result = await TaskService.updateTask(id, title)
  sendResponse<ITasks>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task updated successfully',
    data: result,
  })
})

const deleteBooks = catchAsync(async (req: Request, res: Response) => {
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
  addNewBooks,
  getAllBooks,
  getSingleBook,
  updateOldBook,
  deleteBooks,
}
