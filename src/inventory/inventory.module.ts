import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { JoiPipeModule } from 'nestjs-joi';

@Module({
  providers: [InventoryService],
  imports: [JoiPipeModule],
  controllers: [InventoryController],
})
export class InventoryModule {}
