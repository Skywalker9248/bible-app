import express from "express";
import { getDashboardWidgets } from "../controllers/dashboardController.js";

const router = express.Router();

// GET /api/dashboard/widgets
router.get("/widgets", getDashboardWidgets);

export default router;