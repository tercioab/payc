import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class UpdateTokenUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(11)
  oldtoken: string;
}
