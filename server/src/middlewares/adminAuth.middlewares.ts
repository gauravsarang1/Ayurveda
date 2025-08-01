import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.utils";
import asyncHandler from "../utils/asyncHandler.utils";
import Admin from "../models/adminUser.models"; // assuming your admin model

interface AuthenticatedRequest extends Request {
  user?: any;
}

const adminAuth = asyncHandler(async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer', '')

  if(!token) {
    throw new ApiError(401, 'AccessToken is not found' )
  }

  try {
    const decoded: any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);

    const adminUser = await Admin.findById(decoded.id).select("-password");

    if (!adminUser) {
      throw new ApiError(401, "Unauthorized: Admin not found");
    }

    req.user = adminUser;
    next();
  } catch (err: any) {
    throw new ApiError(401, "Unauthorized: Invalid token", err.stack);
  }
});

export default adminAuth;
