import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealModule } from '@avans-nx-workshop/backend/features';
import { MenuItemModule } from '@avans-nx-workshop/backend/features';

@Module({
  imports: [MealModule, MenuItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
