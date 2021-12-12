import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  id!: string;

  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsDateString()
  dateOfBirth!: string;

  @IsNumber()
  @IsOptional()
  salary?: number;
}
