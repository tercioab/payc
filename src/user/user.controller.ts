import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { IsPublic } from 'src/auth/decorators/is-public.dedcorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @IsPublic()
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const { email, cpf } = createUserDto;
    await this.userService.checkIfEmailOrCPFExists(email, cpf);
    return this.userService.create(createUserDto);
  }
}
