import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/utils/auth.guard';
import { addToInventoryDto } from './inventory.dto';
import { InventoryService } from './inventory.service';

@Controller('/game-cortex-server/admin/v1/inventory')
export class InventoryController {
  constructor(private readonly _inventoryService: InventoryService) {}

  @Put('/add')
  @UseGuards(AuthGuard)
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
