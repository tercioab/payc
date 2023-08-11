import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAccountDto: CreateAccountDto) {
    return this.prisma.account.create({ data: { ...createAccountDto } });
  }

  findOne(id: number) {
    return this.prisma.account.findUnique({ where: { userId: id } });
  }

  async updateBalance(userId: number, newBalance: number) {
    return this.prisma.account.update({
      where: { userId },
      data: { balance: newBalance },
    });
  }
}
