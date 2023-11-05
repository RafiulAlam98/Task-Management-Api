import { Model } from 'mongoose'

export type IProjects = {
  title: string
  description?: string
  employee?: string
}

export type ProjectsModel = Model<IProjects, Record<string, unknown>>
