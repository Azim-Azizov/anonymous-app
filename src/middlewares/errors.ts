export abstract class CustomError extends Error {
  public name!: string
  public status!: number
  public message!: string
  constructor(){
      super()
  }
}

export class UnauthenticatedError extends CustomError {
  constructor() {
    super()
    this.name = "UnauthenticatedError"
    this.status = 409
    this.message = "Authentication is required for this action"
  }
}

export class MissingFieldError extends CustomError {
  public field!: string
  constructor(field: string) {
    super()
    this.name = "MissingFieldError"
    this.status = 400
    this.message = "Undefined field(s)"
    this.field = field
  }
}

export class IncorrectFieldError extends CustomError {
  public field!: string
  constructor(field: string) {
    super()
    this.name = "IncorrectFieldError"
    this.status = 400
    this.message = "Incorrect field(s)"
    this.field = field
  }
}

export class UserExistsError extends CustomError {
  constructor() {
    super()
    this.name = "UserExistsError"
    this.status = 409
    this.message = "The user with this email already exists"
  }
}

export class OauthNotSupportedError extends CustomError {
  public field!: string
  constructor(field: string) {
    super()
    this.name = "OauthNotSupportedError"
    this.status = 1015
    this.message = "This email does not support oauth login. Enable it in the profile settings."
    this.field = field

export class SamePasswordError extends CustomError {
  constructor() {
    super()
    this.name = "SamePasswordError"
    this.status = 409
    this.message = "This password is identical to former one one"
  }
}

// export class IncorrectUsernameError extends CustomError {
//   constructor() {
//     super()
//     this.name = "IncorrectUsernameError"
//     this.status = 404
//     this.message = "User not found"
//   }
// }

// export class IncorrectPasswordError extends CustomError {
//   constructor() {
//     super()
//     this.name = "IncorrectPasswordError"
//     this.status = 400
//     this.message = "Password is incorrect"
//   }
// }

export class InternalServerError extends CustomError {
  public field!: string
  constructor(field: string) {
    super()
    this.name = "InternalServerError"
    this.status = 500
    this.message = "Internal server error"
    this.field = field
  }
}
