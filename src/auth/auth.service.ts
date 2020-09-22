import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordHelper } from 'src/helpers';
import { User } from 'src/users/entities';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  /**
   * This method is used by the LocalStrategy class
   * to verify the username and password against the database
   * @param username
   * @param password
   */
  async validateUser(username: string, password: string): Promise<any> {
    const user: User = await this.usersService.findOneUserByEmail(username);
    if (user && PasswordHelper.comparePassword(password, user.password)) {
      const { password, ...userMetadata } = user;
      return userMetadata;
    }
  }

  loginUser(user: any): any {
    const { id, email, role } = user;
    const jwtPayload = { id, email, role };
    return {
      id,
      email,
      role,
      accessToken: this.jwtService.sign(jwtPayload),
    };
  }

  getLoggedUserProfile(userId: string) {
    return this.usersService.findOneUserById(userId);
  }
}
