import { Request, Response } from "express";
import SessionUser from "../models/sessionUser.models";
import ApiError from "../utils/ApiError.utils";
import ApiResponse from "../utils/ApiResponse.utils";
import asyncHandler from "../utils/asyncHandler.utils";

// @desc    Create or retrieve session user
// @route   GET /api/session
export const getOrCreateSessionUser = asyncHandler(async (req: Request, res: Response) => {
  let sessionId = req.session.id;

  let user = await SessionUser.findOne({ sessionId });

  if (!user) {
    user = await SessionUser.create({ sessionId });
  } else {
    user.lastSeen = new Date();
    await user.save();
  }

  res.status(200).json(
    new ApiResponse(200, { sessionId: user.sessionId }, "Session user retrieved/created", true)
  );
});

// @desc    Get session user by session ID
// @route   GET /api/session/:id
export const getSessionUserById = asyncHandler(async (req: Request, res: Response) => {
  const sessionId = req.params.id;

  const user = await SessionUser.findOne({ sessionId });

  if (!user) {
    throw new ApiError(404, "Session user not found");
  }

  res.status(200).json(new ApiResponse(200, user, "Session user found", true));
});

// @desc    Delete session user
// @route   DELETE /api/session/:id
export const deleteSessionUser = asyncHandler(async (req: Request, res: Response) => {
  const sessionId = req.params.id;

  const result = await SessionUser.deleteOne({ sessionId });

  if (result.deletedCount === 0) {
    throw new ApiError(404, "Session user not found");
  }

  res.status(200).json(new ApiResponse(200, {}, "Session user deleted", true));
});
