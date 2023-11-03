import { Model } from 'mongoose'

export type ITasks = {
  title: string
  duration?: string
  project?: string
  taskDate: string
  description?: string
  priority?: 'none' | '1st Priority' | '2nd Priority' | '3rd Priority'
  status?: boolean
}

export type IBookFilters = { searchTerm?: string }

export type TaskModel = Model<ITasks, Record<string, unknown>>
