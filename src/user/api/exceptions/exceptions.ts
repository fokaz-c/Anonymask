export class UserAlreadyExistsException extends Error {
  constructor(userId: string) {
    super(`User with ID ${userId} already exists`);
  }
}
