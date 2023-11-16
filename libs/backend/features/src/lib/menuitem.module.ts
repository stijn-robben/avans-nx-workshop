import { Module } from '@nestjs/common';
import { MenuItemService } from './menuitem/menuitem.service';
import { MenuItemController } from './menuitem/menuitem.controller';

@Module({
  controllers: [MenuItemController],
  providers: [MenuItemService],
  exports: [MenuItemService],
})
export class MenuItemModule {}
