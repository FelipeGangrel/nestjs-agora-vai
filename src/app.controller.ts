import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Roles('admin')
  getHello(): string {
    return this.appService.getHello();
  }
}
