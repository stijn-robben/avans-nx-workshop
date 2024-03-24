/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Body, Controller, Post, UnauthorizedException, HttpCode, HttpStatus } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { IUser } from '@avans-nx-workshop/shared/api';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('login')
//   @HttpCode(HttpStatus.OK) // HTTP 200 for successful login
//   async login(@Body() body: any) {
//     const { emailAddress, password } = body;
//     const user = await this.authService.validateUser(emailAddress, password);
//     if (!user) {
//       throw new UnauthorizedException('Invalid credentials');
//     }
//     return this.authService.login(user);
//   }

//   @Post('register')
//   @HttpCode(HttpStatus.CREATED) // HTTP 201 for successful creation
//   async register(@Body() body: IUser) {
//     try {
//       const user = await this.authService.register(body);
//       // Do not return the password or any sensitive fields
//     //   const { password, ...result } = user;
//       return user;
//     } catch (error) {
//       // In case of any exception, throw an UnauthorizedException
//       throw new UnauthorizedException('Registration failed');
//     }
//   }
// }

import { Body, Controller, Post, UnauthorizedException, HttpCode, HttpStatus, UseGuards, Get, Req, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiUnauthorizedResponse, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from '@avans-nx-workshop/backend/dto';
import { JwtAuthGuard } from './jwtAuth.guard';
// import { RolesGuard } from './roles.guard';
// import { Roles } from './roles.decorator';
// import { UserService } from '../user/user.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Log in a user' })
  @ApiBody({ type: CreateUserDto }) // Assuming that the CreateUserDto has emailAddress and password fields
  @ApiResponse({ status: HttpStatus.OK, description: 'Successful login' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  async login(@Body() body: CreateUserDto) { // Using CreateUserDto for typing the body
    const { emailAddress, password } = body;
    const access_token = await this.authService.login(emailAddress, password); // authService.login now takes two arguments
    return { access_token }; // Return the token directly
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ description: 'User registration details', type: CreateUserDto })
  @ApiCreatedResponse({ description: 'User has been successfully registered.', type: CreateUserDto }) // Response type should be DTO, as it doesn't include password
  @ApiUnauthorizedResponse({ description: 'Registration failed' })
  async register(@Body() createUserDto: CreateUserDto) { 
    try {
      const user = await this.authService.register(createUserDto);
      // Exclude password and other sensitive details from the response
      const { password, ...result } = user;
      return result;
    } catch (error) {
      // In case of any exception, throw an UnauthorizedException
      throw new UnauthorizedException('Registration failed');
    }
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('admin')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Profile retrieved successfully'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBearerAuth()
  getProfile(@Req() req: any): any { // req.user should be properly typed
    // const { password, ...userWithoutPassword } = req.user;
   Logger.debug('Get user profile',req.user);
   const  user =  this.authService.profile(req.user.sub);
    return user; // Exclude password when returning the profile
  }
}
