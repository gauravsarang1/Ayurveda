class ApiError extends Error {
  public statusCode: number;
  public errors?: object;

  constructor(
    statusCode: number,
    message: string,
    errors?: object,
    stack?: string
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
