import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { PrismaService } from '../prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TokenService {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async save(createTokenDto: CreateTokenDto) {
    const objToken = await this.prisma.token.findFirst({
      where: { email: createTokenDto.email },
    });

    if (objToken) {
      await this.prisma.token.updateMany({
        where: { email: objToken.email },
        data: { hash: createTokenDto.hash },
      });
    } else {
      await this.prisma.token.create({
        data: { ...createTokenDto },
      });
    }
  }

  async refreshToken(updateTokenDto: UpdateTokenDto) {
    const oldToken = await this.prisma.token.findFirst({
      where: { hash: updateTokenDto.hash },
    });

    if (oldToken) {
      const user = await this.userService.findByEmail(oldToken.email)
      return this.authService.login(user)
    } else {
      throw new HttpException('Not valid token', HttpStatus.UNAUTHORIZED);
    }
  }
}
