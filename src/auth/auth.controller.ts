import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard, LocalAuthGuard } from 'src/guards';
import { AuthService, LoginUserDTO } from 'src/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  loginUser(@Request() req, @Body() _: LoginUserDTO) {
    return this.authService.loginUser(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMyProfile(@Request() req) {
    const { userId } = req;
    return this.authService.getLoggedUserProfile(userId);
  }
}
