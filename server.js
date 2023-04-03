import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
//configure env
dotenv.config({ path: "./env" });

//databse config
connectDB();

//rest object
const app = express();
app.use(express.json());
//middelwares
app.use(cors());
//app.use(express.json());
app.use(morgan("dev"));
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoutes);
//rest api
app.use("*", function (req, res) {
  res.sendFile(path.join({ root: __dirname }, "./client/build/index.html"));
});


//PORT
const PORT = 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server Running on  mode on port ${PORT}`.bgCyan.white);
});
