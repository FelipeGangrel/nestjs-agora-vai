import * as bcrypt from 'bcrypt';

export abstract class PasswordHelper {
  static generatePassword(password: string) {
    return bcrypt.hashSync(password, 8);
  }
  static comparePassword(password: string, passwordHash: string) {
    return bcrypt.compareSync(password, passwordHash);
  }
}
