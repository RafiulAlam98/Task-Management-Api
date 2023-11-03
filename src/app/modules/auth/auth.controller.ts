import httpStatus from 'http-status'
import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { AuthValidationService } from './auth.service'
import config from '../../../config'
import { IRefreshTokenResponse } from './auth.interface'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body

  const result = await AuthValidationService.loginUser(loginData)
  const { refreshToken, ...others } = result
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  }
  res.cookie('refreshToken', refreshToken, cookieOptions)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Logged in successfully',
    data: others,
  })
})

const refreshTokenController = catchAsync(
  async (req: Request, res: Response) => {
    const { refreshToken } = req.cookies
    const result = await AuthValidationService.refreshTokenService(refreshToken)
    sendResponse<IRefreshTokenResponse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Logged in successfully',
      data: result,
    })
  },
)

export const AuthValidationController = {
  loginUser,
  refreshTokenController,
}
