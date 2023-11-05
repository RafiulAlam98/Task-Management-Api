import { z } from 'zod'

const createZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    duration: z.string({
      required_error: 'Duration is required',
    }),
    project: z.string({
      required_error: 'Project is required',
    }),

    taskDate: z.string({
      required_error: 'Date is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    priority: z.string({
      required_error: 'Priority is required',
    }),
    status: z.string({
      required_error: 'Status is required',
    }),
  }),
})
const updateZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    duration: z.string({
      required_error: 'Duration is required',
    }),
    project: z.string({
      required_error: 'Project is required',
    }),

    taskDate: z.string({
      required_error: 'Date is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    priority: z.string({
      required_error: 'Priority is required',
    }),
    status: z.string({
      required_error: 'Status is required',
    }),
    employee: z.string({
      required_error: 'Employee is required',
    }),
  }),
})
export const TaskValidation = {
  createZodSchema,
  updateZodSchema,
}
