import { Controller, Get } from '@nestjs/common';
import { Roles } from 'src/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Roles('admin')
  getHello(): string {
    return this.appService.getHello();
  }
}
