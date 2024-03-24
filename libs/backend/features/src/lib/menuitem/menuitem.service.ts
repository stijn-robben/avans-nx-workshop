import { Injectable, NotFoundException } from '@nestjs/common';
import { IMenuItem} from '@avans-nx-workshop/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';
import { RouterModule } from '@angular/router';
import { MenuItem, MenuItemDocument } from './menuitem.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateMenuItemDto } from '@avans-nx-workshop/backend/dto';
@Injectable()
export class MenuItemService {
    TAG = 'MenuItemService';
    private readonly logger: Logger = new Logger(MenuItemService.name);

    constructor(
        @InjectModel(MenuItem.name) private menuItemModel: Model<MenuItemDocument>,
    ) {}

    async findAll(): Promise<IMenuItem[]> {
        this.logger.log(`Finding all items`);
        const items = await this.menuItemModel.find();
        return items;
    }

    async findOne(_id: string): Promise<IMenuItem | null> {
        this.logger.log(`finding menuitem with id ${_id}`);
        const item = await this.menuItemModel.findOne({ _id }).exec();
        if (!item) {
            this.logger.debug('Item not found');
        }
        return item;
    }

    async update(_id: string, menuitem: UpdateMenuItemDto): Promise<IMenuItem | null> {
        this.logger.log(`Update user ${menuitem.name}`);
        return this.menuItemModel.findByIdAndUpdate({ _id }, menuitem);
    }

    async delete(_id: string): Promise<{ deleted: boolean; message?: string }> {
        try {
            const result = await this.menuItemModel.deleteOne({ _id }).exec();
            if (result.deletedCount === 0) {
                this.logger.debug(`No menuitem found to delete with id: ${_id}`);
                return { deleted: false, message: 'No menuitem found with that ID' };
            }
            this.logger.log(`Deleted menuitem with id: ${_id}`);
            return { deleted: true };
        } catch (error) {
            this.logger.error(`Error deleting menuitem with id ${_id}: ${error}`);
            throw error;
        }
    }

    async create(menuItemData: IMenuItem): Promise<MenuItemDocument> {
        this.logger.log('Creating a new menuitem');
        const createdMenuItem = new this.menuItemModel(menuItemData);
        await createdMenuItem.save();
        this.logger.log(`New menuitem created with ID: ${createdMenuItem._id}`);
    
        return createdMenuItem;
      }
}