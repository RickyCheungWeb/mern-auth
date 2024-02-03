const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
export default errorHandler;
// can be used by  next() for error handling in controller functions.
