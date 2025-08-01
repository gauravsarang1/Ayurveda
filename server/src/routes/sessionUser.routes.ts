// routes/sessionUserRoutes.ts
import express from "express";
import {
  getOrCreateSessionUser,
  getSessionUserById,
  deleteSessionUser
} from "../controllers/sessionUser.controllers";

const router = express.Router();

router.get("/", getOrCreateSessionUser);
router.get("/:id", getSessionUserById);
router.delete("/:id", deleteSessionUser);

export default router;
