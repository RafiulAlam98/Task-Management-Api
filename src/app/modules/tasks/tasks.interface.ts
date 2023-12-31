import { Model } from 'mongoose'

export type ITasks = {
  title: string
  duration?: string
  project?: string
  taskDate: string
  description?: string
  priority?: 'none' | '1st Priority' | '2nd Priority' | '3rd Priority'
  status?: 'complete' | 'incomplete'
  employee: string
}

export type ITaskFilters = { searchTerm?: string }

export type TaskModel = Model<ITasks, Record<string, unknown>>
