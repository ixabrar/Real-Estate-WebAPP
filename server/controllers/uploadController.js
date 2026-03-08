const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// File upload handler
exports.uploadFile = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next(new AppError("No file provided", 400));
  }

  try {
    // Build the full URL for the uploaded file
    const protocol = req.protocol;
    const host = req.get("host");
    const fileUrl = `/uploads/${req.file.filename}`;
    const fullUrl = `${protocol}://${host}${fileUrl}`;

    console.log("File uploaded successfully:", {
      filename: req.file.filename,
      path: req.file.path,
      url: fileUrl,
      fullUrl: fullUrl,
    });

    res.status(200).json({
      status: "success",
      data: {
        url: fullUrl, // Return full URL so React can access it from port 3000
        filename: req.file.filename,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return next(new AppError("File upload failed", 500));
  }
});


