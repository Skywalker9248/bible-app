import express from "express";
import cors from "cors";
import verseRoutes from "./routes/verseRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Route middleware
app.use("/api/verses", verseRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
