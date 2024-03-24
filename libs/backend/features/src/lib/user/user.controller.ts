/* eslint-disable @typescript-eslint/no-explicit-any */
import { JwtAuthGuard } from './../auth/jwtAuth.guard';

import {  IUser } from '@avans-nx-workshop/shared/api';
import { UserService } from './user.service';
import { BadRequestException, Controller, Delete, ForbiddenException, Put, Req, UseGuards } from '@nestjs/common';
import { Get, Param, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse,ApiOkResponse,ApiBadRequestResponse,ApiNotFoundResponse,ApiCreatedResponse,ApiBody} from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from '@avans-nx-workshop/backend/dto';
// import { Roles } from '../auth/roles.decorator';
// import { RolesGuard } from '../auth/roles.guard';


@ApiTags('users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('')
    @UseGuards(JwtAuthGuard)
    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles('admin')
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'Return all users.' })
   async getAll(): Promise<IUser[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles('admin')
    @ApiOperation({ summary: 'Get user by ID' })
    @ApiOkResponse({ description: 'Successfully retrieved user', type: IUser })
    @ApiBadRequestResponse({ description: 'Invalid user ID' })
    @ApiNotFoundResponse({ description: 'User not found' })
   async getOne(@Param('id') id: string, @Req() req:any): Promise<IUser | null>  {
        const requester = req.user;
    
        if ((!id)) {
          throw new BadRequestException('Invalid user ID');
        }
        
        if (requester.role !== 'admin' && requester.sub !== id) {
          throw new BadRequestException('Unauthorized access');
        }
    
        return  this.userService.findOne(id);
      }
    // getOne(@Param('id') id: string): IUser {
    //     const userId = parseInt(id, 10);
    //     if (isNaN(userId)) {
    //         throw new BadRequestException('Invalid user ID');
    //     }
    //     return this.userService.getOne(userId);
    // }
    
    @Post('create')
    @ApiOperation({ summary: 'Create a new user' })
    @ApiCreatedResponse({ description: 'The user has been successfully created.', type: IUser })
    @ApiBadRequestResponse({ description: 'Bad request. Invalid data.' })
    @ApiBody({ type: CreateUserDto })
    create(@Body() data: CreateUserDto):Promise<IUser> {
        return this.userService.create(data);
    }
    @Put(':id')
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Update an existing user' })
    @ApiOkResponse({ description: 'The user has been successfully updated.', type: IUser })
    @ApiBadRequestResponse({ description: 'Bad request. Invalid user ID or data.' })
    @ApiBody({ type: UpdateUserDto })
    update(@Param('id') id: string, @Body() data: UpdateUserDto, @Req() req:any): Promise<IUser|null> {
        const requester = req.user;
        const loggedInUserId = req.user.userId;
        const isAdmin = req.user.role == 'admin';
      
        if (id !== loggedInUserId && !isAdmin) {
          throw new ForbiddenException('Je bent niet gemachtigd om deze actie uit te voeren.');
        }

        if (!(id)) {
          throw new BadRequestException('Invalid user ID');
        }
        
        if (requester.role !== 'admin' && requester.sub !== id) {
          throw new BadRequestException('Unauthorized access');
        }
        return this.userService.update(id, data);
    
    }
    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles('admin')
    @ApiOperation({ summary: 'Delete a user by ID' })
    @ApiOkResponse({ description: 'Successfully deleted user' })
    @ApiBadRequestResponse({ description: 'Invalid user ID' })
    deleteUser(@Param('id') id: string, @Req() req:any): any {
        const requester = req.user;
        const loggedInUserId = req.user.userId;
        const isAdmin = req.user.role == 'admin';
    
        if (!(id)) {
          throw new BadRequestException('Invalid user ID');
        }
         if (id !== loggedInUserId && !isAdmin) {
          throw new ForbiddenException('Je bent niet gemachtigd om deze actie uit te voeren.');
        }
        if (requester.role !== 'admin' && requester.sub !== id) {
          throw new BadRequestException('Unauthorized access');
        }
       return this.userService.delete(id);
    }
    
}
