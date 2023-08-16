import { Body, Controller, Post, Put } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { TokenService } from './token.service';
import { UpdateTokenDto } from './dto/update-token.dto';
import { IsPublic } from '../auth/decorators/is-public.dedcorator';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @IsPublic()
  @Put('refresh')
  async refreshToken(@Body() data: UpdateTokenDto) {
    return this.tokenService.refreshToken(data);
  }
}
