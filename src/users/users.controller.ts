import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/decorators';
import { JwtAuthGuard } from 'src/guards';
import { CreateUserDTO, UpdateUserDTO, User, UsersService } from 'src/users';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @Roles('admin')
  @UseGuards(JwtAuthGuard)
  listUsers(): Promise<User[]> {
    return this.usersService.listUsers();
  }

  @Post()
  createUser(@Body() userData: CreateUserDTO): Promise<User> {
    return this.usersService.createUser(userData);
  }

  @Put(':id')
  updateUser(
    @Param('id') userId: string,
    @Body() userData: UpdateUserDTO,
  ): Promise<User> {
    return this.usersService.updateUser(userId, userData);
  }
}
