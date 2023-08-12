import { Injectable } from '@nestjs/common';
import { CreateHistoricDto } from './dto/create-historic.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HistoricService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createHistoricDto: CreateHistoricDto) {
    return this.prisma.historic.create({ data: { ...createHistoricDto } });
  }

  async findAll(userId: number) {
    return this.prisma.historic.findMany({
      where: { userId },
    });
  }
}
