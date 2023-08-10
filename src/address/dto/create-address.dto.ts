import { IsString, MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAddressDto {
  userId: number;
  @IsNotEmpty()
  @IsNumber()
  @MinLength(8)
  cep: number;
  @IsNotEmpty()
  @IsString()
  city: string;
  @IsNotEmpty()
  @IsString()
  state: string;
  @IsNotEmpty()
  @IsString()
  district: string;
  @IsNotEmpty()
  @IsString()
  street: string;
  @IsNotEmpty()
  @IsNumber()
  number: number;
}
