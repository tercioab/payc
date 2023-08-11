import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  async update(updateUserDto: UpdateUserDto, id: number) {
    if (updateUserDto.password) {
      const userUpdate: Prisma.UserUpdateInput = {
        ...updateUserDto,
        password: await bcrypt.hash(updateUserDto.password, 10),
      };

      const updateUser = await this.prisma.user.update({
        where: { id },
        data: { ...userUpdate },
      });

      return {
        ...updateUser,
        password: undefined,
      };
    }
    const updateUser = await this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto },
    });

    return {
      ...updateUser,
      password: undefined,
    };
  }

  async delete(id: number) {
    await this.prisma.user.delete({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async checkIfEmailOrCPFExists(email: string, cpf: string) {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ email }, { cpf }],
      },
    });

    if (existingUser) {
      if (existingUser.email === email) {
        throw new HttpException('Email already in use', HttpStatus.CONFLICT);
      }
      if (existingUser.cpf === cpf) {
        throw new HttpException('CPF already in use', HttpStatus.CONFLICT);
      }
    }
  }
}
