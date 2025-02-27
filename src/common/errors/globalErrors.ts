class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number = 500) {
      super(message); // Call the parent class constructor
      this.statusCode = statusCode; // Default to 500 if not provided
      this.isOperational = true; // Indicate if it's an expected error (operational) or a programming error
  }
}

class NotFoundError extends AppError {
  constructor(message: string = "Not Found") {
      super(message, 404);
  }
}

class BadRequestError extends AppError {
  constructor(message: string = "Bad Request") {
      super(message, 400);
  }
}

class ForbiddenError extends AppError {
  constructor(message: string = "Forbidden") {
      super(message, 403);
  }
}

class ConflictError extends AppError {
  constructor(message: string = "Conflict") {
      super(message, 409);
  }
}

class InternalServerError extends AppError {
  constructor(message: string = "Internal Server Error") {
      super(message, 500);
  }
}

export {
  AppError,
  NotFoundError,
  BadRequestError,
  ForbiddenError,
  ConflictError,
  InternalServerError
};