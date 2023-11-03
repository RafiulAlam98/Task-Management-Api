import { IUser } from './user.interface'
import { User } from './user.model'

const createUserService = async (user: IUser): Promise<IUser | null> => {
  const newUser = User.create(user)
  return newUser
}

export const UserService = {
  createUserService,
}
