export const errMiddleware = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    err.statusCode = 400;
  }

  res.status(err.statusCode || 500).json({ message: err.message });
};

export const notFoundMiddleware = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
