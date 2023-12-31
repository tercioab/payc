import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { IsPublic } from 'src/auth/decorators/is-public.dedcorator';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

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

  @Patch()
  async update(
    @Body() updateUserDto: UpdateUserDto,
    @CurrentUser() user: User,
  ) {
    const { email, cpf } = updateUserDto;
    await this.userService.checkIfEmailOrCPFExists(email, cpf);
    return this.userService.update(updateUserDto, user.id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  async delete(@CurrentUser() user: User) {
    await this.userService.delete(user.id);
  }

  @Get(':cpf')
  async findByCpf(@Param('cpf') cpf: string) {
    return this.userService.findByCpf(cpf);
  }
}
