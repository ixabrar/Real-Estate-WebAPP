const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
require("dotenv").config();
// Custom Imports
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoutes");
const listingRouter = require("./routes/listingRoutes");
const upload = require("./utils/multerConfig");
const uploadController = require("./controllers/uploadController");

const corsOptions = {
  origin: "*",
  methods: "*",
  allowedHeaders: "*",
};

const app = express();
app.use(cors(corsOptions));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Serve static files from uploads directory
const uploadsPath = path.join(__dirname, "uploads");
app.use("/uploads", express.static(uploadsPath));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// FILE UPLOAD ROUTES
app.post("/api/v1/users/upload", upload.single("file"), uploadController.uploadFile);
app.post("/api/v1/listings/upload", upload.single("file"), uploadController.uploadFile);

// Multer error handler
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        status: "error",
        message: "File too large. Max size is 2MB",
      });
    }
  }
  if (err && err.message) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
  next(err);
});

// ROUTES
app.use("/api/v1/users", userRouter);
app.use("/api/v1/listings", listingRouter);

// PRODUCTION SETUP
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Real Estate API is running...");
  });
}

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
