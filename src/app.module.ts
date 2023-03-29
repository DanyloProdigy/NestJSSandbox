import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [HelloModule, InventoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
