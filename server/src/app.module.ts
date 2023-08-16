import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AddressModule } from './address/address.module';
import { AccountModule } from './account/account.module';
import { HistoricModule } from './historic/historic.module';
import { TokenModule } from './token/token.module';

@Module({
<<<<<<< HEAD
  imports: [PrismaModule, UserModule, AuthModule, AddressModule, AccountModule, HistoricModule, TokenModule],
=======
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    AddressModule,
    AccountModule,
    HistoricModule,
  ],
>>>>>>> tercio-dev-new-refresh
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
