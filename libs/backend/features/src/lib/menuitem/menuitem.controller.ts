/* eslint-disable @typescript-eslint/no-explicit-any */
import { Body, Controller, Get, HttpCode, HttpStatus, NotFoundException, Param, Put, Delete, BadRequestException, Post, Logger } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMenuItemDto, UpdateMenuItemDto } from '@avans-nx-workshop/backend/dto';
import {  IMenuItem } from '@avans-nx-workshop/shared/api';
import { MenuItemService } from './menuitem.service';

@ApiTags('menuitem')
@Controller('menuitem')
export class MenuItemController {
  constructor(private readonly menuItemService: MenuItemService) {}
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, description: 'Return all menuitems.' })
    getAll(){
        return this.menuItemService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get a menuitem by id' })
    @ApiOkResponse({ description: 'Returned single menuitem.' })
    @ApiNotFoundResponse({ description: 'Menuitem not found.' })
    findOne(@Param('id') id: string){
    const menuitem = this.menuItemService.findOne(id);
    if (!menuitem) {
      throw new NotFoundException('Menuitem not found');
    }
    return menuitem;
  }
  @Put(':id')
  @ApiOperation({ summary: 'Update a menuitem' })
  @ApiOkResponse({ description: 'The menuitem has been successfully updated.' })
  @ApiBody({ type: UpdateMenuItemDto })
   update(@Param('id') id: string, @Body() updateMenuItemDto: Partial<IMenuItem>){
    if (!(id)) {
        throw new BadRequestException('Invalid menuitem ID');
    }
    return this.menuItemService.update(id, updateMenuItemDto);
}
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new menuitem' })
  @ApiBody({ type: CreateMenuItemDto })
  @ApiCreatedResponse({ description: 'The course has been successfully created.'})
  create(@Body() createMenuItemDto: IMenuItem) {
    const menuitem = this.menuItemService.create(createMenuItemDto);
    if (!menuitem) {
      throw new BadRequestException('Failed to create the menuitem');
    }
    return menuitem;
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete an menuitem' })
  @ApiOkResponse({ description: 'The menuitem has been successfully deleted.'})
  delete(@Param('id') id: string) {
  if (!id) {
      throw new BadRequestException('Invalid menuitem ID');
  }
  return this.menuItemService.delete(id);
}

}




