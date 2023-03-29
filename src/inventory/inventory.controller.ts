import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Put,
} from '@nestjs/common';
import { addToInventoryDto } from './inventory.dto';
import { InventoryService } from './inventory.service';

@Controller('/game-cortex-server/admin/v1/inventory')
export class InventoryController {
  constructor(private readonly _inventoryService: InventoryService) {}

  @Put('/add')
  async addToInventory(@Body() request: addToInventoryDto): Promise<string> {
    try {
      if (!request.assets) {
        throw new Error('ASSETS_REQUIRED');
      }
      return await this._inventoryService.getString(request);
    } catch (err: any) {
      if (err.message === 'ASSETS_REQUIRED') {
        throw new BadRequestException('Assets Parameter is required');
      } else {
        throw new InternalServerErrorException(err);
      }
    }
  }
}
