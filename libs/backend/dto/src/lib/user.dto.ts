import {
    IsNotEmpty,
    IsString,
    IsEmail,
    IsEnum,
    IsOptional,
    IsDate,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  import { UserRole } from '@avans-nx-workshop/shared/api';
  import { ApiProperty,ApiPropertyOptional } from '@nestjs/swagger';
  export class CreateUserDto {
    @ApiProperty({ example: 'John', description: 'The first name of the user' })
    @IsNotEmpty()
    @IsString()
    firstName!: string;
  
    @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
    @IsNotEmpty()
    @IsString()
    lastName!: string;
  
    @ApiProperty({ example: 'john.doe@example.com', description: 'The email address of the user' })
    @IsEmail()
    emailAddress!: string;
  
    @ApiProperty({ example: 'password', description: 'The password of the user', type: 'string' })
    @IsNotEmpty()
    @IsString()
    password!: string;
  
    @ApiProperty({ example: '1990-01-01', description: 'The birthdate of the user', type: 'string', format: 'date' })
    @IsDate()
    @Type(() => Date) // Ensures that the string is transformed into a Date object
    birthdate!: Date;
    
    @ApiProperty({ example: '12345', description: 'The postal code of the user' })
    @IsNotEmpty()
    @IsString()
    postalCode!: string;
  
    @ApiProperty({ example: '42', description: 'The house number of the user' })
    @IsNotEmpty()
    @IsString()
    houseNumber!: string;
  
    @ApiProperty({ example: '0123456789', description: 'The phone number of the user' })
    @IsNotEmpty()
    @IsString()
    phoneNumber!: string;
  
  
    @ApiProperty({ enum: UserRole, description: 'The role of the user' })
    @IsEnum(UserRole)
    role!: UserRole;
  }
  
  export class UpdateUserDto {
    @ApiPropertyOptional({ example: 'John', description: 'The first name of the user' })
    @IsOptional()
    @IsString()
    firstName?: string;
  
    @ApiPropertyOptional({ example: 'Doe', description: 'The last name of the user' })
    @IsOptional()
    @IsString()
    lastName?: string;
  
    @ApiPropertyOptional({ example: 'john.doe@example.com', description: 'The email address of the user' })
    @IsOptional()
    @IsEmail()
    emailAddress?: string;
  
    @ApiPropertyOptional({ description: 'The password of the user' })
    @IsOptional()
    @IsString()
    password?: string;
  
    @ApiPropertyOptional({ example: '1990-01-01', description: 'The birthdate of the user', type: 'string', format: 'date' })
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    birthdate?: Date;
  
   
  

    @ApiPropertyOptional({ example: '12345', description: 'The postal code of the user' })
    @IsOptional()
    @IsString()
    postalCode?: string;
  
    @ApiPropertyOptional({ example: '42', description: 'The house number of the user' })
    @IsOptional()
    @IsString()
    houseNumber?: string;
  
    @ApiPropertyOptional({ example: '0123456789', description: 'The phone number of the user' })
    @IsOptional()
    @IsString()
    phoneNumber?: string;
  
    @ApiPropertyOptional({ enum: UserRole, description: 'The role of the user' })
    @IsOptional()
    @IsEnum(UserRole)
    role?: UserRole;
  }
  
  export class UpsertUserDto extends CreateUserDto {
    id!: number;
  }