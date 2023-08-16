import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { jwtConstants } from './constants';
import { TokenService } from 'src/token/token.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenModule } from 'src/token/token.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    TokenModule,
    JwtModule.register({
<<<<<<< HEAD
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
=======
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30s' },
>>>>>>> tercio-dev-new-refresh
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    TokenService,
    LocalStrategy,
    JwtStrategy,
    PrismaService,
  ],
})
export class AuthModule {}
