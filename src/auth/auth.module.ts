import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { JwtStrategy, LocalStrategy } from 'src/strategies';
import { UsersModule } from 'src/users';
import { AuthController, AuthService } from 'src/auth';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      useFactory: async (c: ConfigService) => await c.get('auth'),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}
