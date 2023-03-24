import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  public getString(): string {
    return 'get hello';
  }

  public postString(): string {
    return 'post hello';
  }
}
