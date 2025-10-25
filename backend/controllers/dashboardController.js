import { dashboardWidgets } from "../utils/dashboardWidgets.js";

export const getDashboardWidgets = async (req, res) => {
  try {
    res.json(dashboardWidgets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching dashboard widgets" });
  }
};