export const errMiddleware = (err, req, res, next) => {
  console.log(`Error happened: ${err}`);
  if (err.name === "ValidationError") {
    err.statusCode = 400;
  }
  // Express application to catch and respond to errors that occur during the processing of requests.(Internal Server Error)
  res.status(err.statusCode || 500).json({ message: err.message });
};

export const notFoundMiddleware = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
