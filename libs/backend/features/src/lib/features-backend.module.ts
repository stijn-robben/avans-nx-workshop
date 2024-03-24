import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { MenuItemController } from './menuitem/menuitem.controller';
import { UserService } from './user/user.service';
import { MenuItemService } from './menuitem/menuitem.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user/user.schema';
import { MenuItem, MenuItemSchema } from './menuitem/menuitem.schema';
@Module({

  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60m' },
    }), MongooseModule.forFeature([
      {name: User.name, schema: UserSchema },
      {name: MenuItem.name, schema: MenuItemSchema },
      
    
  ])
  ],
  controllers: [
    UserController,
    AuthController,
    MenuItemController,
  ],
  providers: [UserService, AuthService, MenuItemService],
  exports: [UserService, AuthService, MenuItemService],
})
export class FeaturesBackendModule {}
