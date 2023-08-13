import { Module } from '@nestjs/common';
import { HistoricService } from './historic.service';
import { HistoricController } from './historic.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HistoricController],
  providers: [HistoricService],
})
export class HistoricModule {}
