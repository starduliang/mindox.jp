export class BusinessError extends Error {
  constructor(
    message: string = 'Business Error',
    public code: number
  ) {
    super(message)
    this.name = this.constructor.name
  }
}

class ValidationError extends BusinessError {
  constructor(message: string = 'Validation Error') {
    super(message, 400)
    this.name = 'ValidationError'
  }
}

class PermissionError extends BusinessError {
  constructor(message: string = 'Permission Error') {
    super(message, 403)
    this.name = 'PermissionError'
  }
}

class NotFoundError extends BusinessError {
  constructor(message: string = 'Not Found') {
    super(message, 404)
    this.name = 'NotFoundError'
  }
}

class SystemError extends BusinessError {
  constructor(message: string = 'System Error') {
    super(message, 500)
    this.name = 'SystemError'
  }
}

class MethodNotAllowedError extends BusinessError {
  constructor(message: string = 'Method Not Allowed') {
    super(message, 405)
    this.name = 'MethodNotAllowedError'
  }
}

class UnauthorizedError extends BusinessError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401)
    this.name = 'UnauthorizedError'
  }
}

class ConflictError extends BusinessError {
  constructor(message: string = 'Conflict') {
    super(message, 409)
    this.name = 'ConflictError'
  }
}

export const Errors = {
  BusinessError,
  ValidationError,
  PermissionError,
  NotFoundError,
  SystemError,
  MethodNotAllowedError,
  UnauthorizedError,
  ConflictError
}
