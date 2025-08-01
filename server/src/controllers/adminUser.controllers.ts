import { Request, Response } from 'express';
import AdminUser from '../models/adminUser.models';
import asyncHandler from '../utils/asyncHandler.utils';
import ApiError from '../utils/ApiError.utils';
import ApiResponse from '../utils/ApiResponse.utils';
import  jwt  from 'jsonwebtoken';

// Utils
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1 * 24 * 60 * 60 * 1000, //1 days
    }

interface generateProps {
    accessToken: string,
    refreshToken: string
}

//generate access and refresh Token
export const generateAccessAndRefreshToken = async (id: string):Promise<generateProps> => {
    try {
        const admin = await AdminUser.findById(id);
        if(!admin) {
            throw new ApiError(404, 'Admin not found with given Id')
        }
        const accessToken = admin.generateAccessToken();
        const refreshToken = admin.generateRefreshToken();

        admin.refreshToken = refreshToken
        admin.save({validateBeforeSave: false})

        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(501, 'Error occured during generating access and refrsh token')
    }
}

// REGISTER (Optional - use once to create initial admin)
export const registerAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    throw new ApiError(400, 'Username and password are required');
  }

  const existingAdmin = await AdminUser.findOne({ username });
  if (existingAdmin) {
    throw new ApiError(409, 'Admin already exists');
  }

  const admin = await AdminUser.create({ username, email, password });

  return res.status(201).json(new ApiResponse(201, admin, 'Admin registered successfully', true));
});

// LOGIN
export const loginAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if(!username || !password ) {
    throw new ApiError(401, 'username and password both required')
  }

  const admin = await AdminUser.findOne({ username });

  if (!admin || !(await admin.isPasswordCorrect(password))) {
    throw new ApiError(401, 'Invalid credentials');
  }

  const {accessToken, refreshToken} = await generateAccessAndRefreshToken(admin.id)

  return res.status(200)
  .cookie('refreshToken', refreshToken, cookieOptions)
  .cookie('accessToken', accessToken, options)
  .json(new ApiResponse(200, { accessToken }, 'Login successful', true));
});

// REFRESH ACCESS TOKEN
export const refreshAccessToken = asyncHandler(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    throw new ApiError(401, 'Refresh token missing');
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!);
    const admin = await AdminUser.findById((decoded as any).id);
    if (!admin) throw new ApiError(401, 'Invalid token');

    const newAccessToken = admin.generateAccessToken();

    return res.status(200)
    .cookie('accessToken', newAccessToken, options)
    .json(new ApiResponse(200, { accessToken: newAccessToken }, 'Access token refreshed', true));
  } catch (error) {
    throw new ApiError(401, 'Invalid refresh token');
  }
});

// LOGOUT
export const logoutAdmin = asyncHandler(async (req: Request, res: Response) => {

  res.clearCookie('refreshToken', cookieOptions);
  res.clearCookie('accessToken', options)
  return res.status(200).json(new ApiResponse(200, {}, 'Logged out successfully', true));
});
