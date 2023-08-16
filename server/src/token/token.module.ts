import { Module, forwardRef } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
@Module({
  imports: [forwardRef(() => AuthModule), UserModule],
  controllers: [TokenController],
  providers: [TokenService, PrismaService, AuthService, JwtService, UserService],
  exports: [TokenService],
})
export class TokenModule {}
