import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { authConfig, databaseConfig } from 'src/config';
import { RolesGuard } from 'src/guards';
import { UsersModule } from 'src/domain/users';
import { AuthModule } from 'src/domain/auth';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, authConfig],
      envFilePath: ['env/.development.env', 'env/.env'],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (c: ConfigService) => await c.get('database'),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
