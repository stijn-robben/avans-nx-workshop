import { IsMongoId } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserRole, IUser } from '@avans-nx-workshop/shared/api';

export type UserDocument = User & Document;

@Schema()
export class User implements IUser {
    @IsMongoId()
    _id!: string;

    @Prop({ required: true })
    firstName!: string;

    @Prop({ required: true })
    lastName!: string;

    @Prop({
        required: true,
        unique: true,
    })
    emailAddress!: string;

    @Prop({ required: true, select : true})
    password!: string;

    @Prop()
    birthdate!: Date | null;

    @Prop({type: String, enum: UserRole, default: UserRole.Guest })
    role!: UserRole;

    @Prop({ required: true })
    postalCode!: string;

    @Prop({ required: true })
    houseNumber!: string;

    @Prop({ required: true })
    phoneNumber!: string;

    @Prop()
    token: string | undefined;

}

export const UserSchema = SchemaFactory.createForClass(User);
