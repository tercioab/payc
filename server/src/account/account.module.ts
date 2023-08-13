import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from 'src/user/user.service';
import { HistoricService } from 'src/historic/historic.service';

@Module({
  imports: [PrismaModule],
  controllers: [AccountController],
  providers: [AccountService, UserService, HistoricService],
})
export class AccountModule {}
