import { IUser } from '@avans-nx-workshop/shared/api';
import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto, UpdateUserDto } from '@avans-nx-workshop/backend/dto';

@Injectable()
export class UserService {
    TAG = 'UserService';
    private readonly logger: Logger = new Logger(UserService.name);

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    async findAll(): Promise<IUser[]> {
        this.logger.log(`Finding all items`);
        const items = await this.userModel.find().select('-password');
        return items;
    }

    async findOne(_id: string): Promise<IUser | null> {
        this.logger.log(`finding user with id ${_id}`);
        const item = await this.userModel.findOne({ _id }).exec();
        if (!item) {
            this.logger.debug('Item not found');
        }
        return item;
    }
    findOneByEmail(email: string) {
        this.logger.log(`Finding user by email ${email}`);
        return this.userModel.findOne({ emailAddress: email });
      }
    async create(user: CreateUserDto): Promise<IUser> {
        this.logger.log(`Create user ${user.firstName}`);
        const createdItem = new this.userModel(user);
        await createdItem.save();
        this.logger.log(`Created user ${createdItem.firstName} ${createdItem.lastName}`);
        return createdItem;
    }

    async update(_id: string, user: UpdateUserDto): Promise<IUser | null> {
        this.logger.log(`Update user ${user.firstName}`);
        return this.userModel.findByIdAndUpdate({ _id }, user);
    }
    async delete(_id: string): Promise<{ deleted: boolean; message?: string }> {
        try {
            const result = await this.userModel.deleteOne({ _id }).exec();
            if (result.deletedCount === 0) {
                this.logger.debug(`No user found to delete with id: ${_id}`);
                return { deleted: false, message: 'No user found with that ID' };
            }
            this.logger.log(`Deleted user with id: ${_id}`);
            return { deleted: true };
        } catch (error) {
            this.logger.error(`Error deleting user with id ${_id}: ${error}`);
            throw error;
        }
    }
      
}
