import httpStatus from 'http-status'
import ApiError from '../../errors/ApiError'
import { IProjects } from './projects.interface'
import { Projects } from './projects.model'

const addProject = async (payload: IProjects): Promise<IProjects | null> => {
  const result = await Projects.create(payload)
  return result
}
const getAllProjects = async () => {
  const result = await Projects.find()
  return result
}
const getSingleProject = async (payload: string): Promise<IProjects | null> => {
  const result = await Projects.findOne({ _id: payload })
  return result
}
const updateProject = async (
  id: string,
  payload: Partial<IProjects>,
): Promise<IProjects | null> => {
  const filter = { _id: id }
  const result = await Projects.findOneAndUpdate(filter, payload, {
    new: true,
  })
  return result
}

const deleteProject = async (id: string) => {
  const isExist = await Projects.findById(id)

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Project not found !')
  }
  const task = await Projects.findOneAndDelete({ _id: id })
  if (!task) {
    throw new ApiError(404, 'Failed to delete project')
  }
  return task
}

export const ProjectService = {
  addProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
}
