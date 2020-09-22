import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO, UpdateUserDTO } from './dtos';
import { User } from './entities';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {}

  listUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOneUserByEmail(userEmail: string): Promise<User> {
    return this.usersRepository.findOneUserByEmail(userEmail);
  }

  findOneUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne(userId);
  }

  createUser(userData: CreateUserDTO): Promise<User> {
    return this.usersRepository.createUser(userData);
  }

  updateUser(userId: string, userData: UpdateUserDTO): Promise<User> {
    return this.usersRepository.updateUser(userId, userData);
  }
}
