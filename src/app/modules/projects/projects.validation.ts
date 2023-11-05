import { z } from 'zod'

const createZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    employee: z.string({
      required_error: 'Employee is required',
    }),
  }),
})
const updateZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
  }),
})
export const ProjectValidation = {
  createZodSchema,
  updateZodSchema,
}
