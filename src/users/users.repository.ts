import { EntityRepository, Repository } from 'typeorm';
import { PasswordHelper } from '../helpers';
import { CreateUserDTO, UpdateUserDTO } from './dtos';
import { User } from './entities';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(userData: CreateUserDTO): Promise<User> {
    const user = {
      ...new User(),
      ...userData,
      password: PasswordHelper.generatePassword(userData.password),
    };
    return await this.save(user);
  }

  async updateUser(userId: string, userData: UpdateUserDTO): Promise<User> {
    const user = await this.findOne(userId);
    Object.assign(user, userData);
    return await this.save(user);
  }

  async findOneUserByEmail(userEmail: string): Promise<User> {
    const where = { email: userEmail };
    return await this.findOne({ where });
  }
}
