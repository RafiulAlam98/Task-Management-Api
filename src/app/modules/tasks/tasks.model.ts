import { Schema, model } from 'mongoose'
import { ITasks, TaskModel } from './tasks.interface'

const TaskSchema = new Schema<ITasks>(
  {
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: false,
    },
    project: {
      type: String,
      required: false,
    },
    taskDate: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    priority: {
      type: String,
      enum: ['none', '1st Priority', '2nd Priority', '3rd Priority'],
      required: false,
    },
    status: {
      type: String,
      enum: ['complete', 'incomplete'],
      required: false,
    },
    employee: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Tasks = model<ITasks, TaskModel>('tasks', TaskSchema)
