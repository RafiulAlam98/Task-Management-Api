import { IRefreshTokenResponse, IUserLogin } from './auth.interface'

import { User } from '../user/user.model'
import httpStatus from 'http-status'
import ApiError from '../../errors/ApiError'
import { jwtHelpers } from '../../../helpers/jwtHelpers'
import config from '../../../config'
import jwt, { Secret } from 'jsonwebtoken'

const loginUser = async (payload: IUserLogin) => {
  const { email: emailId, password } = payload

  // check user exist
  const isUserExists = await User.isUserExists(emailId)

  if (!isUserExists) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User does not exist')
  }

  //matched password
  if (
    isUserExists?.password &&
    !(await User.isPasswordMatched(password, isUserExists?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }

  const { email } = isUserExists

  // create access token
  const accessToken = jwt.sign(
    {
      email: isUserExists.email,
    },
    config.jwt.secret as Secret,
    {
      expiresIn: config.jwt.secret_expire_in,
    },
  )

  const refreshToken = jwtHelpers.createToken(
    { email },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_secret_expire_in as string,
  )

  return {
    accessToken,
    refreshToken,
    emailId,
  }
}

const refreshTokenService = async (
  token: string,
): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret,
    )
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token')
  }

  const { email } = verifiedToken
  const isUserExists = await User.isUserExists(email)
  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
  }
  const newAccessToken = jwtHelpers.createToken(
    {
      email: isUserExists.email,
    },
    config.jwt.secret as Secret,
    config.jwt.secret_expire_in as string,
  )
  return {
    accessToken: newAccessToken,
  }
}

export const AuthValidationService = {
  loginUser,
  refreshTokenService,
}
