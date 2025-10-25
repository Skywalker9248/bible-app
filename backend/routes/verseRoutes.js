import express from "express";
import { getVerse } from "../controllers/verseController.js";

const router = express.Router();

// GET /api/verses/:reference
router.get("/:reference", getVerse);

export default router;
