import { Controller, Get, Post } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly _helloService: HelloService) {}
  @Get()
  getHello(): string {
    return this._helloService.getString();
  }

  @Post()
  postHello(): string {
    return this._helloService.postString();
  }
}
