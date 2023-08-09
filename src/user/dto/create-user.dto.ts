import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  IsNumber,
} from 'class-validator';

export class CreateUserDto extends User {
  @IsString()
  name: string;
  @IsString()
  subName: string;
  @IsNumber()
  @MinLength(11)
  @MaxLength(11)
  cpf: string;
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
