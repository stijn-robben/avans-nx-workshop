import { Controller } from '@nestjs/common';
import { MenuItemService } from './menuitem.service';
import { Get, Param, Post, Body } from '@nestjs/common';
import { IMenuItem } from '@avans-nx-workshop/shared/api';
import { CreateMenuItemDto } from '@avans-nx-workshop/backend/dto';

@Controller('menuitem')
export class MenuItemController {
    constructor(private menuitemService: MenuItemService) {}

    @Get('')
    getAll(): IMenuItem[] {
        return this.menuitemService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): IMenuItem {
        return this.menuitemService.getOne(id);
    }

    @Post('')
    create(@Body() data: CreateMenuItemDto): IMenuItem {
        return this.menuitemService.create(data);
    }
}
