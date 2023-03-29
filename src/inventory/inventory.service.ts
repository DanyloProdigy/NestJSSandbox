import { Injectable } from '@nestjs/common';
import { addToInventoryDto } from './inventory.dto';

@Injectable()
export class InventoryService {
  public async getString(input: addToInventoryDto): Promise<string> {
    const { userId, assets } = input;
    await new Promise((resolve) => setTimeout(resolve, 100));
    return `UsedId: ${userId}, with Assets: ${assets}`;
  }
}
