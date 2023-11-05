import { Schema, model } from 'mongoose'
import { IProjects, ProjectsModel } from './projects.interface'

const ProjectSchema = new Schema<IProjects>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
    },
    employee: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Projects = model<IProjects, ProjectsModel>('projects', ProjectSchema)
