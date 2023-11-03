import { z } from 'zod'

const createZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z.string({
      required_error: 'Password is required',
    }),

    phoneNo: z.string({
      required_error: 'Phone no is required',
    }),
    photo: z.string().optional(),
  }),
})
export const UserValidation = {
  createZodSchema,
}
