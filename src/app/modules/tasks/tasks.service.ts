import { bookSearchableFields } from './books.constant'
import httpStatus from 'http-status'
import ApiError from '../../errors/ApiError'
import { IBookFilters, ITasks } from './tasks.interface'
import { Tasks } from './tasks.model'

const addNewTask = async (payload: ITasks): Promise<ITasks | null> => {
  const result = await Tasks.create(payload)
  return result
}
const getAllTask = async (filters: IBookFilters): Promise<ITasks[]> => {
  const { searchTerm, ...filtersData } = filters
  const andCondition = []
  if (searchTerm) {
    andCondition.push({
      $or: bookSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }
  if (Object.keys(filtersData).length) {
    andCondition.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }
  const whereConditions = andCondition.length > 0 ? { $and: andCondition } : {}
  const result = await Tasks.find(whereConditions)
  return result
}
const getSingleTask = async (payload: string): Promise<ITasks | null> => {
  const result = await Tasks.findOne({ _id: payload }).populate('reviews')
  return result
}
const updateTask = async (
  id: string,
  payload: Partial<ITasks>,
): Promise<ITasks | null> => {
  const filter = { _id: id }
  const result = await Tasks.findOneAndUpdate(filter, payload, {
    new: true,
  })
  return result
}

const deleteTask = async (id: string) => {
  const isExist = await Tasks.findById(id)

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found !')
  }
  const book = await Tasks.findOneAndDelete({ _id: id })
  if (!book) {
    throw new ApiError(404, 'Failed to delete book')
  }
  return book
}

export const BookService = {
  addNewTask,
  getAllTask,
  getSingleTask,
  updateTask,
  deleteTask,
}
