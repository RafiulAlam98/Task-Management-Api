import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'

import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { BookService } from './tasks.service'
import { IBooks } from './tasks.interface'
import pick from '../../../shared/pick'
import { bookFilterableFields } from './books.constant'

const addNewBooks = catchAsync(async (req: Request, res: Response) => {
  const { ...books } = req.body
  const result = await BookService.addNewBookService(books)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Book added successfully',
    data: result,
  })
})
const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields)
  const result = await BookService.getAllBookService(filters)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Books retrieved successfully',
    data: result,
  })
})
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await BookService.getSingleBookService(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Book retrieved successfully',
    data: result,
  })
})
const updateOldBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const title = req.body

  const result = await BookService.updateOldBookService(id, title)
  sendResponse<IBooks>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  })
})

const deleteBooks = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await BookService.deleteBookService(id)
  sendResponse<IBooks>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  })
})

export const BooksController = {
  addNewBooks,
  getAllBooks,
  getSingleBook,
  updateOldBook,
  deleteBooks,
}
