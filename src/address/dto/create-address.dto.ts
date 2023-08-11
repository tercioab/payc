import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAddressDto {
  userId: number;
  @IsNotEmpty()
  @IsNumber()
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
