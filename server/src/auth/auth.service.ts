import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly tokenService: TokenService,
  ) {}

  async login(user: User) {
    const { password: _, ...payload } = user;
    const jwtToken = this.jwtService.sign(payload);
    const data = {
      hash: jwtToken,
      username: payload.name,
      email: payload.email,
    };
    await this.tokenService.save(data);
    return { token: jwtToken, user: payload };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user) {
      const isPassWordValid = await bcrypt.compare(password, user.password);

      if (isPassWordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new Error('Email address or password provided is incorrect');
  }
}
